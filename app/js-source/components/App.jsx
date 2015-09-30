import React, { PropTypes } from "react";
import HeroList   from "./HeroList.jsx";
import JsonViewer from "./JsonViewer.jsx";

export default React.createClass({

    displayName: "App",

    propTypes: {
        allHeros : PropTypes.array.isRequired,
        myData   : PropTypes.any.isRequired
    },

    render: function(){

        return (
            <div className="app">

                <div className="header">
                    <h1>Superheros!</h1>
                    <a href="data/heros.json" target="_blank">heros.json</a>
                </div>

                <br/>

                <h2>My Data</h2>
                <JsonViewer data={this.props.myData} />



                {/*
                <HeroList allHeros={this.props.allHeros} />
                */}

            </div>
        );
    }

});
