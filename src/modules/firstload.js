import home from '@modules/home.js';

let url;

function firstLoad() {
  home()
  url = window.location.href;
}

export {url, firstLoad}