const burger = document.getElementById('burger')
const hamburger = document.getElementById('hamburger')
const close = document.getElementById('close')
const list = document.getElementById('list')

burger.addEventListener('click',()=>{
    hamburger.classList.toggle('nShow')
    close.classList.toggle('nShow')
    list.classList.toggle('nShow')
})