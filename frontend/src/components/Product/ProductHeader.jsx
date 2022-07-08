import React from "react";
import { useNavigate } from "react-router-dom";
import { IoChevronBackSharp } from "react-icons/io5";
import styles from "../../styles/product/product.module.css";

const ProductHeader = ({ name, category }) => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <>
      <div className={styles.header}>
        <div>
          <h4 className={styles.category}>
            {" "}
            {category != null ? category.toUpperCase() : ""}{" "}
          </h4>
          <h3 className={styles.name}> {name} </h3>
        </div>
        <div className={styles.arrowContainer}>
          <button className={styles.button} onClick={goBack}>
            <IoChevronBackSharp className={styles.arrow} />
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductHeader;
