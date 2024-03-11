const a = document.querySelectorAll('a');
const tabs = document.querySelectorAll('.tab');
const menu = document.querySelector('.menu')

menu.addEventListener('click', (event) => {
    event.preventDefault();
    let target = event.target;

    for (let i = 0; i < a.length; i++) {
        a[i].classList.remove('active');
        target.classList.add('active');

        tabs[i].classList.remove('active');

        if (a[i].classList.contains('active')) {
            tabs[i].classList.add('active');
        }
    }
})