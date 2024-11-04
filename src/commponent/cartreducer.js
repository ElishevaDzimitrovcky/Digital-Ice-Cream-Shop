import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtocart, leesOneFromCart, lessfromcart } from "../redux/reducers/productAction/actioncart";
import { Add, DecreaseQty, Minuse } from "../redux/reducers/productAction/actionproducts";
import { Link } from "react-router-dom";

export default function ShowCart() {
  const cartProducts = useSelector(state => state.cartReducer);
  const dispatch = useDispatch();
  const [x, setx] = useState();
  const cart = useSelector((state) => state.cartReducer)
  let sum = 0;
  cart.forEach(element => {
    sum += (element.cartAmount * element.price);
  });
  return (
    <>
      <button>
        <Link to="/payment">payment</Link>
      </button>
      <h1>your total is: {sum}</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">product</th>
            <th scope="col">price</th>
            <th scope="col">amount</th>
            <th scope="col">total price</th>
          </tr>
        </thead>
        <tbody>
          {cartProducts.map((proverb) => (
            <tr>
              <img src={proverb.image} alt={proverb.name} style={{ width: '100px' }} />      <td>{proverb.price}</td>
              <td>{proverb.cartAmount}</td>
              <td>{proverb.cartAmount * proverb.price}</td>
              <button onClick={(e) => {
                e.preventDefault();
                dispatch(DecreaseQty(proverb));
                dispatch(addtocart(proverb));
                setx(proverb.qty)
              }}>+</button>
              <button onClick={(e) => {
                e.preventDefault();
                dispatch(Minuse(proverb, proverb.cartAmount));
                dispatch(lessfromcart(proverb));
                setx(proverb.qty)
              }}>מחק</button>
              <button onClick={(e) => {
                e.preventDefault();
                dispatch(Add(proverb));
                dispatch(leesOneFromCart(proverb));
                setx(proverb.qty)
              }}>-</button>
            </tr>))}

        </tbody>
      </table>
    </>
  )
}