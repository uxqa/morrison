const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const input = document.querySelector('.counter');

let count = 0;

function minusOne() {
    if (count === 0) {
        return;
    } else {
        count--;
    };
    input.innerText = count;
}

function plusOne() {
    count++;
    input.innerText = count;
}

plus.addEventListener('click', plusOne);
minus.addEventListener('click', minusOne);