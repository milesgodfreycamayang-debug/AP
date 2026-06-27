const btn5 = document.getElementById('s5');
const btn6 = document.getElementById('s6');
const btn7 = document.getElementById('s7');
const i5 = document.getElementById('dg1');
const i6 = document.getElementById('dg2');
const i7 = document.getElementById('dg3');

btn5.addEventListener('click', () => {
    i5.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
});
btn6.addEventListener('click', () => {
    i6.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
});
btn7.addEventListener('click', () => {
    i7.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
});
i5.addEventListener('click', () => {
    btn7.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
});
i6.addEventListener('click', () => {
    btn6.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
});
i7.addEventListener('click', () => {
    btn7.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
});