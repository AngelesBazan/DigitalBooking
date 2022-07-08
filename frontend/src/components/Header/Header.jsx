import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import LoggedUserNav from "./LoggedUserNav";
import Burger from "./Burger";
import Button from "../Button";
import logo from "../../images/logoPrin.png";
import styles from "../../styles/header/header.module.css";
import "../../styles/header/header.css"

const Header = ({ page }) => {

  const { user, logged } = useContext(UserContext);

  return (
    <>
      <header>
        <div className={styles.blockLogo}>
          <div className={styles.logoSlogan}>
            <Link to="/" >
              <img className="etiqueta-para-arreglar-logo" src={logo} alt="Logo"></img>{" "}
            </Link>
            <Link to="/" >
              <p className={styles.slogan}>Sentite como en tu hogar</p>
            </Link>
          </div>
        </div>
        <div className={styles.buttons}>
          <Burger page={page}></Burger>
          {logged ? (
            <LoggedUserNav user={user} />
          ) :
            page === "register" ? (
              <Button to="/login" name="Iniciar Sesión" />
            ) : page === "login" ? (
              <Button to="/register" name="Crear cuenta" />
            ) : (
              <>
                <Button to="/register" name="Crear cuenta" />
                <Button to="/login" name="Iniciar Sesión" />
              </>
            )}
        </div>
      </header>
    </>
  );
};

export default Header;
