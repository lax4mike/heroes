import React, { PropTypes } from "react";
import HeroCard from "./HeroCard.jsx";

export default React.createClass({

    displayName: "App",

    propTypes: {
        allHeros : PropTypes.array.isRequired
    },

    render: function(){

        return (
            <div className="app">

                <div className="header">
                    <h1>Superheros!</h1>
                    <a href="data/heros.json" target="_blank">heros.json</a>
                </div>


                <br/>
            
                <div className="hero-list">
                    {this.props.allHeros.map(function(hero, i){
                        return (
                            <HeroCard hero={hero} key={i}/>
                        );
                    })}
                </div>
               
            </div>
        );
    }

});
