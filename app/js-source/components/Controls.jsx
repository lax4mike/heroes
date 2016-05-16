import React, { PropTypes } from "react";
import viewTypes from "../common/viewTypes.js";

export default React.createClass({

    displayName: "Controls",

    propTypes: {
        onViewChange: PropTypes.func.isRequired,
        currentViewId: PropTypes.string.isRequired
    },

    handleViewChange: function(e){
        this.props.onViewChange(e.target.value);
    },

    render: function(){

        const { currentViewId } = this.props;

        return (
            <div className="controls">

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
