

// Шаг №1
// Эта строка находит первый элемент на веб - странице
// с классом "mybutton" и сохраняет его в переменной метод querySelector()
//document - это index.html file
//querySelector - это метод, который ищет нужный нам селектор(class) в html, нужный селектор пишется в () скобках
let mybutton = document.querySelector(".skills__title")
console.log(mybutton)


// Шаг №2
// Добавляем слушатель событий на кнопку mybutton.
// Когда кнопка будет кликнута, будет выполнена функция, переданная как аргумент.
// addEventListener('click', function() {} )
let toggle = true

mybutton.addEventListener("click", function() {
    
	// Добавляет класс "active" к элементу кнопки. // classList.add("")
	if (toggle === true) {
		mybutton.classList.add("work")

		console.log('toggle === true');
      toggle = false
	}else {
		mybutton.classList.remove("work")
    console.log("toggle === false")
    toggle = true
	}


} )



// Находим первый элемент на странице с классом "first-screen__image" и сохраняем его в переменной myImage
let myImage = document.querySelector(".first-screen__image")

// Выводим в консоль элемент, на который ссылается переменная myImage
console.log(myImage)

// Создаём переменную myImageToggle и присваиваем ей начальное значение true
let myImageToggle = true

// Добавляем слушатель события "mouseenter" на элемент myImage, который выполнит функцию при наведении курсора на картинку
myImage.addEventListener("mouseenter", function () {
	// Выводим в консоль сообщение при наведении курсора на картинку
	console.log('курсор на картинке')

	// Добавляем класс "hover-image" к элементу myImage при наведении курсора
	myImage.classList.add("hover-image")
})

// Добавляем слушатель события "mouseleave" на элемент myImage, который выполнит функцию при уходе курсора с картинки
myImage.addEventListener("mouseleave", function () {
	// Выводим в консоль сообщение при уходе курсора с картинки
	console.log('курсор не на картинке')

	// Удаляем класс "hover-image" у элемента myImage при уходе курсора
	myImage.classList.remove("hover-image")
})
