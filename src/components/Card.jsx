import styles from "../components/card.module.css";
import React from "react";
import { TbListDetails, TbShoppingBagCheck } from "react-icons/tb";
import { Link } from "react-router-dom";
import { newquantity, shortText } from "../Helper/Helper";
import { useCart } from "../context/CartContext";
import { MdDeleteOutline } from "react-icons/md";

function Card({ data }) {
  const { id, title, image, price } = data;

  const [state, dipatch] = useCart();
  console.log(state);

  const quantity = newquantity(state, id);

  const clickHandler = (type) => {
    dipatch({ type, payload: data });
  };

  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <h3>{shortText(title)}</h3>
      <p>{price}</p>
      <div className={styles.actions}>
        <Link to={`/products/${id}`}>
          <TbListDetails />
        </Link>
        <div>
          {quantity === 1 && (
            <button onClick={() => clickHandler("REMOVE")}>
              <MdDeleteOutline />
            </button>
          )}

          {quantity > 1 && (
            <button onClick={() => clickHandler("DECREASE")}>-</button>
          )}
          {!!quantity && <span> {quantity}</span>}
          {quantity === 0 ? (
            <button onClick={() => clickHandler("ADD")}>
              <TbShoppingBagCheck />
            </button>
          ) : (
            <button onClick={() => clickHandler("INCREASE")}>+</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
