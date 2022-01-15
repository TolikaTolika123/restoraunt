import home from '@modules/home.js';
import menu from '@modules/menu.js';
import contact from '@modules/contact.js';

let url = window.location.href;

function firstLoad() {
  if (url.endsWith('#menu')) {
    menu();
    url = url.substring(0, url.length - 5);
  } else if (url.endsWith('#contact')) {
    contact();
    url = url.substring(0, url.length - 8);
  } else {
    home()
  }
}

export {url, firstLoad}