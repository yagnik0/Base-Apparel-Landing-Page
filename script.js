const  retryMessage = document.querySelector('.retry');
const errorIcon = document.querySelector('.error')
const email = document.querySelector('.email')
const input = document.querySelector('.input-flex')
const btn = document.querySelector('.btn')

btn.addEventListener('click', function(){
    if (!email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        retryMessage.classList.toggle('hidden')
        errorIcon.classList.toggle('hidden')
    }
})

