import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import PageNotFound from "./pages/PageNotFound";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";
import Layout from "./layout/Layout";

function App() {
  return (
    <>
          <BrowserRouter>
            <Layout>
              <Routes>
                <Route path="/" element={<Navigate to="/products" replace />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/products/:id" element={<ProductDetails />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/*" element={<PageNotFound />} />
              </Routes>
            </Layout>
          </BrowserRouter>
    </>
  );
}

export default App;
