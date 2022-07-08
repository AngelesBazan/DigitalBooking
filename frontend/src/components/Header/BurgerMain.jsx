import React from 'react';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import styles from '../../styles/header/header.module.css'
import "../../styles/header/burger.css";


const BurgerMain = ({page, logged, logout }) => {
  const { admin } = useContext(UserContext);
  return (
    <div className='links'>
      {
        admin ?
        <div className={styles.userAdmin}>
          <Link to="/admin">
            <h3>Administración</h3>
          </Link>
        </div> : ""
       }
    {
      logged ? (<div className={styles.burgerLogout}><div className={styles.lineLogout}>¿Deseas <span onClick={logout}> cerrar sesión</span>?</div><div className="line"></div></div>)
        
      : page === "register" ? <Link to={"/login"}>Iniciar sesión</Link>

      : page === "login" ? <Link to={"/register"}>Crear cuenta</Link>
      
      : (
          <div className="options-block">
            <Link to={"/login"}>Iniciar sesión</Link>
            <div className="line"></div>
            <Link to={"/register"}>Crear cuenta</Link>
          </div>
      )
    }

    </div>
  )
}

export default BurgerMain