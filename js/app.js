const sidenav = document.querySelector('#mySidenav')
const headerBurger = document.querySelector('#headerBurger')
const closeBurger = document.querySelector('.closebtn')

let mql = window.matchMedia('(min-width: 800px)')
let sidenavCS = getComputedStyle(sidenav)
let sidenavVar = sidenavCS.getPropertyValue('--width-navBar')

headerBurger.addEventListener('click', openNav)
closeBurger.addEventListener('click', closeNav)

function openNav() {
  sidenav.style.width = sidenavVar
  sidenav.style.boxShadow = '5px 5px 4px 2px rgba(0 0 0/0.2)'
  document.body.classList.add('lock')
}

function closeNav() {
  sidenav.style.width = '0'
  sidenav.style.boxShadow = 'none'
  document.body.classList.remove('lock')
}

let navBarShow = function (mql) {
  if (mql.matches) {
    sidenav.style.width = sidenavVar
    document.body.classList.remove('lock')
    sidenav.style.boxShadow = '5px 5px 4px 2px rgba(0 0 0/0.2)'
  } else {
    sidenav.style.width = '0rem'
    sidenav.style.boxShadow = 'none'
  }
}
mql.addEventListener('change', navBarShow)
