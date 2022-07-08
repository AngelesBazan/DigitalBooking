import React from "react";
import styles from "../../styles/header/header.module.css";

const LoggedUserNavBurger = ({ user }) => {

  const [name, lastname] = user;

  return (
    <div className={styles.blockUserBurger}>
      <div className={styles.avatar}>
        {user.length > 0 ? name.charAt(0).toUpperCase() + lastname.charAt(0).toUpperCase() : ""}
      </div>
      <div className={styles.userHeader}>
        <p>Hola,</p>
        <p className={styles.userlogHeader}>{name + ' ' + lastname}</p>
      </div>
    </div>
  );
}

export default LoggedUserNavBurger