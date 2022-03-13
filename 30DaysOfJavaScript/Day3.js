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
anotherEmployee["Is he Giving up"]
console.log(anotherEmployee)

let key = "Is he Giving up"
anotherEmployee[key] = false
console.log(anotherEmployee)

const playerInfo = {
    playerName: "Miracle",
    playerRole: "Mid Lane",
    playerHero: "Invoker",
    hasWonTI: true
}

console.log(playerInfo)

const copyPlayer = playerInfo

console.log(copyPlayer)

const original  = {}

const copy = original

console.log(original == copy)

const original1 = {}
const copy1 = original1
console.log(original1 === copy1)

const User = {
    Name: "KingNel",
    Dream: "Software Engineer",
    Age: 21,
    isHeGivingUp: false
}


console.log(User)

let cloneUser = {} // new empty object\

for(let key in User){
    cloneUser[key] = User[key]
}
cloneUser.isHeGivingUp = true
console.log(cloneUser)

/*
    the result is false, because as you can see what we did above in line 65 is that we create
    a new empty object, so the new object is independent, so when we try to compare the two object
    the result is false. Referencing and creating new object is different
*/

console.log(cloneUser == User)

// using object assign to copy and add more properties to the destination object
const redDragonMirage = {
    Type: "Wireless Mouse",
    cost: 780,
    isMouseRGB: true,
    isMouseGood: true
}

console.log(redDragonMirage)
const copyMouse = Object.assign(redDragonMirage, {
    Model: "M690",
    Manufacturer: "China"
})

console.log(copyMouse)

/*
The Object.create() method creates a new object, using an existing object 
as the prototype of the newly created object. 
*/

const Asus = {
    Type: "Laptop",
    Ram: "12GB",
    Driver: "Amd 12",
    isGood: true,
    printInfo: function information(){
        // console.log(`Asus Laptop owner is: ${this.Owner}. He is only ${this.OwnerAge}`)
    }
}

const myLaptop = Object.create(Asus)

myLaptop.Owner = "Jonel Tapia"
myLaptop.OwnerAge = 21,
myLaptop.Dream = "Software Engineer"

myLaptop.printInfo()
