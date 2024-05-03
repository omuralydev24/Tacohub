// omuralyzarylbekov@gmaill.com
//12345

const email = document.querySelector(".input-email")
const password = document.querySelector(".input-password")
const btn = document.querySelector(".btn")
const text = document.querySelector(".text")

const form = document.querySelector(".form")

let attempt = 3

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    if(email.value === 'omuralyzarylbekov@gmaill.com' && password.value === '2222'){
        text.innerText = 'Добро пожаловать'
        resetValue()
        textColor("blue")
    }else {
        attempt--
        if(attempt === 2){
            text.innerText = `${attempt} попытки`
            resetValue()
            textColor("orange")
        }else if (attempt === 1){
            text.innerText=`${attempt} попытка!`
            resetValue()
            textColor('red')
        }else{
            text.innerText = 'Доступ закырыт!'
            btn.setAttribute('disabled'," ")
            resetValue()
            textColor("gray")
        }
    }
})

function textColor(color){
    text.style.color = color
    email.style.border = `2px solid ${color}`
    password.style.border = `2px solid ${color}`
}

function resetValue(){
    email.value = ''
    password.value = ''
}