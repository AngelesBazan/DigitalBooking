import React from 'react';
import { Link } from "react-router-dom";
import styles from '../../styles/forms/note.module.css';

const Note = () => {
  return (
    <div className={styles.container}>
      {/* <Link to={'/login'}> */}
        <p className={styles.text}>¿Ya tienes una cuenta? <Link to={'/login'}><span className={styles.span}>Iniciar sesión</span></Link></p>
      {/* </Link> */}
    </div>
  )
}

export default Note