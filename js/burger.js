'use strict'

console.log('Burger')

let burgerButton = document.querySelector(".menu-burger__button")

let links = document.querySelector(".menu-burger__links")

//console.log(burgerButton)
let toggle = true


burgerButton.addEventListener("click", function() {
	console.log('click btn')
	
	if (toggle === true) {
		links.classList.add("active")
		
		toggle = false
	}else{
        links.classList.remove("active")
        toggle = true
  }

})