import React, { PropTypes } from "react";
import viewTypes from "../common/viewTypes.js";

export default React.createClass({

    displayName: "Controls",

    propTypes: {
        currentViewId: PropTypes.string.isRequired,
        onViewChange: PropTypes.func.isRequired,
        filterQuery: PropTypes.string.isRequired,
        onFilterChange: PropTypes.func.isRequired
    },

    handleViewChange: function(e){
        this.props.onViewChange(e.target.value);
    },

    handleFilterChange: function(e){
        this.props.onFilterChange(e.target.value)
    },

    render: function(){

        const { currentViewId, filterQuery } = this.props;

        return (
            <div className="controls">

                <div className="contols__filter">
                    Filter: <input type="text" value={filterQuery} onChange={this.handleFilterChange}/>
                </div>

                <div className="controls__view">
                    { // show radio buttons for each viewType
                    viewTypes.map(view => (
                        <label key={view.id}>
                            <input
                                type     = "radio"
                                name     = "view-type"
                                value    = {view.id}
                                onChange = {this.handleViewChange}
                                checked  = {view.id === currentViewId}
                            />
                            {view.label}
                        </label>
                    ))}
                </div>

            </div>
        );
    }
});
