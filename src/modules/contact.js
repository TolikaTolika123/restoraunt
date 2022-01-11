export default function () {
  const content = document.querySelector('#content');
  const homeBtn = document.querySelector('#home');
  const menuBtn = document.querySelector('#menu');
  const contactBtn = document.querySelector('#contact');

  homeBtn.classList.remove('active');
  menuBtn.classList.remove('active');
  contactBtn.classList.add('active');

  content.innerHTML = ``;
}