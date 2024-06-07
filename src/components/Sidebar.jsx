import React from "react";
import { FaListUl } from "react-icons/fa";
import { getQuery } from "../Helper/Helper";
import { listCategory } from "../constants/list";

function Sidebar({ setQuery }) {
  const categoriHandler = (e) => {
    const { tagName } = e.target;
    if (tagName !== "LI") return;
    const category = e.target.innerText.toLowerCase();
    setQuery((query) => getQuery(query, { category }));
  };

  return (
    <div>
      <div>
        <FaListUl />
        <p>Categories</p>
      </div>
      <ul onClick={categoriHandler}>
        {listCategory.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
