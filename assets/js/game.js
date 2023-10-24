
/**
 *  2C = Two of clubs
 *  2D = Two of diamonds
 *  2H = Two fo Heats
 *  2S = Two of shades
 * 
 */

let cardsDeck       = [];
const cardsTypes    = ['C', 'D', 'H', 'S'];
const specialCards = ['A', 'J', 'Q', 'K'];

let playerPoints = 0,
    computerPoints = 0;


//HTML references

const btnHit = document.querySelector('#btnHit');
const playerCount = document.querySelector('#playerCount');
const playerCardsContainer = document.querySelector('#player-cards');

const computerCount = document.querySelector('#pcCount');
const computerCardsContainer = document.querySelector('#pc-cards');

const btnStand = document.querySelector('#btnStand');
const btnNewGame = document.querySelector('#btnNewGame');

//This functi9n creates a new deck
const createDeck = () => {

    for( let i = 2; i <= 10; i++ ) {

        for(let cardType of cardsTypes) {
            cardsDeck.push( i + cardType );

        }
    }

    for( let cardType of cardsTypes) {
        for( let specialCard of specialCards ) {
            cardsDeck.push( specialCard + cardType)
        }
    }

    cardsDeck = _.shuffle( cardsDeck );
    //console.log( cardsDeck );

    return cardsDeck;
}

createDeck();

//This function takes one card each time is invoked, and remove the card taken from the deck
const hitCard = () => {

    if (cardsDeck.length === 0 ) {
        throw 'The deck is empty, there is not more cards';
    }

    const card = cardsDeck.pop();
    return card;
}

//Computer logic
//This function contains the logic for the computer shift
//This function receive the player points to delimiter the minimum points to achieve
const computerShift = ( minimumPoints ) => {

    do {

        const card = hitCard(); 
        computerPoints += cardValue( card );
        computerCount.innerText = computerPoints;

        const imgCard = document.createElement('img');
        //assets/cards/2C.png
        imgCard.src = `assets/cards/${ card }.png`;
        imgCard.classList.add('game-card');
        computerCardsContainer.append( imgCard );


        //This is the case where the user lose due to he hit more than 21 points
        //So, the computer just need to hit one card to win
        if ( minimumPoints > 21 ) {
            break;
        }

    } while( (computerPoints < minimumPoints) && (minimumPoints <= 21) );

    setTimeout(() => {
        if ( computerPoints === minimumPoints ) {
            alert('No one won :(');
        } else if ( minimumPoints > 21 ) {
            alert('Computer won!');
        } else if ( computerPoints > 21 ) {
            alert('Player Won!');
        } else {
            alert('Computer Won!');
        }
    }, 200 );

    

};


//This function extracts the value for each card and return the value
const cardValue = ( card ) => {

    const value = card.substring( 0, card.length - 1 );

    // variable by 1 converts string to int
    return ( isNaN( value ) ) ?
            ( value === 'A' ) ? 11 : 10
            : value * 1;

}


//Events


btnHit.addEventListener('click', () => {

    const card = hitCard(); 
    playerPoints += cardValue( card );
    playerCount.innerText = playerPoints;

    const imgCard = document.createElement('img');
    //assets/cards/2C.png
    imgCard.src = `assets/cards/${ card }.png`;
    imgCard.classList.add('game-card');
    playerCardsContainer.append( imgCard );

    if ( playerPoints > 21 ) {
        console.warn(' Sorry, you lost ');
        btnHit.disabled = true;
        btnStand.disabled = true;
        computerShift( playerPoints );
    } else if ( playerPoints === 21 ) {
        console.warn('21, genial!');
        btnHit.disabled = true;
        btnStand.disabled = true;
        computerShift( playerPoints );
    }
});

btnStand.addEventListener('click', () => {
    btnHit.disabled = true;
    btnStand.disabled = true;

    computerShift( playerPoints );
});

btnNewGame.addEventListener('click', () => {
    cardsDeck = [];
    cardsDeck = createDeck();

    playerPoints = 0;
    computerPoints = 0;

    playerCount.innerText = 0;
    computerCount.innerText = 0;

    playerCardsContainer.innerHTML = '';
    computerCardsContainer.innerHTML = '';

    btnHit.disabled = false;
    btnStand.disabled = false;
});