// console.log("hello world")

//Эта строка находит первый элемент на веб - странице 
// с классом "button" и сохраняет его в переменной
const button = document.querySelector(".button")
// console.log(button)

// Создаёт переменную toggle и присваивает ей начальное значение true.
let toggle = true

// Добавляем слушатель событий на кнопку button. 
// Когда кнопка будет кликнута, будет выполнена функция, переданная как аргумент.
button.addEventListener("click", function () { 
    //Выводит в консоль сообщение "click" при каждом клике на кнопку.
    console.log("нажали на кнопку")

    

    // Проверяет значение переменной toggle. Если оно равно true, 
    // то выполняется код внутри блока if, иначе - код внутри блока else.
    if (toggle === true) {

        // Добавляет класс "active" к элементу кнопки.
        button.classList.add("active")

        //Устанавливает значение переменной toggle в false.
        toggle = false

        console.log('класс active есть');

    } else {
        //Удаляет класс "active" у элемента кнопки.
        button.classList.remove("active")

        //Устанавливает значение переменной toggle обратно в true.
        toggle = true

        console.log('класс active нет');

    }
    
})













const name = 'I am Andrey'

// console.log(name, '; name')


