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
            currentViewId: viewTypes[0].id
        };
    },

    handleViewChange: function(viewId){
        this.setState({
            currentViewId: viewId
        });
    },

    render: function(){

        const { currentViewId } = this.state;

        return (
            <div className="app">

                <div className="header">
                    <h1>Superheroes!</h1>
                    <a href="data/heroes.json" target="_blank">heroes.json</a>
                </div>

                <Controls
                    onViewChange={this.handleViewChange}
                    currentViewId={currentViewId}
                />
                
                <HeroList
                    heros={this.props.allHeroes}
                    currentViewId={currentViewId}
                />

            </div>
        );
    }

});
