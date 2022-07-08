import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "../../styles/booking/booking.module.css";

const FormBooking = ({ user, isCity, setIsCity, clickBooking, setClickBooking }) => {
  const [name, lastname, username, id] = user;

  const handleBlur = (blur) => {
    if(blur.target.value != ""){
      setIsCity(blur.target.value)
    } else {
      setIsCity("")
    }
  }
  return (
    <div className={styles.section}>
      <h2 className={styles.title}>Completá tus datos</h2>
      <div className={styles.container}>
        {user.length > 0 ?

          <Formik
            initialValues={{
              firstname: name,
              lastname: lastname,
              mail: username,
              city: "",
            }}
            validate={(valores) => {
              let errores = {};
              if (!valores.firstname.trim()) {
                errores.firstname = "El nombre es requerido";
              }
              if (!valores.mail.trim()) {
                errores.mail = "El correo es requerido";
              }
              if (!valores.city.trim()) {
                errores.city = "La ciudad es requerida";
                setIsCity("")
              } else {
                setIsCity(valores.city.trim())
              }
              return errores;
            }}
            onSubmit={(valores, { resetForm }) => {
              resetForm();
            }}
          >
            {({ errors }) => (
              <Form>
                <div className={styles.fields}>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="firstname">
                      Nombre
                    </label>
                    <Field
                      type="firstname"
                      id="firstname"
                      name="firstname"
                      className={styles.input}
                      disabled
                    />
                    <ErrorMessage name='firstname' component={() => (
                      <div className={styles.error}>{errors.firstname}</div>
                    )} />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="lastname">
                      Apellido
                    </label>
                    <Field
                      type="lastname"
                      id="lastname"
                      name="lastname"
                      className={styles.input}
                      disabled
                    />
                    <ErrorMessage name='lastname' component={() => (
                      <div className={styles.error}>{errors.lastname}</div>
                    )} />
                  </div>
                </div>
                <div className={styles.fields}>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="mail">
                      Correo electrónico
                    </label>
                    <Field
                      type="mail"
                      id="mail"
                      name="mail"
                      className={styles.input}
                      disabled
                    />
                    <ErrorMessage name='mail' component={() => (
                      <div className={styles.error}>{errors.mail}</div>
                    )} />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="city">
                      Ciudad
                    </label>
                    <Field
                      type="city"
                      id="city"
                      name="city"
                      placeholder="Ciudad"
                      className={`${styles.inputCity} ${clickBooking ? !isCity ? styles.redBorder : "" : ""}`}
                      required
                      onBlur={(esto) => handleBlur(esto)}
                    />
                    <div className={styles.error}>{clickBooking ? isCity ? "" : "La ciudad es requerida" : ""}</div>
                  </div>
                </div>
              </Form>)}
          </Formik> : ""
        }
      </div>
    </div>
  );
};

export default FormBooking;