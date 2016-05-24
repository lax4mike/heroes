import React, { PropTypes } from "react";


export default React.createClass({

    displayName: "SyncSelect",

    propTypes: {
        options: PropTypes.arrayOf(PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired
        })).isRequired,
        onSelectionChange: PropTypes.func.isRequired
    },

    getInitialState: function(){
        return {
            selectedIndex: 0,
            isOpen: false
        };
    },

    // clean up any event listeners
    componentWillUnmount: function(){
        window.removeEventListener("click", this.handleClickAway, true);
    },

    componentDidUpdate: function(prevProps, prevState){

        // if the dropdown is now open, listen for a click away
        if (this.state.isOpen){
            window.addEventListener("click", this.handleClickAway, true);
        }
        // otherwise, make sure the click away listener is removed
        else {
            window.removeEventListener("click", this.handleClickAway, true);
        }

        // if the selectedIndex changed, alert the parent
        if (prevState.selectedIndex !== this.state.selectedIndex){
            const selectedOption = this.props.options[this.state.selectedIndex];
            this.props.onSelectionChange(selectedOption);
        }
    },

    handleClickAway: function(e){
        console.log("mouseup");
        this.setState({ isOpen: false });
    },

    handleBoxClick: function(){
        this.setState({ isOpen: !this.state.isOpen });
    },

    handleOptionClick: function(index, event){
        console.log("click");
        this.setState({
            selectedIndex: index,
            isOpen: false
        });
    },

    handleNativeSelectChange: function(event){
        const dd = event.target;
        // http://stackoverflow.com/questions/1085801/get-selected-value-in-dropdown-list-using-javascript
        const selectedIndex = dd.options[dd.selectedIndex].value;
        this.setState({ selectedIndex });
    },

    render: function(){

        // extract some variables from this.props and this.state
        const { options } = this.props;
        const { isOpen, selectedIndex } = this.state;

        const dropdownStyle = {
            display: (isOpen) ? "block" : "none"
        };

        return (
            <div className="sync-select">

                <div className="sync-select__box" onClick={this.handleBoxClick}>
                    {options[selectedIndex].label}
                </div>

                <div className="sync-select__dropdown" style={dropdownStyle}>
                    { // add each option to the dropdown
                    options.map((o, i) => (
                        <div
                            key={o.value}
                            className="sync-select__option"
                            onClick={this.handleOptionClick.bind(null, i)}
                        >
                            {o.label}
                        </div>
                    ))}
                </div>


                <select
                    onChange={this.handleNativeSelectChange}
                    value={selectedIndex}
                >
                    { // add each option to the dropdown
                    options.map((o, i) => (
                        <option
                            key={o.value}
                            className="sync-select__option"
                            value={i}
                            onClick={this.handleOptionClick.bind(null, i)}
                        >
                            {o.label}
                        </option>
                    ))}
                </select>

            </div>
        );
    }
});
