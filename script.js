const buttons = document.querySelectorAll('button')
const dropdown = document.querySelectorAll('.dropdown')
const navLinks = document.querySelector('.nav-links')
const navIcon = document.querySelector('.nav_icon')
const main = document.querySelector('main')

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (!button.classList.contains('dropdown_btn')) {
      return
    }
    button.nextElementSibling.classList.toggle('show')

    if (button.nextElementSibling.classList.contains('show')) {
      button.innerHTML = `<img src="images/icon-arrow-up.svg" alt="" />`
      button.setAttribute('aria-expanded', true)
      button.setAttribute(
        'aria-label',
        button.classList.contains('features_menu')
          ? 'hide features menu'
          : 'hide company menu'
      )
    } else {
      button.innerHTML = `<img src="images/icon-arrow-down.svg" alt="" />`
      button.setAttribute('aria-expanded', false)
      button.setAttribute(
        'aria-label',
        button.classList.contains('features_menu')
          ? 'show features menu'
          : 'show company menu'
      )
    }
  })
})

function showNav() {
  navLinks.classList.toggle('show')

  if (navLinks.classList.contains('show')) {
    navIcon.innerHTML = `<img src="images/icon-close-menu.svg" alt="" />`
    navIcon.setAttribute('aria-expanded', true)
    navIcon.setAttribute('aria-label', 'hide navigation menu')
    main.classList.add('show')
  } else {
    navIcon.innerHTML = `<img src="images/icon-menu.svg" alt="" />`
    navIcon.setAttribute('aria-expanded', false)
    navIcon.setAttribute('aria-label', 'show navigation menu')
    main.classList.remove('show')
  }
}

navIcon.addEventListener('click', showNav)