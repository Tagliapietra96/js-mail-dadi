const startContainerEl = document.querySelector('body div:first-child');
const endContainerEl = document.querySelector('div.text-white');
const startBtnEl = document.getElementById('start-btn');
const answerEl = document.querySelector('h1');
const userOutputEl = document.getElementById('you');
const pcOutputEl = document.getElementById('computer');
const endBtnEl = document.getElementById('end-btn');

let userInput;
let pcInput;

startBtnEl.addEventListener('click', function(){
    userInput = Math.floor(Math.random() * 6) + 1;
    pcInput = Math.floor(Math.random() * 6) + 1;

    startContainerEl.classList.replace('d-flex', 'd-none');
    endContainerEl.classList.replace('d-none', 'd-flex');

    if(userInput > pcInput){
        answerEl.innerHTML = 'Hai vinto!';
    }else if(userInput < pcInput){
        answerEl.innerHTML = 'Hai perso!';
    }else{
        answerEl.innerHTML = 'Pareggio!';
    };

    userOutputEl.innerHTML = `Il tuo punteggio è: ${userInput}`;
    pcOutputEl.innerHTML = `Il punteggio del computer è: ${pcInput}`;
});

endBtnEl.addEventListener('click', function(){
    endContainerEl.classList.replace('d-flex', 'd-none');
    startContainerEl.classList.replace('d-none', 'd-flex');
});
