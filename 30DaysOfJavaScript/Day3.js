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

// we can not acess the multiword properties with doc notation
// employee.Favorite Game == error
// employee["First Game"] == success

for(let key in employee){
    console.log(employee[key])
}

const anotherEmployee = {};
anotherEmployee["Software Engineer"] = true
console.log(anotherEmployee)
