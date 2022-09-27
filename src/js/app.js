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
// const directionItems = document.querySelectorAll('.direction__items');
const directionSlider = document.querySelectorAll('.direction__row');

directionBtn.forEach(btn=>{
  btn.addEventListener('click', (e=>{
    directionBtn.forEach(dBtn=>{
      dBtn.classList.remove('active')
    })
    directionSlider.forEach(dSlider=>{
      dSlider.classList.remove('active')
    })
    e.target.classList.toggle('active')
    const target = e.target.getAttribute("data-target")
    document.querySelector(`#${target}`).classList.toggle('active')
  }))
})

var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);