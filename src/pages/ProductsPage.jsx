import styles from "../pages/productspage.module.css";
import { useProducts } from "../context/ProductsContext";
import Card from "../components/Card";
import Loader from "../components/Loader";
import { ImSearch } from "react-icons/im";
import { useEffect, useState } from "react";
import { FaListUl } from "react-icons/fa";
import { filterCategory, filterSearch, getQuery } from "../Helper/Helper";
import { useSearchParams } from "react-router-dom";

function ProductsPage() {
  const products = useProducts();
  const [search, setSearch] = useState("");
  const [displayed, setDisplayed] = useState([]);
  const [query, setQuery] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setDisplayed(products);
  }, [products]);

  useEffect(() => {
    setSearchParams(query);
    let finalFilter = filterSearch(products, query.search);
    finalFilter = filterCategory(finalFilter, query.category);
    setDisplayed(finalFilter);
  }, [query]);

  const searchHandler = () => {
    setQuery((query) => getQuery(query, { search }));
  };

  const categoriHandler = (e) => {
    const { tagName } = e.target;
    if (tagName !== "LI") return;
    const category = e.target.innerText.toLowerCase();
    setQuery((query) => getQuery(query, { category }));
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
        />
        <button onClick={searchHandler}>
          <ImSearch />
        </button>
      </div>
      <div className={styles.container}>
        <div className={styles.products}>
          {!displayed.length && <Loader />}
          {displayed.map((p) => (
            <Card key={p.id} data={p} />
          ))}
        </div>
        <div>
          <div>
            <FaListUl />
            <p>Categories</p>
          </div>
          <ul onClick={categoriHandler}>
            <li>All</li>
            <li>Electronics</li>
            <li>Jewelery</li>
            <li>Men's Clothing</li>
            <li>Woman's Clothing</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ProductsPage;
