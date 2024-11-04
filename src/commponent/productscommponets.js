import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtocart } from "../redux/reducers/productAction/actioncart";
import { DecreaseQty } from "../redux/reducers/productAction/actionproducts";
export default function ShowProduct() {
  const products = useSelector((state) => state.productReducer)
  const dispatch = useDispatch();
  const [product, setx] = useState();
  return (

    <div className="items" style={{ "display": "grid", "gridTemplateColumns": "auto auto auto auto auto" }}>

      {products.map((proverb) => (
        <div class="card" style={{ "width": "18rem", "padding": "3vh" }}>
          <img class="card-img-top" src={proverb.image} alt="Card image cap"></img>
          <div class="card-body">
          <h5 class="card-title">{proverb.description}</h5>
          <h5 class="card-title">price: {proverb.price}</h5>
          <p class="card-text">the qty{proverb.qty}</p>
            <button class="btn btn-primary" onClick={(e) => {
            e.preventDefault();
            dispatch(DecreaseQty(proverb));
            dispatch(addtocart(proverb));
            setx(proverb.qty)
          }}>add to cart</button>
          </div>
        </div>

      ))}
    </div>
  );
};