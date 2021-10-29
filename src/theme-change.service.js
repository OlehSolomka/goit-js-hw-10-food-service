const bodyRef = document.querySelector('body');
const switchRef = document.querySelector('.theme-switch__toggle');
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeChanger = function () {
  bodyRef.classList.toggle(Theme.DARK);
  if (bodyRef.classList.contains(Theme.DARK)) {
    localStorage.setItem('theme', Theme.DARK);
  } else {
    localStorage.setItem('theme', Theme.LIGHT);
  }
};

const themeDefault = function () {
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme === Theme.DARK) {
    bodyRef.classList.add(Theme.DARK);
    switchRef.checked = true
  }
};

export {switchRef, themeChanger, themeDefault };
