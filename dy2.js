//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
const p3Keys = Object.keys(person3)
for(let i = 0; i < p3Keys.length; i++){
    console.log(person3[p3Keys[i]])
}
for (const k in person3){
    if (Array.isArray(person3[k])){
        console.log(person3[k])
    }
}


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

class people{
    Adult(name, age){
    this.name = name
    this.age = age
    }

    printInfo =()=>{ 
        return `
        name : ${this.name}
        age : ${this.age}
        `
     }
}
    


// Create our Person Prototype
const person = new people('Cam', 23)
        this.age += 1
        console.log(people.age)


// Use an arrow to create the printInfo method
console.log(person.printInfo())

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 
//     upit: function (ageUp){
//     this.age += ageUp
// }

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
function greaterString(string){
    return new Promise((res, rej) => {
        if (string.length > 10){
            res ('big word');
        } else{
            rej ('Small Number');
        }
    });
}

const checkStr = greaterString('one')
checkStr.then( (res) => console.log(`big number: ${res} `)).catch(error => console.log(`big number: ${error}`))
console.log(checkStr)