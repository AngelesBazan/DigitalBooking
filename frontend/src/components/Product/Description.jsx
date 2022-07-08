import React from "react";
import styles from '../../styles/product/product.module.css'

const Description = ({description}) => {
  return (
    <>
      <div className={styles.containerDescription}>
        <h2 className={styles.title}>Un entorno inigualable</h2>
        { !description? 'cargando...' : (description).split("/").map( e => <p className={styles.description} key={e}>{e}</p>)}
      </div>
    </>
  );
};

export default Description;
