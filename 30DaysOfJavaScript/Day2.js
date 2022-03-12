// Arrays

// There are 2 ways of declaring arrays

let myArray = new Array()
let emptyArray = []

// looping in every element in the arrays 

let exTraArray = ["Jonel", "Pogi", "Talaga", "Sobra"]
for(let index = 0; index < exTraArray.length; index++){
    console.log(exTraArray[index])
}


/*
    We will use Stack to insert and remove an elements from the last index of array
    We will shift and unshift method to to insert and remove an elements from the first index of array
*/
// pushing elements in the array
// using Stack method 

let thisEmptyArray = new Array();
thisEmptyArray.push("Jonel")
thisEmptyArray.push("Pogi")
thisEmptyArray.push("Talaga")

console.log(thisEmptyArray)


thisEmptyArray.pop()
console.log(thisEmptyArray)
