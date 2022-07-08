import React from 'react';
import { Link } from "react-router-dom";
import styles from '../../styles/forms/note.module.css';

const Note = () => {
  return (
    <div className={styles.container}>
      {/* <Link to={'/register'}> */}
        <p className={styles.text}>¿Aún no tenes cuenta? <Link to={'/register'}><span className={styles.span}>Registrate</span></Link></p>
      {/* </Link> */}
    </div>
  )
}

export default Note