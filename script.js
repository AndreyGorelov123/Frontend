console.log("hello world")

//numbers
let num = 10
console.log (num)

//strings
let str = "Привет, мир!"
console.log(str)

//booleans
let isTrue = true
console.log(isTrue)

const button = document.querySelector("button")
console.log(button)
let toggle = true

button.addEventListener("click", () => {
console.log("click")

if(toggle === true){
    button.classList.add("active") 
    toggle = false

    console.log(toggle, "if")
}else{
    button.classList.remove("active")
    toggle = true
    console.log(toggle, "else")
}


})


