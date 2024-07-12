import styles from "../pages/productspage.module.css";
import Card from "../components/Card";
import Loader from "../components/Loader";
import { useEffect, useState } from "react";
import { filterCategory, filterSearch } from "../Helper/Helper";
import { useSearchParams } from "react-router-dom";
import SearchBox from "../components/SearchBox";
import Sidebar from "../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/products/productsSlice";

function ProductsPage() {
  const { products, loading } = useSelector((store) => store.product);
  console.log("sssss", products);
  const [displayed, setDisplayed] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    const query = {};
    const search = searchParams.get("search");
    const category = searchParams.get("category");
    if (search) query.search = search;
    if (category) query.category = category;

    setQuery(query);
    setDisplayed(products);
  }, [products]);

  useEffect(() => {
    setSearchParams(query);
    setSearch(query.search || "");
    let finalFilter = filterSearch(products, query.search);
    finalFilter = filterCategory(finalFilter, query.category);
    setDisplayed(finalFilter);
  }, [query]);

  return (
    <>
      <SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />
      <div className={styles.container}>
        <div className={styles.products}>
          {loading && <Loader />}
          {displayed.map((p) => (
            <Card key={p.id} data={p} />
          ))}
        </div>
        <Sidebar query={query} setQuery={setQuery} />
      </div>
    </>
  );
}

export default ProductsPage;
