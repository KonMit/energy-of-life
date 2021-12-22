'use strict'

@@include('source.js');

const nav = document.querySelector('.nav');
const burger = document.querySelector('.burger-menu');
const body = document.body;


burger.addEventListener('click', () => {
  nav.classList.toggle('active');
  burger.classList.toggle('open');
  body.classList.toggle('noscroll');
});

nav.addEventListener('click', (event) => {
  if(event.target.closest('.nav__link')) {
    console.log('hi')
    nav.classList.remove('active');
    body.classList.remove('noscroll');
    burger.classList.remove('open');
  }
})
