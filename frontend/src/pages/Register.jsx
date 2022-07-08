import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from '../contexts/UserContext';
import Header from "../components/Header/Header";
import Title from "../components/Title";
import RegisterForm from "../components/Login-Register/RegisterForm";
import Note from "../components/Login-Register/NoteR";
import Footer from "../components/Footer/Footer";
import LoginAlert from '../components/Login-Register/LoginAlert';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/forms/form.module.css";


const Register = () => {
  const { errorRegister, emailExist } = useContext(UserContext);

  const msgErrorRegister = 'Lamentablemente no ha podido registrarse. Por favor intente más tarde'
  const msgErrorEmailExist = 'Ese correo electrónico ya existe, vuelva a intentar con otro'

  return (
    <div className={styles.register}>
      <div className="header-form">
        <Header page="register" />
      </div>
      <div className={styles.container}>
        <Link to={"/"}>
          <FontAwesomeIcon icon={faXmark} className={styles.close} />
        </Link>
        {emailExist ? <LoginAlert className={styles.container} msgErrorEmailExist={msgErrorEmailExist} /> : errorRegister ? <LoginAlert msgErrorRegister={msgErrorRegister} /> : ''}
        <Title text="Crear cuenta" />
        <RegisterForm errorRegister={errorRegister} />
        <Note />
      </div>
      <Footer />
    </div>
  );
};

export default Register;
