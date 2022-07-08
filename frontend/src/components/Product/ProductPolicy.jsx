import React from "react";
import styles from "../../styles/product/product.module.css";

const ProductPolicy = ({cancellation, houseRules, healthAndSafety}) => {
  return (
    <>
      <div className={styles.containerPolicy}>
        <h2 className={styles.h2}>¿Qué tenés que saber?</h2>
        <hr className={styles.separator} />

        <div className={styles.policy}>
          <div className="house-rules">
            <div>
              <h3 className={styles.h3}>Normas de la casa</h3>
            </div>
            <div>
              {houseRules != null ? (houseRules.split("/").map( ( elem,i ) => <p key={elem}>{elem}</p>)) : ''}
            </div>
          </div>
          <div className="security-policy">
            <div>
              <h3 className={styles.h3}>Salud y seguridad</h3>
            </div>
            <div>
            {healthAndSafety != null ? (healthAndSafety.split("/").map( ( elem,i ) => <p key={elem} >{elem}</p>)) : ''}
            </div>
          </div>
          <div className="cancellation-policy">
            <div>
              <h3 className={styles.h3}>Política de cancelación</h3>
            </div>
            <div>
              <p>{cancellation}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPolicy;
