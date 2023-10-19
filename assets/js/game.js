
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

    console.log( cardsDeck );
    cardsDeck = _.shuffle( cardsDeck );
    console.log( cardsDeck );

    return cardsDeck;
}

createDeck();