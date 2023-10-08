
let email = document.getElementById('email');

email.addEventListener('blur', (event) => {

    let msg = document.getElementById('error-msg');

    if(email.validity.patternMismatch){
        
        msg.classList.remove('hidden');
    }
    else {
        msg.classList.add('hidden');
    }
});


let form = document.getElementById('form');

form.addEventListener('submit', (event) => {

    event.preventDefault();

    if(event.target.email.value !== ''){
        let formSection = document.getElementsByClassName('form-section')[0];
        let imgSection = document.getElementById('img-section');

        formSection.classList.add('hidden');
        imgSection.classList.add('hidden');

        let successMsg = document.getElementsByClassName('success-message')[0];

        successMsg.classList.remove('hidden');

        let emailStrong = document.getElementById('email-submitted');

        emailStrong.innerHTML = event.target.email.value;
    }
    else {
        let msg = document.getElementById('error-msg');
        msg.classList.remove('hidden');
    }
    
  
});

let btnDismiss = document.getElementById('btn-dismiss');

btnDismiss.addEventListener('click', (event) => {
    let formSection = document.getElementsByClassName('form-section')[0];
    let imgSection = document.getElementById('img-section');

    formSection.classList.remove('hidden');
    imgSection.classList.remove('hidden');

    let successMsg = document.getElementsByClassName('success-message')[0];

    successMsg.classList.add('hidden');

    email.value = '';

});