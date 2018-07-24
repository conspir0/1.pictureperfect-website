'use strict';

var phone = document.querySelector('.phone');
var jumbotron = document.querySelector('.main-jumbotron');

phone.addEventListener('click', function(event) {
    jumbotron.classList.toggle('change-jumbotron');
})