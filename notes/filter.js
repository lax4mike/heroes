// to run: `node filter.js`

// * first class function: functions are values
// * componsition, pass funcitons into "higher order" functions

var animals = [
    { name: "Hamilton"   , species: "dog"     },
    { name: "Steve"      , species: "fish"    },
    { name: "Fluffykins" , species: "rabbit"  },
    { name: "Sampson"    , species: "rabbit"  },
    { name: "Reebok"     , species: "hamster" },
    { name: "Sassafras"  , species: "dog"     },
    { name: "Laddy"      , species: "dog"     }
];

// filter is a function that takes another function that it will use to
// return a new filtered array

// var dogs = [];
// for (var i = 0; i < animals.length; i++){
//     if (animals[i].species === "dog"){
//         dogs.push(animals[i]);
//     }
// }


// less logical code - our function is composing with filter (reuse)
// var dogs = animals.filter(function(animal){
//     return animal.species === "dog";
// });


var isDog = function(animal){
    return animal.species === "dog";
};

var dogs = animals.filter(isDog);


console.log(dogs);
