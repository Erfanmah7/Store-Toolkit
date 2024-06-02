import styles from "../pages/productspage.module.css";
import { useProducts } from "../context/ProductsContext";
import Card from "../components/Card";
import Loader from "../components/Loader";
import { ImSearch } from "react-icons/im";
import { useState } from "react";

function ProductsPage() {
  const products = useProducts();
  const [search, setSearch] = useState("");
  console.log(products);

  const searchHandler = () => {
    console.log("search");
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
          {!products.length && <Loader />}
          {products.map((p) => (
            <Card key={p.id} data={p} />
          ))}
        </div>
        <div>SideBar</div>
      </div>
    </>
  );
}

export default ProductsPage;
