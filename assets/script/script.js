const btdMenu = document.getElementById("btn-menu")
const menuMobile = document.getElementById("menu-mobile")
const overlay = document.getElementById('overlay-menu')

btdMenu.addEventListener('click',()=>{

menuMobile.classList.add("abrir-menu")
})

menuMobile.addEventListener('click',()=>{

    menuMobile.classList.remove("abrir-menu")

})
 overlay.addEventListener('click',()=>{

    menuMobile.classList.remove("abrir-menu")

})

