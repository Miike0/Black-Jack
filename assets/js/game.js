
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

    //console.log( cardsDeck );
    cardsDeck = _.shuffle( cardsDeck );
    console.log( cardsDeck );

    return cardsDeck;
}

createDeck();

//This function takes one card each time is invoked, and remove the card taken from the deck
const hitCard = () => {

    if (cardsDeck.length === 0 ) {
        throw 'The deck is empty, there is not more cards';
    }

    const card = cardsDeck.pop();
    console.log(cardsDeck);
    console.log(card);
    return card;
}


//hitCard();