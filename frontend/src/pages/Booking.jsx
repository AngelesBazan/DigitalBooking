import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import { ProductContext } from "../contexts/ProductContext";
import { UrlContext } from "../contexts/UrlContext";
import Header from "../components/Header/Header";
import ProductHeader from "../components/Product/ProductHeader";
import DetalleReserva from "../components/Booking/DetalleReserva";
import ProductPolicy from "../components/Product/ProductPolicy";
import Footer from "../components/Footer/Footer";
import FormBooking from "../components/Booking/FormBooking";
import CalendarBooking from "../components/Booking/CalendarBooking";
import CheckInCheckOut from "../components/Booking/CheckInCheckOut";
import Success from "./Success";
import styles from "../styles/booking/booking.module.css";

const Booking = () => {
  const urlBase = useContext(UrlContext);
  const { user } = useContext(UserContext);
  const id = user[3];
  const { idP } = useContext(ProductContext);
  const { productData, productCategoryData, productCityData } =
    useContext(ProductContext);
  const [dateRangeN, setDateRangeN] = useState([null, null]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /* /bookings */

  const reserva = {
    initial_date: dateRangeN[0],
    final_date: dateRangeN[1],
    user: {
      id: id,
    },
    product: {
      id: idP,
    },
  };

  const [reservaExitosa, setReservaExitosa] = useState(false);
  const [isCity, setIsCity] = useState("");
  const [isCheckIn, setIsCheckIn] = useState(false);
  const [clickBooking, setClickBooking] = useState(false);

  return (
    <div className={styles.bg}>
      <Header />

      <div>
        <ProductHeader
          name={productData.name}
          category={productCategoryData.title}
        />
        <div className={styles.bookingGrid}>
          <div className={styles.bookingSetupColumn}>
            <FormBooking
              user={user}
              isCity={isCity}
              setIsCity={setIsCity}
              clickBooking={clickBooking}
              setClickBooking={setClickBooking}
            />
            <CalendarBooking
              setDateRangeN={setDateRangeN}
              productData={productData}
            />
            <CheckInCheckOut
              productData={productData}
              isCheckIn={isCheckIn}
              setIsCheckIn={setIsCheckIn}
              clickBooking={clickBooking}
              setClickBooking={setClickBooking}
            />
          </div>
          <div className={styles.bookingDetailsColumn}>
            <DetalleReserva
              name={productData.name}
              category={productCategoryData.title}
              city={productCityData.name}
              prov={productCityData.province}
              country={productCityData.country}
              productImages={productData.images}
              dateRangeN={dateRangeN}
              reserva={reserva}
              setReservaExitosa={setReservaExitosa}
              urlBase={urlBase}
              isCity={isCity}
              setClickBooking={setClickBooking}
              isCheckIn={isCheckIn}
            />
          </div>
        </div>
        <ProductPolicy
          healthAndSafety={productData.healthAndSafety}
          houseRules={productData.houseRules}
          cancellation={productData.cancellationPolicy}
        />
      </div>

      {reservaExitosa && (
        <Success
          message1="¡Muchas Gracias!"
          message2="Su reserva se ha realizado con éxito"
          messageButton="Ok"
        />
      )}

      {/* )} */}
      <Footer />
    </div>
  );
};

export default Booking;
