import React from "react";
import App   from "./components/App.jsx";


fetch("data/heroes.json")
    .then(function(response){
        // Convert response to JSON
        return response.json();
    })
    .then(function(json){

        const allHeroes = json.heroes;

        const myData = getMyData(allHeroes);

        React.render(
            <App allHeroes={allHeroes} myData={myData} />,
            document.querySelector(".react-mount")
        );

    });


function getMyData(allHeroes){

    // Your code here!
    let myData = allHeroes;

    return myData;
}
