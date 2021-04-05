import cardTemplate from '../templates/card.hbs';
import cardData from '../menu.json';

const cards = cardTemplate(cardData);
const cardsList = document.querySelector('.js-menu');
cardsList.insertAdjacentHTML('beforeend',cards)