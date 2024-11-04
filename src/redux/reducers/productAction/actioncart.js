export const lessfromcart = (product) =>{
    return{
        type: "LESSFROMCART",
        payload: product,
    };
};
export const addtocart = (product) =>{
    return{
        type: "ADDTOCART",
        payload: product,
    };
};

export const leesOneFromCart = (product,how_many) =>{
    return{
        type: "LESSONEFROMCART",
        payload: product,
        how_many
    };
};