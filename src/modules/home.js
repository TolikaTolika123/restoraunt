export default function () {
  const content = document.querySelector('#content');
  const homeBtn = document.querySelector('#home');
  const menuBtn = document.querySelector('#menu');
  const contactBtn = document.querySelector('#contact');

  homeBtn.classList.add('active');
  menuBtn.classList.remove('active');
  contactBtn.classList.remove('active');

  content.innerHTML = `<section class="intro">
                       <h1 class="intro__title">Joseph</h1>
                       <p class="intro__subtitle">Lorem ipsum dolor sit amet consectetur adipisicing</p>
                     </section>`;

}