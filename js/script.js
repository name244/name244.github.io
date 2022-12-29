const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.rating__item-percent'),
      lines = document.querySelectorAll('.rating__item-line');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});