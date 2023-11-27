

// Шаг №1
// Эта строка находит первый элемент на веб - странице
// с классом "mybutton" и сохраняет его в переменной метод querySelector()

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



let myImage = document.querySelector(".first-screen__image")
console.log(myImage)

let myImageToggle = true

myImage.addEventListener("mouseenter", function () {

	console.log('курсор на картинке')
	myImage.classList.add("hover-image")

})

myImage.addEventListener("mouseleave", function () {

	console.log('курсор не картинке')
	myImage.classList.remove("hover-image")

})