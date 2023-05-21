const addHamburgerClickHandler = () => {
  const hamburger = document.querySelector('.hamburger');
  const hamburgerLine = document.querySelector('.hamburger__line');
  const menu = document.querySelector('.menu');
  const body = document.body;
  const overlay = document.querySelector('.overlay');

  hamburger.addEventListener('click', () => {
    if (!hamburger.classList.contains('hamburger_open')) {
      openHamburger();
    } else {
      closeHamburger();
    }
  });

  overlay.addEventListener('click', () => {
    closeHamburger();
  });

  const openHamburger = () => {
    hamburger.classList.add('hamburger_open');
    hamburgerLine.classList.add('hamburger__line_hide');
    menu.classList.add('menu_hamburger_open');
    body.classList.add('body_scroll_none');
    overlay.classList.add('overlay_show');
  };

  const closeHamburger = () => {
    hamburger.classList.remove('hamburger_open');
    hamburgerLine.classList.remove('hamburger__line_hide');
    menu.classList.remove('menu_hamburger_open');
    body.classList.remove('body_scroll_none');
    overlay.classList.remove('overlay_show');
  };
};

export default addHamburgerClickHandler;
