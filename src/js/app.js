'use strict'

//import * as flsFunctions from "./modules/functions.js";
//flsFunctions.isWebp();

//import './libs.js'

const header = document.querySelector('.header');
const headerNavs = document.querySelectorAll('.header__content nav');
const mobileOverlay = document.querySelector('.mobile-overlay');
const mobileOverlayContent = document.querySelector('.mobile-overlay__content');
const headerContent = document.querySelector('.header__content');

function updateLayout() {
  if (window.innerWidth < 767) {
    headerNavs.forEach(element => {
      mobileOverlayContent.appendChild(element);
    });
  } else if (window.innerWidth >= 767 && window.innerWidth < 1199) {

    if (!mobileOverlayContent.contains(headerNavs[0])) {
      mobileOverlayContent.appendChild(headerNavs[0]);
    }
    if (!headerContent.contains(headerNavs[1])) {
      headerContent.appendChild(headerNavs[1]);
    }
  } else {
    headerNavs.forEach(element => {
      headerContent.appendChild(element);
    });
  }

  mobileOverlay.style.paddingTop = header.offsetHeight + 'px';
}

function ready() {
  updateLayout();

  const hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger--active');
    mobileOverlay.classList.toggle('mobile-overlay--active');
    document.querySelector('body').classList.toggle('scroll-fixed');
  });

  window.addEventListener('resize', updateLayout);
}

document.addEventListener("DOMContentLoaded", ready);



const overlayModal = document.querySelector('.overlay-modal')

function openModal(modalId) {
  let modal = document.querySelector(modalId);
  if (modal) {
    modal.classList.add('modal-shown');
    overlayModal.classList.add('overlay-modal--active');
  }
}

function closeModal() {
  const modal = document.querySelector('.modal-callback');
  if (modal) {
    modal.classList.remove('modal-shown');
    overlayModal.classList.remove('overlay-modal--active');
  }
}

function handleModalToggle(event) {
  const target = event.target;
  const modalToggle = target.closest('[data-toggle="modal"]');

  if (modalToggle) {
    event.preventDefault();

    const modalId = modalToggle.getAttribute('href');
    if (modalId) {
      openModal(modalId);
    }
  }
}

function handleModalClose(event) {
  let target = event.target;
  let closeButton = target.closest('.modal-close-btn');
  let overlayModal = target.closest('.overlay-modal--active');

  if (closeButton || overlayModal) {
    closeModal();
  }
}

document.addEventListener('click', handleModalToggle);
document.addEventListener('click', handleModalClose);



const form = document.querySelector('.modal-callback__form');
const nameInput = form.querySelector('.modal-callback__input#name');
const phoneInput = form.querySelector('.modal-callback__input#phone');
const checkboxInput = form.querySelector('input[type="checkbox"]')
const submitButton = form.querySelector('.modal-callback__modal-submit');


function isValidPhoneNumber(phoneNumber) {
  const phoneRegex = /^\d+$/;
  return phoneRegex.test(phoneNumber);
}


function validateForm() {
  const nameValue = nameInput.value.trim();
  const phoneValue = phoneInput.value.trim();

  const isNameValid = nameValue !== '';
  const isPhoneValid = isValidPhoneNumber(phoneValue);
  const isCheckboxChecked = checkboxInput.checked;

  if (isNameValid && isPhoneValid && isCheckboxChecked) {
    submitButton.disabled = false;
    submitButton.classList.remove('disabled');
  } else {
    submitButton.disabled = true;
    submitButton.classList.add('disabled');
  }

  if (!isNameValid) {
    nameInput.classList.add('invalid');
  } else {
    nameInput.classList.remove('invalid');
  }

  if (!isPhoneValid) {
    phoneInput.classList.add('invalid');
  } else {
    phoneInput.classList.remove('invalid');
  }
}

nameInput.addEventListener('input', validateForm);
phoneInput.addEventListener('input', validateForm);
checkboxInput.addEventListener('change', validateForm);

form.addEventListener('submit', function (event) {
  validateForm();

  if (!submitButton.disabled) {
    return;
  }

  event.preventDefault();
});




let cardCount = 0;
const authors = ["James", "John", "Robert", "Michael", "William", "David", "Richard", "Charles", "Paul", "Mark"];

function fetchDataAndInsertCards() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
      const cardContainer = document.querySelector('.cards__cards-wrapper');
      const template = document.querySelector('.cards__card-item');


      for (let i = 0; i < 5; i++) {
        if (cardCount === 30) {
          break;
        }

        if (data[cardCount]) {
          const newCard = template.cloneNode(true);
          newCard.querySelector('.card-item__header img').setAttribute('src', `img/content/card-img-${data[cardCount].id + 1}.jpg`);
          newCard.querySelector('.card-item__title').textContent = data[cardCount].title;
          newCard.querySelector('.card-item__slogan').textContent = data[cardCount].title;
          newCard.querySelector('.card-item__preview-text').textContent = data[cardCount].body;

          newCard.querySelector('.card-item__post b').textContent = authors[Math.floor(Math.random() * authors.length)];

          const currentYear = new Date().getFullYear();
          const randomMonth = Math.floor(Math.random() * 12) + 1;
          const randomDay = Math.floor(Math.random() * 31) + 1;

          const randomDate = `${currentYear}-${randomMonth.toString().padStart(2, '0')}-${randomDay.toString().padStart(2, '0')}`;

          const timeElement = newCard.querySelector('.card-item__post time');
          timeElement.setAttribute('datetime', randomDate);
          timeElement.textContent = randomDate;

          cardContainer.appendChild(newCard);

          cardCount++;
        }
      }

      if (cardCount === 30) {
        setTimeout(() => {
          loadBtn.style.display = 'none';
          alert('Выведено 30 карточек');
        }, 500);
      }
    });
}

const loadBtn = document.querySelector('.cards__btn');
loadBtn.addEventListener('click', fetchDataAndInsertCards);