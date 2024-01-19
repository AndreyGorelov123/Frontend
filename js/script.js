console.log('Main Script')



const inputName = document.querySelector('.input-name')
const inputEmail = document.querySelector('.input-email')

const textName = document.querySelector('.text-name')
const textEmail = document.querySelector('.text-email')

const sendButton = document.querySelector('.send-button')

let nameText = null
let emailText = null


//***
function handlerTextName(event) {
	nameText = event.target.value
	textName.innerHTML = nameText
}
//***
inputName.addEventListener('input', handlerTextName)

// E-MAIL


function handlerEmailText(event) { 
	emailText = event.target.value 
	textEmail.innerHTML = emailText
} 

inputEmail.addEventListener('input', handlerEmailText)



function handlerClick() { 
	count = count + 1
	console.log(count, 'function');
}

sendButton.addEventListener('click', handlerClick)





















// function sum(num1, num2) { 
//     return num1 * num2
// }

// let result = sum(10, 20)
// console.log(result)


// function greeting(name) {
//     return 'Привет, ' + name + '!'
// }

// let result = greeting('Андрей')
// let result2 = greeting('Виктор')
// let result3 = greeting('Лена')
// console.log(result)
// console.log(result2)
// console.log(result3)

//***

// console.log("hello world")

// //Эта строка находит первый элемент на веб - странице 
// // с классом "button" и сохраняет его в переменной
// const button = document.querySelector(".button")
// // console.log(button)

// // Создаёт переменную toggle и присваивает ей начальное значение true.
// let toggle = true

// // Добавляем слушатель событий на кнопку button. 
// // Когда кнопка будет кликнута, будет выполнена функция, переданная как аргумент.
// button.addEventListener("click", function () {
//     //Выводит в консоль сообщение "click" при каждом клике на кнопку.
//     console.log("нажали на кнопку")



//     // Проверяет значение переменной toggle. Если оно равно true, 
//     // то выполняется код внутри блока if, иначе - код внутри блока else.
//     if (toggle === true) {

//         // Добавляет класс "active" к элементу кнопки.
//         button.classList.add("active")

//         //Устанавливает значение переменной toggle в false.
//         toggle = false

//         console.log('класс active есть');

//     } else {
//         //Удаляет класс "active" у элемента кнопки.
//         button.classList.remove("active")

//         //Устанавливает значение переменной toggle обратно в true.
//         toggle = true

//         console.log('класс active нет');

//     }

// })

// const name = 'I am Andrey'

// console.log(name, '; name')


