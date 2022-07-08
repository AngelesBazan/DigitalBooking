import React, { useState, useContext, useEffect } from 'react';
import { ProductContext } from '../../contexts/ProductContext'
import { useNavigate } from 'react-router-dom';
import { fetchRegister } from '../../helpers/postRegister';
import { useUser } from './useUser';
import { UserContext } from '../../contexts/UserContext';
import { UrlContext } from '../../contexts/UrlContext';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/forms/form.module.css";
import "../../styles/forms/form.css"

const RegisterForm = () => {

    const { urlBase } = useContext(UrlContext);
    const { login } = useUser();
    let toHome = useNavigate();

    /* const url = `${urlBase}/register`; */

    const regexMail = /^(([^<>()[\]\\.,;:\s@”]+(\.[^<>()[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[09]{1,3}\.[09]{1,3}\.[09]{1,3}\.[09]{1,3}])|(([a-zA-Z\-09]+\.)+[a-zA-Z]{2,}))$/;

    const { idP, productData, goToBooking } = useContext(ProductContext);
    const { logged, setLogged, setUser, setErrorRegister, setEmailExist } = useContext(UserContext);

    let toBooking = useNavigate();
    let toProduct = useNavigate();

    const [passwordView, setPasswordView] = useState(false);
    const [passwordViewC, setPasswordViewC] = useState(false);

    const togglePasswordView = () => {
        setPasswordView(!passwordView);
    };
    const togglePasswordViewC = () => {
        setPasswordViewC(!passwordViewC);
    };

    useEffect(() => {
        return () => {
            setErrorRegister(false)
            setEmailExist(false)
        }
    }, [])

    useEffect(() => { //chequear
        if (logged && !idP) {
            toHome('/');
        }
        if (logged && idP && goToBooking) {
            toBooking(`/${productData.category.title.replace(/ /g, '').toLowerCase()}/${productData.name.replace(/ /g, '').toLowerCase()}/reserva`);
        }
        if (logged && idP && !goToBooking) {
            toProduct(`/${productData.category.title.replace(/ /g, '').toLowerCase()}/${productData.name.replace(/ /g, '').toLowerCase()}`);
        }
    }, [logged]);

    return (
        <div className='form-container'>
            <Formik
                initialValues={{
                    firstname: '',
                    lastname: '',
                    mail: '',
                    password: '',
                    passwordConfirm: ''
                }}
                validate={(valores) => {
                    let errores = {};

                    if (!valores.firstname.trim()) {
                        errores.firstname = "El nombre es requerido";
                    }
                    if (!valores.lastname.trim()) {
                        errores.lastname = "El apellido es requerido";
                    }
                    if (!valores.mail.trim()) {
                        errores.mail = "El correo es requerido";
                    } else if (!regexMail.test(valores.mail)) {
                        errores.mail = "Ingresa un correo válido";
                    }
                    if (!valores.password.trim()) {
                        errores.password = "La contraseña es requerida";
                    } else if (valores.password.length < 6) {
                        errores.password = "La contraseña debe tener al menos 6 caracteres";
                    }
                    if (!valores.passwordConfirm.trim()) {
                        errores.passwordConfirm = "La confirmación de contraseña es requerida";
                    } else if (valores.password !== valores.passwordConfirm) {
                        errores.passwordConfirm = "Las contraseñas no coinciden";
                    }

                    return errores;
                }}
                onSubmit={(valores, { resetForm }) => {
                    const nuevoUsuario = {
                        name: valores.firstname,
                        lastname: valores.lastname,
                        username: valores.mail,
                        password: valores.password
                    };
                    fetchRegister(urlBase, nuevoUsuario, valores.mail, setUser, setLogged, setErrorRegister, resetForm, setEmailExist);
                }}
            >
                {({ errors }) => (
                    <Form className={`${styles.form} register-input`}>
                        <div className={styles.containerFullName}>
                            <div className={`${styles.name} ${styles.fieldDiv}`}>
                                <label htmlFor='firstname'>Nombre</label>
                                <Field
                                    type="text"
                                    id='firstname'
                                    name='firstname'
                                >
                                    {
                                        ({
                                            field,
                                            meta: { touched, error }
                                        }) => <input className={touched && error ? `${styles.inputError} ${styles.field}` : `${styles.field}`} {...field} />
                                    }
                                </Field>
                                <ErrorMessage name='firstname' component={() => (
                                    <div className={styles.error}>{errors.firstname}</div>
                                )} />
                            </div>
                            <div className={`${styles.name} ${styles.fieldDiv}`}>
                                <label htmlFor='lastname'>Apellido</label>
                                <Field
                                    type="text"
                                    id='lastname'
                                    name='lastname'
                                >
                                    {
                                        ({
                                            field,
                                            meta: { touched, error }
                                        }) => <input className={touched && error ? `${styles.inputError} ${styles.field}` : `${styles.field}`} {...field} />
                                    }
                                </Field>
                                <ErrorMessage name='lastname' component={() => (
                                    <div className={styles.error}>{errors.lastname}</div>
                                )} />
                            </div>
                        </div>
                        <div className={styles.fieldDiv}>
                            <label htmlFor='mail'>Correo electrónico</label>
                            <Field
                                type="email"
                                id='mail'
                                name='mail'
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
                        <div className={`${styles.pass} ${styles.fieldDiv}`}>
                            <label htmlFor='password'>Contraseña</label>
                            <Field
                                name='password'
                            >
                                {
                                    ({
                                        field,
                                        meta: { touched, error }
                                    }) => <input type={`${passwordView ? "text" : "password"}`} id='password' className={touched && error ? `${styles.inputError} ${styles.field}` : `${styles.field}`} {...field} />
                                }
                            </Field>
                            <ErrorMessage name="password" component={() => (
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
                        <div className={`${styles.pass} ${styles.fieldDiv}`}>
                            <label htmlFor='passwordConfirm'>Confirmar contraseña</label>
                            <Field
                                name='passwordConfirm'
                            >
                                {
                                    ({
                                        field,
                                        meta: { touched, error }
                                    }) => <input type={`${passwordViewC ? "text" : "password"}`} id='passwordConfirm' className={touched && error ? `${styles.inputError} ${styles.field}` : `${styles.field}`} {...field} />
                                }
                            </Field>
                            <ErrorMessage name='passwordConfirm' component={() => (
                                <div className={styles.error}>{errors.passwordConfirm}</div>
                            )} />
                            <div>
                                {
                                    <FontAwesomeIcon
                                        icon={passwordViewC ? faEye : faEyeSlash}
                                        onClick={togglePasswordViewC}
                                        className={styles.eye}
                                    />
                                }
                            </div>
                        </div>
                        <button className={styles.button} type='submit'>Crear cuenta</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default RegisterForm