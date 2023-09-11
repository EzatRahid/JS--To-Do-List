let preBox = document.getElementById('preBox')
let input = document.querySelector('.pre-box input').value
let btn = document.querySelector('.pre-box button')
let main = document.querySelector('.reveal')


const user = document.getElementById('user_name')

btn.addEventListener('click', () =>{
    input = user.innerHTML
    console.log('clicked')

    preBox.style.transform = 'translateX(-200%)'
    preBox.style.transition = '0.5s'
    main.style.transform = 'translateX(0)'
    main.style.transform = 'translateY(-25%)'
    main.style.transition= '0.5s'

    // preBox.classList.add('hide')
    // main.classList.add('revealAni')
})

console.log(main)

