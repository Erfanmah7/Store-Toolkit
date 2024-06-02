import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/Config";

const UserContext = createContext();

function ProductsContext({ children }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await api.get("/products");
        setProducts(res);
      } catch (error) {
        console.log(error.message);
      }
    };
    getData();
  }, []);
  return (
    <div>
      <UserContext.Provider value={products}>{children}</UserContext.Provider>
    </div>
  );
}

const useProducts = () => {
  const products = useContext(UserContext);
  return products;
};

export default ProductsContext;
export { useProducts };
