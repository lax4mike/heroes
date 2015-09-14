import React from "react";
import App   from "./components/App.jsx";


fetch("data/heros.json")
    .then(function(response){
        // Convert response to JSON
        return response.json();
    })
    .then(function(json){

        const allHeros = json.heros;

        // pass this to App!
        const myData = getMyData(allHeros); 

        React.render(
            <App allHeros={allHeros} />, 
            document.querySelector(".react-mount")
        );

    });


function getMyData(allHeros){

    // Your code here!

    return allHeros;
}
