const allowedUsersList = ["mario.rossi@gmail.com", "giuseppe.verdi@gmail.com", "student.boolean@gmail.com", "teacher.boolean@gmail.com"];
const containerEl = document.getElementById('container');
const mailEl = document.getElementById('mail');
const startBtnEl = document.querySelector('.btn.mt-4');
const resultEl = document.getElementById('result');
const answerEl = document.getElementById('answer');
const endBtnEl = document.getElementById('end-btn');
const successMessage = 'Benvenuto in questo magnifico sito web!';
const errorMessage = "Siamo spiacenti ma non ha l' autorizzazione per accedere al sito";

let mail;

startBtnEl.addEventListener('click', function () {

    mail = mailEl.value;
    let chek = false;

    if (mail === '') {
        alert('Inserisci un indirizzo e-mail')
    } else {
        resultEl.classList.replace('d-none', 'd-block');
        containerEl.classList.replace('d-block', 'd-none');

        for (let i = 0; i < allowedUsersList.length; i++) {

            if (mail == allowedUsersList[i]) {
                chek = true;
            };
        };
    };

    if (chek === true) {
        answerEl.innerHTML = successMessage;
        answerEl.classList.replace('text-danger', 'text-white');
        endBtnEl.innerHTML = 'Esci';
    } else {
        answerEl.innerHTML = errorMessage;
        answerEl.classList.replace('text-white', 'text-danger');
        endBtnEl.innerHTML = 'Riprova';
    };

});

endBtnEl.addEventListener('click', function () {
    containerEl.classList.replace('d-none', 'd-block');
    resultEl.classList.replace('d-block', 'd-none');
    mailEl.value = '';
});