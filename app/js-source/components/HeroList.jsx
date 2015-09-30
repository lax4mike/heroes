import React, { PropTypes } from "react";

export default React.createClass({

    displayName: "HeroCard",

    propTypes: {
        allHeros: PropTypes.arrayOf(PropTypes.shape({
            name       : PropTypes.string.isRequired,
            profileImg : PropTypes.string.isRequired,
            url        : PropTypes.string.isRequired
        })).isRequired
    },

    render: function(){

        return (
            <div className="hero-list">
                {this.props.allHeros.map(function(hero, i){
                    return (
                        <div className="hero" key={i}>
                            <div className="hero__profileImg">
                                <img src={hero.profileImg} alt={hero.name} />
                            </div>

                            <div className="hero__info">
                                <div className="hero__name"> {hero.name} </div>

                                <div>
                                    <a href={hero.url} target="_blank">{hero.url}</a>
                                </div>
                                
                                <table>
                                    { Object.keys(hero.stats).map(function(stat){
                                        return (
                                            <tr key={stat}>
                                                <th>{stat}</th>
                                                <td>{hero.stats[stat]}</td>
                                            </tr>
                                        );
                                    }) }
                                </table>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
});
