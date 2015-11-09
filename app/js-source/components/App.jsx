import React, { PropTypes } from "react";
import HeroList   from "./HeroList.jsx";
import JsonViewer from "./JsonViewer.jsx";

export default React.createClass({

    displayName: "App",

    propTypes: {
        allHeroes : PropTypes.array.isRequired,
        myData    : PropTypes.any.isRequired
    },

    render: function(){

        return (
            <div className="app">

                <div className="header">
                    <h1>Superheroes!</h1>
                    <a href="data/heroes.json" target="_blank">heroes.json</a>
                </div>

                <br/>

                <h2>My Data</h2>
                <JsonViewer data={this.props.myData} />



                {/*
                <HeroList allHeroes={this.props.allHeroes} />
                */}

            </div>
        );
    }

});
