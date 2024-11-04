const cart = []
export const cartReducer = (state=cart,action)=>{
    switch(action.type){
        case 'LESSFROMCART' :{

            state = state.filter(product => product.id != action.payload.id)
            return state;
        }
        case 'ADDTOCART':{
            let flagone = 0;
            state.map(Element =>{
                if(Element.id == action.payload.id)
                    flagone = 1
            })
            if (!flagone) {
                return[...state, action.payload];
            }
            return state;
        }
        case 'LESSONEFROMCART':{
            state = state.filter(product => product.cartqty != 1)
            return state;
        }
    }
    return state
}