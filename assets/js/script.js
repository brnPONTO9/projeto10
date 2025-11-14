
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');

  menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('is-open');
    menuToggle.classList.toggle('is-open');
  });

