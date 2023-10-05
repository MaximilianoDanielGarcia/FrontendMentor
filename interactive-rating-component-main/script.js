
let ratingButtons = document.getElementsByClassName('rating-number');

function removeSelected(){
    for(let r of ratingButtons){
        r.classList.remove('selected');
    }
}

for (let ratingButton of ratingButtons) {
    ratingButton.addEventListener('click', function (event){
        removeSelected();
        event.target.classList.add('selected');
    });
}

document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();

    if(document.getElementsByClassName('selected').length > 0){
        const selectedValue = document.getElementsByClassName('selected')[0].value;

        const form = document.getElementsByClassName('rating-form')[0];
        const result = document.getElementsByClassName('rating-result')[0];
        const rating = document.getElementById('rating-selected');

        form.classList.add('hidden');
        result.classList.remove('hidden');

        rating.innerHTML = selectedValue;
    }
}, false);