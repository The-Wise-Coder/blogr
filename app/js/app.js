window.onload = () => {

  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile');
  const hamburgerOpen = document.querySelector('.hamburger__icon-open');
  const hamburgerClose = document.querySelector('.hamburger__icon-close');
  const mobileLinks = document.querySelectorAll('.mobile__item');
  const body = document.querySelector('.preload');

  body.classList.remove('preload');


  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
    hamburgerOpen.classList.toggle('hide');
    hamburgerClose.classList.toggle('hide');
    collapse();
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', expand);
  });

  function expand() {
    this.querySelector('a').classList.toggle('active');
    this.nextElementSibling.classList.toggle('expand');
  }

  function collapse() {
    mobileLinks.forEach(link => {
      link.classList.remove('active');
      link.nextElementSibling.classList.remove('expand');
    });
  }
}
