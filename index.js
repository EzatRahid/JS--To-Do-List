let preBox = document.getElementById('preBox')
let input = document.querySelector('.pre-box input').value
let btn = document.querySelector('.pre-box button')

const user = document.getElementById('user_name')

btn.addEventListener('click', () =>{
    input = user.innerHTML
    console.log('clicked')
    
})

