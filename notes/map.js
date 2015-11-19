// to run: `node map.js`

// * transform the items in an array
// * es6 arrow functions

var animals = [
    { name: "Hamilton"   , species: "dog"     },
    { name: "Steve"      , species: "fish"    },
    { name: "Fluffykins" , species: "rabbit"  },
    { name: "Sampson"    , species: "rabbit"  },
    { name: "Reebok"     , species: "hamster" },
    { name: "Sassafras"  , species: "dog"     },
    { name: "Laddy"      , species: "dog"     }
];

// var names = [];
// for (var i = 0; i < animals.length; i++){
//     names.push(animals[i].name);
// }

// let names = animals.map(function(animal){
//     return animal.name;
//     return animal.name + " is a " + animal.species;
// });

let names = animals.map((a) => a.name);

console.log(names);
