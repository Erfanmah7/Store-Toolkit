import styles from "../components/card.module.css";
import React from "react";
import { TbListDetails, TbShoppingBagCheck } from "react-icons/tb";
import { Link } from "react-router-dom";
import { newquantity, shortText } from "../Helper/Helper";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  decrese,
  increse,
  removeItem,
} from "../features/cart/cartSlice";

function Card({ data }) {
  const { id, title, image, price } = data;
  const dispatch = useDispatch();
  const state = useSelector((store) => store.cart);
  const quantity = newquantity(state, id);

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
            <button onClick={() => dispatch(removeItem(data))}>
              <MdDeleteOutline />
            </button>
          )}

          {quantity > 1 && (
            <button onClick={() => dispatch(decrese(data))}>-</button>
          )}
          {!!quantity && <span> {quantity}</span>}
          {quantity === 0 ? (
            <button onClick={() => dispatch(addItem(data))}>
              <TbShoppingBagCheck />
            </button>
          ) : (
            <button onClick={() => dispatch(increse(data))}>+</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
