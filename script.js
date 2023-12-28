const  retryMessage = document.querySelector('.retry');
const errorIcon = document.querySelector('.error')
const email = document.querySelector('.email')
const input = document.querySelector('.input-flex')
const btn = document.querySelector('.btn')
const inputID = document.getElementById('inputid')

btn.addEventListener('click', function(){
    if (!email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        retryMessage.classList.remove('hidden')
        errorIcon.classList.remove('hidden')
        inputID.style.border = "2px solid hsl(0, 93%, 68%)"
    } else {
        retryMessage.classList.add('hidden')
        errorIcon.classList.add('hidden')
    }
})

