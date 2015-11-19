// to run: `babel-node filter.js`

// * filter: transforms array into smaller array
// * map: transform the items of an array to a new array of the same length
// * find: finds a single item from an array

// These are all specialized.  If you can't find a higher order function that
// does what you want, you can use reduce.
// "multitool" of array transformations

var dogs = [
    { name: "Hamilton"   , age: 5  },
    { name: "Sassafras"  , age: 12 },
    { name: "Laddy"      , age: 10 }
];

// example: sum

// let totalAge = 0;
// for(let i = 0; i < dogs.length; i ++){
//     let dog = dogs[i];
//     totalAge += dog.age;
// }
// let averageAge = totalAge / dogs.length;

let totalAge = dogs.reduce((sum, dog) => {
    console.log(">>", sum, dog); // <- show this
    return sum + dog.age;
}, 0);
let averageAge = totalAge / dogs.length;

console.log("total", totalAge);
console.log("average", averageAge);


// make an object { name: age }
let dogsObj = dogs.reduce((obj, dog) => {
    obj[dog.name] = dog.age;
    return obj;
}, {});

console.log("dogsObj", JSON.stringify(dogsObj, null, 2));

// put it back
let newDogArray = Object.keys(dogsObj).map((name) => {
    return {
        name: name,
        age: dogsObj[name]
    };
});

console.log("newDogArray", newDogArray);
