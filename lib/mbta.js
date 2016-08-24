'use strict';

let start = prompt("Where do you want to start?");
let end = prompt("Where do you want to end?");

let GreenLine = ["Government", "Center", "Park Street", "Boylston",
   "Arlington", "Copley", "Hynes", "Kenmore"];

let OrangeLine = ["North Station", "Haymarket", "Park Street",
   "State", "Downtown Crossing", "Chinatown", "Back Bay", "Forest Hills"];
let RedLine = ["South Station", "Park Street", "Kendall",
   "Central", "Harvard", "Porter", "Davis", "Alewife"];

for(var i in RedLine) {
if(start == RedLine[i]){
let startInt = i;
console.log(startInt);
}
if(end == RedLine[i]) {
let endInt = i;
console.log(endInt);
}
}
let distance = startInt - endInt;

// Absolute value if traveling backwards
console.log("The distance between the start and end is: " + Math.abs(distance));
