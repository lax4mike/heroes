import React, { PropTypes } from "react";
import HeroList   from "./HeroList.jsx";
import Controls   from "./Controls.jsx";
import viewTypes  from "../common/viewTypes.js";

export default React.createClass({

    displayName: "HeroApp",

    propTypes: {
        allHeroes : PropTypes.array.isRequired
    },

    getInitialState: function(){
        return {
            currentViewId: viewTypes[0].id,
            filterQuery: "",
            selectedSort: "mike"
        };
    },

    handleViewChange: function(viewId){
        this.setState({
            currentViewId: viewId
        });
    },

    handleFilterChange: function(query){
        this.setState({ filterQuery: query });
    },

    handleSortChange: function(selectedSort){
        this.setState({
            selectedSort: selectedSort.value
        });
    },

    render: function(){

        const { currentViewId, filterQuery, selectedSort } = this.state;
        const { allHeroes } = this.props;

        // filter the heroes list by our filter query
        const filteredHeros = allHeroes
            .filter(h => h.name.match(new RegExp(filterQuery, "i")));

        if (selectedSort){
            filteredHeros.sort((a, b) => {
                return b.stats[selectedSort] - a.stats[selectedSort]
            });
        }

        // format the sort options in a way that SyncSelect likes
        const sortOptions = Object.keys(allHeroes[0].stats)
            .map(k => ({ label: k, value: k }));

        return (
            <div className="app">

                <div className="header">
                    <h1>Superheroes!</h1>
                    <a href="data/heroes.json" target="_blank">heroes.json</a>
                </div>



                <Controls
                    viewTypes={viewTypes}
                    currentViewId={currentViewId}
                    onViewChange={this.handleViewChange}
                    filterQuery={filterQuery}
                    onFilterChange={this.handleFilterChange}
                    sortOptions={sortOptions}
                    onSortChange={this.handleSortChange}
                />


                { // show list of heros or "no results"
                (filteredHeros.length > 0)
                ? (
                    <HeroList
                        heros={filteredHeros}
                        currentViewId={currentViewId}
                    />
                )
                : (
                    <div className="no-results-message">
                        No heroes with the name '{filterQuery}'
                    </div>
                )}

            </div>
        );
    }

});
