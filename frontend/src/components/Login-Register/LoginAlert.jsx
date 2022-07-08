import React from 'react';
import styles from "../../styles/forms/form.module.css";

const LoginAlert = ({errorBooking, errorCrendentials, errorLogueo, msgErrorEmailExist, msgErrorRegister }) => {
  
  return (
    <div className={styles.loginAlert}>
       <span>!</span><p>{errorBooking}{errorCrendentials}{errorLogueo}{msgErrorEmailExist}{msgErrorRegister}</p>
    </div>
  )
}

export default LoginAlert