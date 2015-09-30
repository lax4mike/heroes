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
            <div className="json" style={jsonStyles}>
                { JSON.stringify(this.props.data, null, 2) }
            </div>
        );
    }
});
