/* const arr = ["egy", "ketto", "harom", "negy"]

console.log(arr.includes("ketto"))

console.log(["one", "two", "three", "four"].includes("four"))

const obj = {
    key1: "value",
    key2: 10,
    key3: function() {
        console.log("hello")
    }
}
console.log(obj.key3())
 */


/* const str = "hello world"

console.log(str.substring(0, 3)) //hel

console.log(str.charAt(4)) //o

console.log(str.indexOf("world")) // 6 (hanyas indexnel kezdodik a keresett kifejezes)

console.log(str.split(" ")) // ['hello', 'world']

console.log(str.toUpperCase()) // HELLO WORLD

console.log(str.toLocaleLowerCase())   */

//console.log(Math.floor(Math.random() * 40 + 10)) // 10 es 40 kozott general random lefele kerekitett szamot

/* const arr = ["alma", "korte", "uborka"]
//arr.push("szilva", "birs", "szolo") //berakja ar array vegebe az uj elemeket
arr.push({
    key: "value"
})
console.log(arr)

console.log(arr.pop()) //kiveszi az array utolso elemet; pop() -> kiveszi az elso elemet es visszaadja
 
console.log(arr.reverse()) // megforditja az array elemeinek sorrendjet

console.log(arr.join("")) //az array elemeit egymas melle irja, koztuk a megadott karakterrel */


const obj = {
    name: "Gipsz Jakab",
    age: 27,
    pets: [
        "Mirci",
        "Lajcsi",
        "Geza"
    ]
}

for (const key of Object.keys(obj)) { //adott kulcs objectjein igy tudunk vegig iteralni; megkapom az osszes kulcs nevet es erteket
    console.log(key, ":", obj[key])
}
console.log(Object.entries(obj))