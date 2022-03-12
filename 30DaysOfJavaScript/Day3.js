/*
objects are used to store keyed collections of 
various data and more complex entities.
*/

const employee = {
    firstName: "Jonel",
    lastName: "Tapia",
    Age: 21,
    Dream: "Software Engineer",
    isGrinding: true,
    "Favorite Game": "Dota"
}


for(let key in employee){
    console.log(employee[key])
}
