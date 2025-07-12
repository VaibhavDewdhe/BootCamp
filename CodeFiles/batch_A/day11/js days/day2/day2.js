//user input

const name = prompt("Enter your name: ")
let age = prompt("Enter your age: ")
age = parseInt(age);
//jar hi condition true asel
if (age >= 18) 
    //tar he run hoil
    {
    alert(`Hello, ${name} as your age is ${age} you are eligible for driving and voting.`)
    console.log(`Hello, ${name} as your age is ${age} you are eligible for driving and voting.`)
}//nahitar he run hoil
else
    alert(`Hello, ${name} as your age is ${age} you are not eligible for driving and voting.`)