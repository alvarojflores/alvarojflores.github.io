// select the favicon 👉
const faviconEl = document.querySelector('link[rel="icon"]')

// watch for changes 🕵️
const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
mediaQuery.addEventListener('change', themeChange)

// listener 👂
function themeChange(event) {
  if (event.matches) {
    faviconEl.setAttribute('href', 'assets/img/brand/icono-B.svg')
  } else {
    faviconEl.setAttribute('href', 'assets/img/brand/icono-N.svg')
  }
}