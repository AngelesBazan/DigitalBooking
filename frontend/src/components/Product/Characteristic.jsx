import React from "react";
import styles from "../../styles/product/product.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Characteristic = ({ characteristics  }) => {
  return (
    <>
      <div className={styles.containerCharacteristic}>
        <h2 className={styles.h2}>¿Qué ofrece este lugar?</h2>
        <hr className={styles.separator} />
        <div className={styles.icons}>
          <div className={styles.characteristic}>
            {characteristics  != null ? (characteristics/* .slice(1, 5) */.map((elem, i) => (
              <div key={elem.id}>
                <p className={styles.iconText}>
                  <FontAwesomeIcon key={i} icon={elem.icon} className={styles.icon} />{elem.name}
                </p>
              </div>
            ))) : ''}
          </div>
        </div>
      </div>
    </>
  );
};

export default Characteristic;
