import { createContext, useEffect, useState } from "react";
import api from "../services/Config";
const UserContext = createContext();

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
function ProductsContext({ children }) {
  const [products, setProducts] = useState([]);

  return (
    <div>
      <UserContext.Provider value={products}>{children}</UserContext.Provider>
    </div>
  );
}

export default ProductsContext;
