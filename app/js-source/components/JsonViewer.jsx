import React, { PropTypes } from "react";

export default React.createClass({

    displayName: "JsonViewer",

    propTypes: {
        data: PropTypes.any.isRequired
    },

    render: function(){

        const jsonStyles = {
            "fontFamily": "'Source Code Pro', monospace",
            "whiteSpace": "pre",
            "border": "1px solid #999",
            "padding": "16px",
            "wordWrap": "break-word"
        };

        return (
            <div className="app">

                <div className="header">
                    <h1>Superheroes!</h1>
                    <a href="data/heroes.json" target="_blank">heroes.json</a>
                </div>

                <h2>My Data</h2>
                <div className="json" style={jsonStyles}>
                    { JSON.stringify(this.props.data, null, 2) }
                </div>

            </div>
        );
    }
});
