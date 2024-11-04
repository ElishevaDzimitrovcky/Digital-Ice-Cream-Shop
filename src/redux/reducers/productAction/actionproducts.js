export const DecreaseQty = (product) =>{
    return{
        type: "DECREASEQTY",
        payload: product,
    };
};
export const Add = (product) =>{
    return{
        type: "ADD",
        payload: product,
    };
};

export const Minuse = (product,how_many) =>{
    return{
        type: "MINUSE",
        product,
        how_many
    };
};