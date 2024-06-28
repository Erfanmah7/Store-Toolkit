import React from "react";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import styles from "../layout/layout.module.css";

function Layout({ children }) {
  const [state] = useCart();

  return (
    <>
      <header className={styles.header}>
        <Link to="/products">Shopp</Link>
        <Link to="/checkout">
          <div>
            <PiShoppingCartSimpleBold />
            {!!state.itemsCounter && <span>{state.itemsCounter}</span>}
          </div>
        </Link>
      </header>
      {children}
      <footer className={styles.footer}>Developed by Erfan with ♡</footer>
    </>
  );
}

export default Layout;
