import React, { useState, useEffect, useContext } from 'react';
import { ProductContext } from '../../contexts/ProductContext'
import { useNavigate } from 'react-router-dom';
import { fetchLogin } from '../../helpers/postLogin';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/forms/form.module.css";
import "../../styles/forms/form.css"
import { UserContext } from '../../contexts/UserContext';

const LoginForm = ({ badCredentials, setBadCredentials, setErrorLogin, urlBase }) => {

    const { idP, productData, goToBooking } = useContext(ProductContext);
    const { setUser, logged, setLogged, setAdmin } = useContext(UserContext);

    const endpoint = `${urlBase}/authenticate`;
    let toBooking = useNavigate();
    let toProduct = useNavigate();
    let toHome = useNavigate();

    const [passwordView, setPasswordView] = useState(false);
    const togglePasswordView = () => {
        setPasswordView(!passwordView);
    };

    const regexMail = /^(([^<>()[\]\\.,;:\s@”]+(\.[^<>()[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[09]{1,3}\.[09]{1,3}\.[09]{1,3}\.[09]{1,3}])|(([a-zA-Z\-09]+\.)+[a-zA-Z]{2,}))$/;




    useEffect(() => { //chequear
        if (!idP && !badCredentials && logged) {
            toHome('/');
        } else if (idP && !badCredentials && logged) {
            toBooking(`/${productData.category.title.replace(/ /g, '').toLowerCase()}/${productData.name.replace(/ /g, '').toLowerCase()}/reserva`);
        }
        // eslint-disable-next-line
    }, [badCredentials]);

    useEffect(() => { //chequear
        if (!idP && !badCredentials && logged) {
            toHome('/');
        }
        if (idP && !badCredentials && logged && !goToBooking) {
            toProduct(`/${productData.category.title.replace(/ /g, '').toLowerCase()}/${productData.name.replace(/ /g, '').toLowerCase()}`);
        }
        if (idP && !badCredentials && logged && goToBooking) {
            toBooking(`/${productData.category.title.replace(/ /g, '').toLowerCase()}/${productData.name.replace(/ /g, '').toLowerCase()}/reserva`);
        }
        // eslint-disable-next-line
    }, [logged]);

    return (
        <div className='form-container'>
            <Formik
                initialValues={{
                    mail: '',
                    password: ''
                }}
                validate={(valores) => {
                    let errores = {};
                    if (!valores.mail.trim()) {
                        errores.mail = "El correo es requerido";
                    } else if (!regexMail.test(valores.mail)) {
                        errores.mail = "Ingresa un correo válido";
                    }
                    if (!valores.password.trim()) {
                        errores.password = "La contraseña es requerida";
                    }
                    return errores;
                }}
                onSubmit={(valores, { resetForm }) => {
                    const usuario = {
                        username: valores.mail,
                        password: valores.password
                    }

                    let mail = valores.mail;
                    fetchLogin(endpoint, urlBase, usuario, mail, setUser, setLogged, badCredentials, setBadCredentials, setErrorLogin, setAdmin);
                    resetForm();

                    /* if(!idP && badCredentials){
                        toHome('/');
                    } else{
                        toBooking(`/${productData.category.title.replace(/ /g, '').toLowerCase()}/${productData.name.replace(/ /g, '').toLowerCase()}/reserva`);
                    } */
                }}

            >
                {({ errors }) => (
                    <Form className={`${styles.form} login-input`}>
                        <div className={styles.fieldDiv}>
                            <label htmlFor='mail'>Correo electrónico</label>
                            <Field
                                type="email"
                                id='mail'
                                name='mail'
                                className={styles.field}
                            >
                                {
                                    ({
                                        field,
                                        meta: { touched, error }
                                    }) => <input className={touched && error ? `${styles.inputError} ${styles.field}` : `${styles.field}`} {...field} />
                                }
                            </Field>
                            <ErrorMessage name='mail' component={() => (
                                <div className={styles.error}>{errors.mail}</div>
                            )} />
                        </div>

                        <div className={styles.fieldDiv}>
                            <label htmlFor='password'>Contraseña</label>
                            <Field
                                name='password'
                                className={styles.field}
                            >
                                {
                                    ({
                                        field,
                                        meta: { touched, error }
                                    }) => <input type={`${passwordView ? "text" : "password"}`} id='password' className={touched && error ? `${styles.inputError} ${styles.field}` : `${styles.field}`} {...field} />
                                }
                            </Field>
                            <ErrorMessage name='password' component={() => (
                                <div className={styles.error}>{errors.password}</div>
                            )} />
                            <div>
                                {
                                    <FontAwesomeIcon
                                        icon={passwordView ? faEye : faEyeSlash}
                                        onClick={togglePasswordView}
                                        className={styles.eye}
                                    />
                                }
                            </div>
                        </div>
                        <button className={styles.button} type='submit'>Ingresar</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default LoginForm