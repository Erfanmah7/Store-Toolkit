import React from "react";
import { FaListUl } from "react-icons/fa";
import { getQuery } from "../Helper/Helper";
import { listCategory } from "../constants/list";
import styles from "../components/sidebar.module.css";

function Sidebar({ query, setQuery }) {
  const categoriHandler = (e) => {
    const { tagName } = e.target;
    if (tagName !== "LI") return;
    const category = e.target.innerText.toLowerCase();
    setQuery((query) => getQuery(query, { category }));
  };

  return (
    <div className={styles.sidebar}>
      <div>
        <FaListUl />
        <p>Categories</p>
      </div>
      <ul onClick={categoriHandler}>
        {listCategory.map((item) => (
          <li
            key={item.id}
            className={query.category === item.name.toLocaleLowerCase() ? styles.selected : null}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
