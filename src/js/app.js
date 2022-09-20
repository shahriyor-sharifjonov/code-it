import * as functions from "./modules/functions.js";

functions.isWebp();

// import Swiper, { Navigation, Pagination } from 'swiper';

// const swiper = new Swiper();

if(document.querySelectorAll('.gif')){
  const gifs = document.querySelectorAll('.gif');
  gifs.forEach(gif => {
    const source = gif.querySelector('source')
    source.remove()
  })
}

const headerButton = document.querySelector(".header__button");
const headerMenu = document.querySelector(".header__menu");
let menuOpened = false;
const menuToggle = () => {
  menuOpened = !menuOpened;
  headerButton.classList.toggle("open");
  headerMenu.classList.toggle("open");
};

headerButton.onclick = menuToggle;

window.onclick = (e) => {
  if (
    menuOpened &&
    !e.composedPath().includes(headerButton) &&
    !e.composedPath().includes(headerMenu)
  )
    menuToggle();
}

const openPopup = (el) => {
  closePopup()
  const popup = document.querySelector(`#${el}`)
  popup.classList.add('active')
}

const closePopup = () => {
  const popups = document.querySelectorAll('.popup');
  popups.forEach(popup => {
    popup.classList.remove('active')
  })
}

if(document.querySelectorAll('.close-popup')){
  const btns = document.querySelectorAll('.close-popup');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      closePopup()
    })
  })
}
 
if(document.querySelectorAll('.open-popup')){
  const btns = document.querySelectorAll('.open-popup');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-target');
      openPopup(target)
      if(menuOpened) menuToggle()
    })
  })
}

if(document.querySelectorAll('.form')){
  const forms = document.querySelectorAll('.form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault()
      const inputs = form.querySelectorAll('input')
      inputs.forEach(input => {
        input.value = ''
      })
      openPopup('thank')
    })
  })
}