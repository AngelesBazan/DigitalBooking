import React from "react";
import Location from "./Location";
import Score from "./Score";
import styles from "../../styles/product/product.module.css";

const Ubication = ({ city, prov, country }) => {
  return (
    <>
      {city ? <div className={styles.containerUbication}>
        <Location city={city} prov={prov} country={country} />
        <Score />
      </div> : ""}
    </>
  );
};

export default Ubication;
