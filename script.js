
let subBtn = document.getElementById('subBtn');

subBtn.addEventListener('click', ()=> {

    let form = document.querySelector('form');
    form.style.display= 'none';

    document.querySelector('.registerForm').innerHTML +=
    `<p class="answerForm">Thank you for contacting us. We will get back to you as soon as possible.</p>`
})