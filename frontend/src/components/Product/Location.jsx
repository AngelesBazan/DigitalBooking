import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import styles from "../../styles/product/product.module.css";

const Location = ({city, prov, country}) => {
  return (
    <>
      <div className={styles.containerLocation}>
        <IoLocationSharp className={styles.locationIcon} size={20}/>

        <div className={styles.ubication}>
          <p> {city}, {prov}, {country} </p>
        </div>
      </div>
    </>
  );
};

export default Location;
