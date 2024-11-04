import React, { useState } from "react";
import poduct1 from "../../images/a/a10.png"
import poduct2 from "../../images/a/a11.png"
import poduct3 from "../../images/a/a12.png"
import poduct4 from "../../images/a/a13.png"
import poduct5 from "../../images/a/a14.png"
import poduct6 from "../../images/a/a15.png"
import poduct7 from "../../images/a/a16.png"
import poduct8 from "../../images/a/a17.png"
import poduct9 from "../../images/a/a18.png"
import poduct10 from "../../images/a/a19.png"
import poduct11 from "../../images/a/a.png"
import poduct12 from "../../images/a/a9.png"
import poduct13 from "../../images/a/a8.png"
import poduct14 from "../../images/a/a7.png"
import poduct15 from "../../images/a/a6.png"
import poduct16 from "../../images/a/a5.png"
import poduct17 from "../../images/a/a4.png"
import poduct18 from "../../images/a/a3.png"
import poduct19 from "../../images/a/a21.png"
import poduct20 from "../../images/a/a2.png"


<button>cart</button>
const proverbsArr = [
    {
        id: 1,
        name: 'Prover1',
        qty: 30,
        cartAmount: 0,
        price: 15,
        description: 'Kinder Bueno',
        image: poduct1

    },
    {
        id: 2,
        name: 'Prover2',
        qty: 90,
        cartAmount: 0,
        price: 18,
        description: 'Lemon Mint Sorbey',
        image: poduct2
    },
    {
        id: 3,
        name: 'Prover3',
        qty: 45,
        cartAmount: 0,
        price: 25,
        description: 'Lotus Cookies',
        image: poduct3
    },
    {
        id: 4,
        name: 'Prover4',
        qty: 67,
        cartAmount: 0,
        price: 17,
        description: 'Mango Sorbet',
        image: poduct4
    },
    {
        id: 5,
        name: 'Prover1',
        qty: 34,
        cartAmount: 0,
        price: 25,
        description: 'Oreo Cookies',
        image: poduct5

    },
    {
        id: 6,
        name: 'Prover1',
        qty: 50,
        cartAmount: 0,
        price: 23,
        description: 'Passion Fruit Sorbet',
        image: poduct6

    },
    {
        id: 7,
        name: 'Prover1',
        qty: 45,
        cartAmount: 0,
        price: 21,
        description: 'Strawberry & Banana',
        image: poduct7

    },
    {
        id: 8,
        name: 'Prover1',
        qty: 80,
        cartAmount: 0,
        price: 19,
        description: 'Mint Chip',
        image: poduct8

    },
    {
        id: 9,
        name: 'Prover1',
        qty: 35,
        cartAmount: 0,
        price: 20,
        description: 'Salted Carmel',
        image: poduct9

    },
    {
        id: 10,
        name: 'Prover1',
        qty: 40,
        cartAmount: 0,
        price: 16,
        description: 'Rum Raisins',
        image: poduct10

    },
    {
        id: 11,
        name: 'Prover1',
        qty: 60,
        cartAmount: 0,
        price: 26,
        description: 'Caramel Toffee',
        image: poduct11

    },
    {
        id: 12,
        name: 'Prover1',
        qty: 35,
        cartAmount: 0,
        price: 26,
        description: 'Italian Vanilla',
        image: poduct12

    },
    {
        id: 13,
        name: 'Prover1',
        qty: 90,
        cartAmount: 0,
        price: 26,
        description: 'French Vanilla',
        image: poduct13

    },
    {
        id: 14,
        name: 'Prover1',
        qty: 20,
        cartAmount: 0,
        price: 24,
        description: 'Espresso',
        image: poduct14

    },
    {
        id: 15,
        name: 'Prover1',
        qty: 67,
        cartAmount: 0,
        price: 23,
        description: 'Ferrero Rocher Parve',
        image: poduct15

    },
    {
        id: 16,
        name: 'Prover1',
        qty: 80,
        cartAmount: 0,
        price: 28,
        description: 'Ferrero Rocher',
        image: poduct16

    },
    {
        id: 17,
        name: 'Prover1',
        qty: 40,
        cartAmount: 0,
        price: 24,
        description: 'Dark Chocolate (70% cocoa)',
        image: poduct17

    },
    {
        id: 18,
        name: 'Prover1',
        qty: 58,
        cartAmount: 0,
        price: 24,
        description: 'Chinese Pecan',
        image: poduct18

    },
    {
        id: 19,
        name: 'Prover1',
        qty:12,
        cartAmount: 0,
        price: 26,
        description: 'Caramel Toffee',
        image: poduct19

    },
    {
        id: 20,
        name: 'Prover1',
        qty:12,
        cartAmount: 0,
        price: 15,
        description: 'Bubble Gum',
        image: poduct20

    }


]
export const productReducer = (state = proverbsArr, action) => {
    switch (action.type) {
        case 'DECREASEQTY': {

            // const newState = [...state]
            if (action.payload.qty > 0) {
                action.payload.qty -= 1;
                action.payload.cartAmount += 1;
            }

            return state;
        }
        case 'ADD': {
            // cartAmount++;
            
            if (action.payload.cartAmount > 0) {
                action.payload.cartAmount -= 1;
                action.payload.qty += 1;
            }
            return state;
        }
        case 'MINUSE': {
            const new_item = [...state]
            action.product.qty += action.how_many;
            action.product.cartAmount = 0;
            return new_item;
        }
            

    }
    return state
}