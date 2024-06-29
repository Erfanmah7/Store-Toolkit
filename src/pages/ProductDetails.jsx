import React from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { useProductsDetails } from "../context/ProductsContext";
import { shortText } from "../Helper/Helper";
import { SiOpenproject } from "react-icons/si";
import { IoMdPricetag } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";
import styles from "../pages/productdetails.module.css";

function ProductDetails() {
  const { id } = useParams();
  const productsDetails = useProductsDetails(+id);

  console.log(productsDetails);

  if (!productsDetails) return <Loader />;

  return (
    <div className={styles.container}>
      <img src={productsDetails.image} alt={productsDetails.title} />
      <div className={styles.information}>
        <h3 className={styles.title}>{shortText(productsDetails.title)}</h3>
        <p className={styles.description}>{productsDetails.description}</p>
        <p className={styles.category}>
          <SiOpenproject />
          {productsDetails.category}
        </p>
        <div>
          <span className={styles.price}>
            <IoMdPricetag />
            {productsDetails.price} $
          </span>
          <Link to="/products">
            <FaArrowLeft />
            <span>Back to shop</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
