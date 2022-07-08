import React, { useRef } from "react";
import styles from "../styles/categories.module.css";
import Scroller from "../components/Scroller";

const Categories = ({ id, category, crimg, productsQuantity, changeCategory, currentCategory }) => {

  const photo = {
    backgroundImage: `url(${crimg})`,
  };

  const categoryRef = useRef(null);

  const isActive = category === currentCategory;

  const handleClick = () => {
    changeCategory(category);
  };

  return (
    <div
      className={isActive ? styles.selected : ''}
    >
      <Scroller
        to="suggestion"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
      >
        <div
          key={id}
          className={styles.type}
          onClick={handleClick}
          ref={categoryRef}
        >
          <div className={styles.title}>
            <h3>{category}</h3>
            <p>{`${productsQuantity} ${category.toLowerCase()}`}</p>
          </div>
          <div className={`${styles.photo} ${!isActive ? styles.unselected : ''}`} style={photo}></div>
        </div>
      </Scroller>
    </div>

  );
}

export default Categories;
