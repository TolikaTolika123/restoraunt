import html from "@/index.html";

import firstload from "@modules/firstload.js";

import homePage from '@modules/home.js';
import menuPage from '@modules/menu.js';
import contactPage from '@modules/contact.js';

import '/styles/style.scss';

firstload()

const homeBtn = document.querySelector('#home');
const menuBtn = document.querySelector('#menu');
const contactBtn = document.querySelector('#contact');

homeBtn.addEventListener('click', () => {
  homePage();
})

menuBtn.addEventListener('click', () => {
  menuPage()
})

contactBtn.addEventListener('click', () => {
  contactPage()
})