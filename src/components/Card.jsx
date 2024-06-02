import styles from "../components/card.module.css";
import React from "react";
import { TbListDetails, TbShoppingBagCheck } from "react-icons/tb";
import { Link } from "react-router-dom";
import { shortText } from "../Helper/Helper";

function Card({ data }) {
  const { id, title, image, price } = data;
  console.log(title);

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
          <button>
            <TbShoppingBagCheck />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
