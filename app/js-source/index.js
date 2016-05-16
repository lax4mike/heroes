import React from "react";
import ReactDOM from "react-dom";
import HeroApp        from "./components/HeroApp.jsx";
import JsonViewer from "./components/JsonViewer.jsx";


fetch("data/heroes.json")
    .then((response) => {
        // Convert response to JSON
        return response.json();
    })
    .then((json) => {

        const allHeroes = json.heroes;

        ReactDOM.render(
            <HeroApp allHeroes={allHeroes} />,
            document.querySelector(".js-react-mount")
        );

        // ReactDOM.render(
        //     <JsonViewer allHeroes={allHeroes} data={getMyData(allHeroes)} />,
        //     document.querySelector(".js-react-mount")
        // );

    });


function getMyData(allHeroes){

    // Your code here!
    let myData = allHeroes;

    return myData;
}
