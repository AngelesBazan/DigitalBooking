import React, { useState } from "react";
import { useContext } from "react";
import { UrlContext } from "../contexts/UrlContext";
import Success from "./Success";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import FormAdmin from "../components/Admin/FormAdmin";
import ProductHeader from "../components/Product/ProductHeader";
import styles from "../styles/admin/admin.module.css";

const Admin = () => {
  const {urlBase} = useContext(UrlContext);
  const [displayNotification, setDisplayNotification] = useState(false);
  const [city, setCity] = useState(null);
  const [category, setCategory] = useState(null);

  const showNotif = () => setDisplayNotification(true);

  return (
    <div className={styles.bg}>
      <Header />
      <ProductHeader name="Administración de productos" />
      <FormAdmin
        selectedCity={city}
        setSelectedCity={setCity}
        urlBase={urlBase}
        selectedCategory={category}
        setSelectedCategory={setCategory}
        showNotification={showNotif}
      />
      <Footer />
      {displayNotification && (
        <Success
          message2="Su propiedad se ha creado con éxito"
          messageButton="Volver"
        />
      )}
    </div>
  );
};

export default Admin;
