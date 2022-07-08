import { useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
import { ProductContext } from '../contexts/ProductContext'
import { UserContext } from '../contexts/UserContext';
import { UrlContext } from '../contexts/UrlContext';
import LoginForm from "../components/Login-Register/LoginForm";
import LoginAlert from '../components/Login-Register/LoginAlert';
import Title from "../components/Title";
import Note from "../components/Login-Register/NoteL";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/forms/form.module.css";


function Login() {

  const {urlBase} = useContext(UrlContext);
  const { isRedirect } = useContext(ProductContext);
  const { errorLogin, setErrorLogin, badCredentials, setBadCredentials } = useContext(UserContext);

  let errorBooking = 'Para realizar una reserva necesitas estar logueado';
  let errorLogueo = 'Lamentablemente no ha podido iniciar sesión. Por favor intente más tarde';
  let errorCrendentials = 'Por favor vuelva a intentarlo, sus credenciales son inválidas';

  useEffect(() => {
    return () => {
      setBadCredentials(false)
      setErrorLogin(false)
    }
  }, [setBadCredentials, setErrorLogin])

  return (
    <div className={styles.login}>
      <div className="header-form">
        <Header page="login" />
      </div>
      <div className={styles.container}>
        <Link to={"/"}>
          <FontAwesomeIcon icon={faXmark} className={styles.close} />
        </Link>
        {badCredentials ? <LoginAlert errorCrendentials={errorCrendentials} /> : errorLogin ? <LoginAlert errorLogueo={errorLogueo} /> : isRedirect ? <LoginAlert errorBooking={errorBooking} /> :  ''}
        <Title text="Iniciar sesión" />
        <LoginForm badCredentials={badCredentials} setBadCredentials={setBadCredentials} setErrorLogin={setErrorLogin} urlBase={urlBase}/>
        <Note />
      </div>
      <Footer />
    </div>
  );
}

export default Login;
