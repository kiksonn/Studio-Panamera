const navMobile = document.querySelector('.nav-mobile')
const navBtn = document.querySelector('.hamburger')
const allNavItems = document.querySelectorAll('.nav__link')
const toTop = document.querySelector(".top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 250) {
    toTop.classList.add("top__active");
  } else {
    toTop.classList.remove("top__active");
  }
})

const handleNav = () => {
    navBtn.classList.toggle('is-active')
    navMobile.classList.toggle('nav-mobile--active')

    allNavItems.forEach(item => {
        item.addEventListener('click', () => {
            navMobile.classList.remove('nav-mobile--active')
            navBtn.classList.remove('is-active')
        })
    }) 
}

navBtn.addEventListener('click', handleNav)

// .nav-mobile--active