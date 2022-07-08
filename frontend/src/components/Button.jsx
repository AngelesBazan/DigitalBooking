import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/header/header.module.css";

const Button = ({ name, to }) => {
  return (
    <Link to={to} className={styles.button}>
      {name}
    </Link>
  );
};

export default Button;
