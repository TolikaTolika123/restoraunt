export default function () {
  const content = document.querySelector('#content');
  const homeBtn = document.querySelector('#home');
  const menuBtn = document.querySelector('#menu');
  const contactBtn = document.querySelector('#contact');

  homeBtn.classList.remove('active');
  menuBtn.classList.remove('active');
  contactBtn.classList.add('active');

  content.innerHTML = `<section class="contact">
  <div class="container">
    <div class="contact__map">
      <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1763.5597659207797!2d44.109925466907974!3d41.98005136932546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40449dbbb8c8bf75%3A0x3d940b17faae6c00!2z4YOf4YOd4YOW4YOU4YOk4YOY!5e0!3m2!1ska!2sge!4v1641888534453!5m2!1ska!2sge"
        width="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    </div>
    <a href="tel:+123456789" class="contact__phone">(123) 456-789</a>
    <p class="contact__address">Stalin Avenue 11, Gori 1400</p>
  </div>
</section>`;
}