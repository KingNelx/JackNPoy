// for loop

let index = 0
for (index; index < 10; index++) {
    console.log(" JavaScript is awesome")
}

// do while loop

let index1 = 0
do {
    console.log(" JavaScript is great")
    index1++
} while (index1 < 10)

// while loop

let index2 = 0
while (index2 < 10) {
    console.log(" JavaScript is good")
    index2++
}

// if statement, else if
/* 
    if you got only 1 condition in your program then brackets are not needed
*/

let Age1 = 21
if (Age1 >= 21)
    console.log(" Your age is equal or above 21")

/*
    multiple conditions, we will use brackets
*/

let babyAge = 2
let teenAge = 18
let matureAge = 21
let personAge = 21

if (personAge === matureAge) {
    console.log(" Mature Age ")
} else if (personAge === teenAge) {
    console.log(" Teen Age")
} else {
    console.log("babyAge")
}


/* nested if else statements */

let isDogAlive = true
let isDogHappy = true

if (isDogAlive) {
    if (isDogHappy)
        console.log(" Dog is Alive and Happy ")
}
else {
    console.log(" Dog is not alive nor happy ")
}

/*
    combing loops and statements 
    break and continue
*/

let count = 1;
let stopCount = 10

for (count; count <= stopCount; count++) {
    console.log(" Counting ... ")
    if (count == 5){
        console.log(" Count has reached 5 ")
    break;
    }
}
console.log(" Counting is over and it stopped in the count of 5")
