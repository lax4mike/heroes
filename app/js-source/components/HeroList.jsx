import React, { PropTypes } from "react";
import classNames from "classnames";

export default React.createClass({

    displayName: "HeroList",

    propTypes: {
        heros: PropTypes.arrayOf(PropTypes.shape({
            name       : PropTypes.string.isRequired,
            profileImg : PropTypes.string.isRequired,
            url        : PropTypes.string.isRequired,
            stats      : PropTypes.object.isRequired
        })).isRequired,
        currentViewId: PropTypes.string.isRequired
    },

    render: function(){

        const { heros, currentViewId } = this.props;

        const heroListClasses = classNames("hero-list", {
            "hero-list--grid": currentViewId === "grid",
            "hero-list--list": currentViewId === "list"
        });

        return (
            <div className={heroListClasses}>
                {heros.map((hero, i) => {

                    // only show the name under the image in grid view
                    const heroNameGridStyles = {
                        display: (currentViewId === "grid") ? "block" : "none"
                    };

                    return (
                        <div className="hero" key={i}>
                            <div className="hero__profile-img">
                                <a href={hero.url} target="_blank">
                                    <img src={hero.profileImg} alt={hero.name} />

                                    {/* only show the hero name here if the view is a grid */}
                                    <div className="hero__name" style={heroNameGridStyles}>
                                        {hero.name}
                                    </div>
                                </a>
                            </div>

                            <div className="hero__info">
                                <div className="hero__name"> {hero.name} </div>

                                <div className="hero__url">
                                    <a href={hero.url} target="_blank">{hero.url}</a>
                                </div>

                                <table className="stats-table">
                                    <tbody>
                                    { Object.keys(hero.stats).map((stat) => {
                                        return (
                                            <tr key={stat}>
                                                <th>{stat}</th>
                                                <td>{hero.stats[stat]}</td>
                                            </tr>
                                        );
                                    }) }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
});
