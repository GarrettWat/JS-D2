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

const loop = () => {
    for ( const [key, value] of Object.entries(person3)) {
        console.log(value)
    }
} 



// Ex 2 DOES NOT WORK



let people = {
    P1:{
        name: 'John',
        age: '11'
    },
    P2:{
        name: 'Alex',
        age: '24'
    }
}

const ageChange = () => {
    for ( const [key, value] of Object.entries(people)){
        for ( const [ke, valu] of Object.entries(value)){
            console.log(valu)
        }
    }
}


// Ex 3
const bigNum = (num) => {
    if(num > 10){
        console.log('Big word')
    }else{
        console.log('Small Number')
    }
}