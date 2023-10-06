/* et x = "asd"
let y = 12
let z = false
let arr = ["egy", "ketto", "harom"]
let arr2 = [10, 2, 67]
let arr3 = [true, false, true]
let arr4 = ["string", 1, false]

let obj = {
    key1: "value",
    key2: 101,
    key3: false,
    key4: [
        "cat",
        "dog",
        "chicken"
    ],
    key5: {
        nestedKey: "text",
        nestedKey2: 66
    },
    users: [
        {
            name: "Gipsz Jakab",
            age: 28,
            isActive: true,
            pets: [
                {
                    name: "Mirci",
                    type: "cat"
                },
                {
                    name: "Kifli",
                    type: "dog"
                }
            ]
        }
    ]
}

console.log(obj1["users"][0][pets][0]["name"])

function myFunc() {
    console.log("this is my function")
}

myFunc()

function greetMe(parameter) {
    console.log('szia ${parameter}!')
}

greetMe("argumentum") */

/* function addTwoNumbers(number1, number2) {
    let sum = number1 + number2
    console.log(`the sum of two numbers (${number1}, ${number2}) is : ${sum}`)
    return sum
}

let resultOfAddTwoNumbers = addTwoNumbers(10, 2)
console.log(`the result of resultOfAddTwoNumbers is: ${resultOfAddTwoNumbers}`) */

function cbExample() {
    console.log("i am a callback function")
}

function funcExample(name, callback) {
    console.log(`hello ${name}`)
    callback()
}

funcExample("Marci", cbExample)