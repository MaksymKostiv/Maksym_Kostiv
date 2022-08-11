const createButton = document.querySelector('.btn');
const containerCard = document.querySelector('.container-card');


let card = [];

createButton.addEventListener('click', () => {
    card.push(getRandomNft());
    renderNft();

});


function renderNft() {
    let result = '';
    for ( let i = 0; i < card.length; i++ ) {
        result += `<div class="box">
<div class="card"> </div>
    <span class="card-name">Card <br> Name</span>
    <span class="card-description">card <br> description</span>
    <img class="pictures" src="https://random.imagecdn.app/500/500" alt="">
    <div class="delete-card">
    <button class="delete" onclick="deleteCard(${card[i].id})"></button>
    </div>

</div>`;

    }
    containerCard.innerHTML = result;
}

renderNft();

function getRandomId() {
    return Math.floor(Math.random() * 1000);
}


function getRandomNft() {
    const cardName = 'Card <br> Name';
    const cardDescription = 'card <br> description';
    return {
        name: cardName,
        description: cardDescription,
        id: getRandomId()
    }

}

function deleteCard(cardId) {
    card = card.filter(el => el.id !== cardId);
    renderNft();

}









