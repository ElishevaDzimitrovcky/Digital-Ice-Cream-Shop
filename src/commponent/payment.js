import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Payment(){
  useEffect(()=>{
    alert("Are you sure you want to pay us? Or do you want free?")
  })
  const cart1 = useSelector((state) => state.cartReducer)
  let sum = 0;
  cart1.forEach(element => {
    sum += (element.cartAmount*element.price);
  });
    return(
        <>
        <h1>your total is: {sum}</h1> 
        </>
    )
}