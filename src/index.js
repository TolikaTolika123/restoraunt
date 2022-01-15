import html from "@/index.html";

import {url, firstLoad} from "@modules/firstload.js";
import homePage from '@modules/home.js';
import menuPage from '@modules/menu.js';
import contactPage from '@modules/contact.js';

import '/styles/style.scss';

firstLoad()



const homeBtn = document.querySelector('#home');
const menuBtn = document.querySelector('#menu');
const contactBtn = document.querySelector('#contact');

homeBtn.addEventListener('click', () => {
  homePage();
  window.location.href = url;
})

menuBtn.addEventListener('click', () => {
  menuPage();
  window.location.href = `${url}#menu`;
})

contactBtn.addEventListener('click', () => {
  contactPage();
  window.location.href = `${url}#contact`;
})