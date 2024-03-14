let buttons = document.querySelectorAll('ul li');
let selectedEl = document.querySelector('main .thank-you .selected');
let rating = document.querySelector('main .rating');
let btn = document.querySelector('.rating button');
let thankYou = document.querySelector('main .thank-you');

let selected = !true;
let selectedNum = '';

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        selected = !false;
        selectedNum = index + 1;
        buttons.forEach((button, index) => {
            buttons[index].classList.remove('focus');
        })
        buttons[index].classList.add('focus');
    })
})

btn.addEventListener('click', () => {
    if (!selected) return;
    rating.classList.add('fade-out');
    document.addEventListener('animationend', () => {
        rating.style.display = 'none';
        selectedEl.innerHTML = `You selected ${selectedNum} out of ${buttons.length}`;
        thankYou.classList.add('fade-in');
    })
})