const arr = [1, 2, 3, 4, 5]

function returnDouble(number) {
    return number * 2
}

const returnDouble2 = number => number * 2

console.log(returnDouble(25))
for (let i = 0; i < arr.length; i++) {
    console.log(returnDouble(arr[i]))
}
function logDouble(number) {
    console.log(number * 2)
}

arr.forEach(function(element) {
    console.log(element * 2)
})

arr.forEach(element => console.log(element * 2))

arr.forEach(logDouble)