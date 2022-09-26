import * as functions from "./modules/functions.js";

functions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper();

var mySwiper = new Swiper('.direction__swiper', {
  slidesPerView: 2,
  spaceBetween: 10,
})

var mySwiper = new Swiper('.learn__swiper', {
  slidesPerView: 'auto',
  spaceBetween: 15,
  breakpoints:{
    1375:{
      slidesPerView: 2,
      spaceBetween: 43,
    },
    768:{
      slidesPerView: 2,
    },
    576:{
      slidesPerView: 'auto',
    },
    426:{
      slidesPerView: 1,
    }
  }
})

var mySwiper = new Swiper('.carousel__swiper', {
  slidesPerView: 'auto',
  spaceBetween: 10,
})

if(document.querySelectorAll('.gif')){
  const gifs = document.querySelectorAll('.gif');
  gifs.forEach(gif => {
    const source = gif.querySelector('source')
    source.remove()
  })
}

const headerButton = document.querySelector(".header__button");
const headerMenu = document.querySelector(".header__menu");
const body = document.querySelector('body');
let menuOpened = false;
const menuToggle = () => {
  menuOpened = !menuOpened;
  headerButton.classList.toggle("open");
  headerMenu.classList.toggle("open");
  body.classList.toggle("hidden");
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
      if(form.querySelectorAll('textarea')){
        const ta = form.querySelectorAll('textarea')
        ta.forEach(textarea => {
          textarea.value = ''
        })
      }
      inputs.forEach(input => {
        input.value = ''
      })
      openPopup('thank')
    })
  })
}

const directionBtn = document.querySelectorAll('.direction__button');
const directionItems = document.querySelectorAll('.direction__items');
const directionSlider = document.querySelectorAll('.direction__slider');

directionBtn.forEach(btn=>{
  btn.addEventListener('click', (e=>{
    directionBtn.forEach(dBtn=>{
      dBtn.classList.remove('active')
    })
    directionSlider.forEach(dSlider=>{
      dSlider.classList.remove('active')
    })
    directionItems.forEach(dItems=>{
      dItems.classList.remove('active')
    })
    e.target.classList.toggle('active')
    const target = e.target.getAttribute("data-target")
    document.querySelector(`#${target}`).classList.toggle('active')
  }))
})