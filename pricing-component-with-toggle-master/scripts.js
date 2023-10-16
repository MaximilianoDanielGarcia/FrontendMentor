
let toggle = document.getElementById('toggle');
let prices = document.querySelectorAll('.price > span, .price > p');

toggle.addEventListener('click', (e) => {

    prices.forEach(e => e.classList.toggle('hidden'));

    if(toggle.getAttribute('data-toggle-value') === 'monthly'){
        toggle.style.justifyContent = 'start';
        toggle.setAttribute('data-toggle-value', 'annually');
    }
    else {
        toggle.style.justifyContent = 'end';
        toggle.setAttribute('data-toggle-value', 'monthly');
    }
    
});
