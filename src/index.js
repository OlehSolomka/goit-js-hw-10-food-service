import './sass/main.scss';
import menu from './menu.json';
import createMenuTmp from './templates/menu-item.template.hbs';
import {switchRef, themeChanger, themeDefault } from './theme-change.service';

const menuListRef = document.querySelector('.js-menu');


const createMenuMarkup = function (menu) {
  return createMenuTmp(menu);
};
const menuMarkup = createMenuMarkup(menu);
menuListRef.insertAdjacentHTML('beforeend', menuMarkup);


themeDefault();
switchRef.addEventListener('change', themeChanger);
