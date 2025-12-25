//https://deckofcardsapi.com
const newDeckBtn = document.getElementById("new-deck-btn");
const drawCardBtn = document.getElementById("draw-card-btn");
const remainingCount = document.getElementById("remaining-count");
const cardArea = document.getElementById("card-area");
const textArea = document.getElementById("text-area");
const drawnCardsAreaHearts = document.getElementById("drawn-cards-area-hearts");
const drawnCardsAreaClubs = document.getElementById("drawn-cards-area-clubs");
const drawnCardsAreaSpades = document.getElementById("drawn-cards-area-spades");
const drawnCardsAreaDiamonds = document.getElementById("drawn-cards-area-diamonds");

var deck_id="";
var clubsArray = ["","","","","","","","","","","","","",];
var spadesArray = ["","","","","","","","","","","","","",];
var diamondsArray = ["","","","","","","","","","","","","",];
var heartsArray = ["","","","","","","","","","","","","",];


async function getDeck(){
    try {
        const response = await fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
        if (!response.ok) throw new Error("Erreur API");

        const data = await response.json();
        console.log(data)
        remainingCount.textContent = data.remaining;
        deck_id=data.deck_id;

        textArea.textContent = "Jeu de carte d'id: "+deck_id;
    } catch (error) {
        textArea.textContent = "Impossible de récupérer le jeu de carte. ";
        console.error(error);
    }
}

async function drawCard(){
    try {
        const response = await fetch(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`);
        if (!response.ok) throw new Error("Erreur API");

        const data = await response.json();
        console.log(data)
        remainingCount.textContent = data.remaining;

        var card = data.cards[0];
        textArea.textContent = "Vous avez pioché le "+card.value+" de "+card.suit;

        cardArea.innerHTML = "";
        var imageCard = document.createElement("img");
        imageCard.src = card.image;
        cardArea.appendChild(imageCard);

        addCardArray(card);
    } catch (error) {
        textArea.textContent = "Impossible de piocher une carte. ";
        console.error(error);
    }
}

function addCardArray(card){
    var number;
    var array;
    var divCarte;

    switch(card.suit){
        case "HEARTS":
            array=heartsArray;
            divCarte=drawnCardsAreaHearts;
            break;
        case "CLUBS":
            array=clubsArray;
            divCarte=drawnCardsAreaClubs;
            break;
        case "SPADES":
            array=spadesArray;
            divCarte=drawnCardsAreaSpades;
            break;
        case "DIAMONDS":
            array=diamondsArray;
            divCarte=drawnCardsAreaDiamonds;
            break;
        default:
            console.error("Suit inconnu", card.suit);
            return;
    }
    switch(card.value){
        case "ACE":
            number=0;
            break;
        case "JACK":
            number=10;
            break;
        case "QUEEN":
            number=11;
            break;
        case "KING":
            number=12;
            break;
        default:
            number= parseInt(card.value, 10) - 1;
    }

    array[number]=card;
    divCarte.innerHTML = "";
    for(var i=0;i<13;i++){
        if(array[i]!=""){
            const imageCardMini = document.createElement("img");
            imageCardMini.src = array[i].image;
            divCarte.appendChild(imageCardMini);
        }
    }
    
}

getDeck();

newDeckBtn.addEventListener("click", getDeck);
drawCardBtn.addEventListener("click", drawCard);