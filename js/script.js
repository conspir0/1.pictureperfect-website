'use strict';

// Jumbotron

var phone = document.querySelector('.phone');
var jumbotron = document.querySelector('.main-jumbotron');

phone.addEventListener('click', function(event) {
    jumbotron.classList.toggle('change-jumbotron');
})

// Boxes

var link = document.querySelectorAll('.link-boxes');

var linkHover = function(event) {
    this.parentElement.classList.toggle('overlay');
}

for(var i = 0; i < link.length; i++) {
    link[i].addEventListener('mouseenter', linkHover);
    link[i].addEventListener('mouseleave', linkHover);

};
