import React from "react";
import { shortText } from "../Helper/Helper";
import { MdDeleteOutline } from "react-icons/md";
import styles from "../components/basketcard.module.css";
import { useDispatch } from "react-redux";
import { decrese, increse, removeItem } from "../features/cart/cartSlice";

function BasketCard({ data }) {
  const { image, title, quantity } = data;
  const dispatch = useDispatch();

  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <p>{shortText(title)}</p>
      <div className={styles.actions}>
        {quantity === 1 && (
          <button onClick={() => dispatch(removeItem(data))}>
            <MdDeleteOutline />
          </button>
        )}
        {quantity > 1 && (
          <button onClick={() => dispatch(decrese(data))}>-</button>
        )}
        <span>{quantity}</span>
        <button onClick={() => dispatch(increse(data))}>+</button>
      </div>
    </div>
  );
}

export default BasketCard;
