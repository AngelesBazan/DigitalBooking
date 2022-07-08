import React, { useState, useContext, useEffect } from "react";
import { UrlContext } from "../../contexts/UrlContext";
import { IoLocationSharp } from "react-icons/io5";
import { IoStarSharp } from "react-icons/io5";
import styles from "../../styles/booking/booking.module.css";
import { postBooking } from "../../helpers/postBooking";
import { Formik, Form, ErrorMessage } from "formik";

const DetalleReserva = ({
  name,
  category,
  city,
  prov,
  country,
  productImages,
  dateRangeN,
  reserva,
  setReservaExitosa,
  isCity,
  setClickBooking,
  isCheckIn,
}) => {
  // eslint-disable-next-line
  const [showNotification, setShowNotification] = useState(false);
  const [missingData, setMissingData] = useState(false);
  const [missingInitialDate, setMissingInitialDate] = useState(false);
  const [missingFinalDate, setMissingFinalDate] = useState(false);
  const [errorBooking, setErrorBooking] = useState(false);
  const [notificationProps, setNotificationProps] = useState({
    message: "",
    type: "success",
  });

  /* const onCloseNotification = () => setShowNotification(false); */
  const handleConfirmarReserva = ({ message, type }) => {
    /* if (missingData) {
      setShowNotification(false);
      setShowNotification(false);
    } else { */
    setNotificationProps({ message, type });
    /* setShowNotification(true);
     }*/
  };

  useEffect(() => {
    if (missingData) {
      setShowNotification(false);
    } else {
      /* setNotificationProps({ message, type }); */
      /* setShowNotification(true); */
    }
  }, [missingData]);

  useEffect(() => {
    // eslint-disable-next-line
    if (dateRangeN[0] != "Invalid da") {
      setMissingInitialDate(false);
    }
    // eslint-disable-next-line
    if (dateRangeN[1] != "Invalid da") {
      setMissingFinalDate(false);
    }
  }, [dateRangeN]);

  useEffect(() => {
    return () => {
      setClickBooking(false);
    };
    // eslint-disable-next-line
  }, []);

  const photoPpal = {
    backgroundImage: `url(${
      productImages.find((im) => im.title === "main").urlImage
    })`,
  };

  const { urlBase } = useContext(UrlContext);
  /* const { user:{idUser2}, product: {idP2}  } = reserva; */
  const idUser = reserva.user.id;
  const idP = reserva.product.id;
  /* let toBooking = useNavigate(); */

  const normalizeDate = (date) => {
    if (date != null) return date.split("-").reverse().join("/");
  };

  return (
    <div className={styles.containerBooking}>
      <h2 className={styles.title}>Detalle de la reserva</h2>
      <div className={styles.detailsGrid}>
        <div className={styles.photo} style={photoPpal}></div>
        <div className={styles.details}>
          <div className={styles.hotelDetails}>
            <h4 className={styles.category}>
              {" "}
              {category != null ? category.toUpperCase() : ""}{" "}
            </h4>
            <h3 className={styles.name}> {name}</h3>

            <div className={styles.score}>
              <IoStarSharp className="star" />
              <IoStarSharp className="star" />
              <IoStarSharp className="star" />
              <IoStarSharp className="star" />
              <IoStarSharp className="star" />
            </div>
            <div className={styles.ubication}>
              <IoLocationSharp className={styles.iconUbication} />
              <p>
                {city}, {prov}, {country}
              </p>
            </div>
          </div>
          <hr className={styles.line} />
          <div className={styles.checkInOutDetails}>
            <p>Check in</p>
            <p className={styles.date}>
              {" "}
              {dateRangeN[0] == "Invalid da"
                ? "__ /__ /__"
                : normalizeDate(dateRangeN[0])}
            </p>
          </div>
          <hr className={styles.line} />
          <div className={styles.checkInOutDetails}>
            <p>Check out</p>
            <p className={styles.date}>
              {" "}
              {dateRangeN[1] == "Invalid da"
                ? "__ /__ /__"
                : normalizeDate(dateRangeN[1])}
            </p>
          </div>
          <hr className={styles.line} />

          <Formik
            initialValues={{
              initial_date: "",
              final_date: "",
              user: {
                id: "",
              },
              product: {
                id: "",
              },
            }}
            /* validate={(valores) => {
              console.log(valores)
              let errores = {};
              if (!valores.initial_date.trim()) {
                errores.initial_date = "Fecha inicial es requerida";
              }
              if (!valores.final_date.trim()) {
                errores.final_date = "Fecha final es requerida";
              }
              return errores;
            }} */
            onSubmit={(valores, { resetForm }) => {
              setClickBooking(true)
              const reserva = {
                initial_date: dateRangeN[0],
                final_date: dateRangeN[1],
                user: {
                  id: idUser,
                },
                product: {
                  id: idP,
                },
              };

              if (reserva.initial_date == "Invalid da") {
                /* console.log("falta fecha inicial") */
                setMissingData(true);
                setMissingInitialDate(true);
              } else {
                setMissingData(false);
              }
              if (reserva.final_date == "Invalid da") {
                console.log("falta fecha final");
                setMissingData(true);
                setMissingFinalDate(true);
              } else {
                setMissingData(false);
              }
              if (
                reserva.initial_date != "Invalid da" &&
                reserva.final_date != "Invalid da" &&
                isCity &&
                isCheckIn
              ) {
                console.log("va a hacer el fetch");
                setMissingData(false);
                console.log(reserva);
                /* postBooking(url, reserva, setReservaExitosa, setErrorBooking); */
                postBooking(
                  urlBase,
                  reserva,
                  setReservaExitosa,
                  setErrorBooking
                );
                handleConfirmarReserva({
                  message:
                    "¡Muchas gracias! Su reserva se ha realizado con exito",
                  type: "success", //type can be also "error" or "warning" https://mui.com/material-ui/react-snackbar/
                });
              }
            }}
          >
            {({ errors }) => (
              <Form className={styles.detailsBookingForm}>
                {console.log(errors)}
                <ErrorMessage
                  name="initial_date"
                  component={() => (
                    <div className={styles.error}>{errors.initial_date}</div>
                  )}
                />
                <ErrorMessage
                  name="final_date"
                  component={() => (
                    <div className={styles.error}>{errors.final_date}</div>
                  )}
                />
                <p
                  className={`${styles.errorInitialDate} ${
                    missingInitialDate ? styles.showError : styles.hideError
                  }`}
                >
                  La fecha inicial es requerida
                </p>
                <p
                  className={`${styles.errorFinalDate} ${
                    missingFinalDate ? styles.showError : styles.hideError
                  }`}
                >
                  La fecha final es requerida
                </p>
                <p
                  className={`${styles.errorFinalDate} ${styles.errorBooking} ${
                    errorBooking ? styles.showError : styles.hideError
                  }`}
                >
                  Lamentablemente la reserva no ha podido realizarse. Por favor,
                  intente más tarde
                </p>
                <button className={styles.button} type="submit">
                  Confirmar reserva
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      {/* <Success displayDialog={showNotification} /> */}
    </div>
  );
};

export default DetalleReserva;
