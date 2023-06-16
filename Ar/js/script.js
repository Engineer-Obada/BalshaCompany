let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = ()=>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = ()=>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = ()=>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = ()=>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}
/*********************************************************************/
const openButton = document.getElementById('open-button');
const popupContainer = document.getElementById('popup-container');
const closeButton = document.getElementById('close-button');
const popupContent = document.getElementById('popup-content');

openButton.addEventListener('click', () => {
  popupContainer.style.display = 'block';
  
});

closeButton.addEventListener('click', () => {
  popupContent.classList.toggle('hide');
  setTimeout(()=>{
  popupContainer.style.display = 'none';
  popupContent.classList.remove('hide');


  },600)
});

// ***********************************************************************
const loader = document.querySelector('.loader');
setTimeout(function() {
  loader.removeAttribute('id','loader')
}, 3000);

// **************************************************************************

function addContent() {
  const inputElementone = document.getElementById('one-input');
const inputValueone = inputElementone.value;
const inputElementtow = document.getElementById('tow-input');
const inputValuetow = inputElementtow.value;
const result = parseFloat(inputValueone) + parseFloat(inputValuetow);

  const myResult = document.querySelector('.result');
  if (isNaN(result)) {
    myResult.textContent = '';
  } else {
    myResult.textContent = `${result}`;
  }
}

// ************************************************************************************
const toggleSwitch = document.querySelector('.switch input[type="checkbox"]');
const header = document.querySelector('.header');
const navLinks = document.querySelectorAll("nav a");
const heading = document.querySelector('.heading');
const about = document.querySelector('.about');
const menu = document.querySelector('.menu');

toggleSwitch.addEventListener('change', function() {
  document.body.classList.toggle('light-mode');
  header.classList.toggle('light-mode');
  heading.classList.toggle('light-mode');
  about.classList.toggle('light-mode');
  menu.classList.toggle('light-mode');
  navLinks.forEach(element => {
    
    element.classList.toggle('light-mode');
  });
  console.log(navLinks);
});