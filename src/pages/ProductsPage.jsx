import styles from "../pages/productspage.module.css";
import { useProducts } from "../context/ProductsContext";

function ProductsPage() {
  const products = useProducts();
  console.log(products);

  return (
    <div className={styles.container}>
      <div className={styles.products}>
        {!products.length && <p>Loading ...</p>}
        {products.map((p) => (
          <p key={p.id}>{p.title}</p>
        ))}
      </div>
      <div>SideBar</div>
    </div>
  );
}

export default ProductsPage;
