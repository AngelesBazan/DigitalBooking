import React from "react";
import { IoStarSharp } from "react-icons/io5";
import styles from "../../styles/product/product.module.css";

const Score = () => {
  return (
    <>
      <div className={styles.containerScore}>
        <div className={styles.score}>
          <p>Muy bueno</p>
          <div>
            <IoStarSharp className="star" />
            <IoStarSharp className="star" />
            <IoStarSharp className="star" />
            <IoStarSharp className="star" />
            <IoStarSharp className="star" />
          </div>
        </div>

        <div className={styles.scoreNumber}>
          <p>8</p>
        </div>
      </div>
    </>
  );
};

export default Score;
