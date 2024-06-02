import styles from "../pages/productspage.module.css";
import { useProducts } from "../context/ProductsContext";
import Card from "../components/Card";
import Loader from "../components/Loader";

function ProductsPage() {
  const products = useProducts();
  console.log(products);

  return (
    <div className={styles.container}>
      <div className={styles.products}>
        {!products.length && <Loader />}
        {products.map((p) => (
          <Card key={p.id} data={p} />
        ))}
      </div>
      <div>SideBar</div>
    </div>
  );
}

export default ProductsPage;
