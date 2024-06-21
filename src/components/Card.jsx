import styles from "../components/card.module.css";
import React from "react";
import { TbListDetails, TbShoppingBagCheck } from "react-icons/tb";
import { Link } from "react-router-dom";
import { shortText } from "../Helper/Helper";
import { useCart } from "../context/CartContext";

function Card({ data }) {
  const { id, title, image, price } = data;

  const [state, dipatch] = useCart();
  console.log(state);

  const clickHandler = () => {
    dipatch({ type: "ADD", payload: data });
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
          <button onClick={clickHandler}>
            <TbShoppingBagCheck />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
