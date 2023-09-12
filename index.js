let preBox = document.getElementById('preBox')
let input = document.getElementById('input')
let btn = document.querySelector('.pre-box button')
let main = document.querySelector('.reveal')
let plus = document.querySelector('.plus')


const user = document.getElementById('user_name')

btn.addEventListener('click', () =>{
    user.innerHTML = input.value
    console.log('clicked')

    preBox.style.transform = 'translateX(-200%)'
    preBox.style.transition = '0.5s'
    main.style.transform = 'translateX(0)'
    main.style.transform = 'translateY(-25%)'
    main.style.transition= '0.5s'

    // preBox.classList.add('hide')
    // main.classList.add('revealAni')
})

plus.addEventListener('click', () =>{
    plus.style.bottom = '50%'
    plus.style.transition = '0.3s'
    main.style.filter = 'blur(5px)'


})

console.log(main)
console.log(main)
console.log(main)
console.log(main)
console.log(main)
console.log(main)
console.log(main)

