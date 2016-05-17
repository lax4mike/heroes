import React, { PropTypes } from "react";
import HeroList   from "./HeroList.jsx";
import Controls    from "./Controls.jsx";
import viewTypes from "../common/viewTypes.js";

export default React.createClass({

    displayName: "HeroApp",

    propTypes: {
        allHeroes : PropTypes.array.isRequired
    },

    getInitialState: function(){
        return {
            currentViewId: viewTypes[0].id,
            filterQuery: ""
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

    render: function(){

        const { currentViewId, filterQuery } = this.state;
        const { allHeroes } = this.props;

        // filter the heroes list by our filter query
        const filteredHeros = allHeroes
            .filter(h => h.name.match(new RegExp(filterQuery, "i")));

        return (
            <div className="app">

                <div className="header">
                    <h1>Superheroes!</h1>
                    <a href="data/heroes.json" target="_blank">heroes.json</a>
                </div>

                <Controls
                    currentViewId={currentViewId}
                    onViewChange={this.handleViewChange}
                    filterQuery={filterQuery}
                    onFilterChange={this.handleFilterChange}
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
