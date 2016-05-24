import React, { PropTypes } from "react";
import SyncSelect from "./SyncSelect.jsx";


export default React.createClass({

    propTypes: {
        viewTypes: PropTypes.arrayOf(PropTypes.shape({
            label: PropTypes.string.isRequired,
            id   : PropTypes.string.isRequired
        })).isRequired,
        currentViewId  : PropTypes.string.isRequired,
        onViewChange   : PropTypes.func.isRequired,
        filterQuery    : PropTypes.string.isRequired,
        onFilterChange : PropTypes.func.isRequired,
        sortOptions    : PropTypes.array.isRequired,
        onSortChange   : PropTypes.func.isRequired
    },

    handleViewChange: function(e){
        this.props.onViewChange(e.target.value);
    },

    handleFilterChange: function(e){
        this.props.onFilterChange(e.target.value)
    },

    handleSortChange: function(selected){
        this.props.onSortChange(selected)
    },

    render: function(){

        const { currentViewId, filterQuery, viewTypes, sortOptions } = this.props;

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

                <div className="sort">
                    Sort:
                    <SyncSelect
                        options={sortOptions}
                        onSelectionChange={this.handleSortChange}
                    />
                </div>

            </div>
        );
    }
});
