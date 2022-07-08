import React, { useState, useEffect, useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { UrlContext } from "../contexts/UrlContext";
import Header from "../components/Header/Header";
import ProductHeader from "../components/Product/ProductHeader";
import Ubication from "../components/Product/Ubication";
import Footer from "../components/Footer/Footer";
import Description from "../components/Product/Description";
import Characteristic from "../components/Product/Characteristic";
import ProductPolicy from "../components/Product/ProductPolicy";
import CalendarProduct from "../components/Product/CalendarProduct";
import Images from "../components/Product/Images";
import Carrousel from "../components/Product/Carousel";
import { fetchProductData } from "../helpers/getProductById";
import { fetchCityData } from "../helpers/getProductCityById";
import { fetchCategoryData } from "../helpers/getProductCategoryById";
import styles from "../styles/product/product.module.css";
import "../styles/product/imagesStyle.css";
import "../styles/carousel.css";
import Maps from "../components/Product/Maps";
import ShareProduct from "../components/Product/ShareProduct"



function Product() {
  const { urlBase } = useContext(UrlContext);
  const { idP, productData, setProductData, productCityData, setProductCityData, productCategoryData, setProductCategoryData, setIsRedirect, showMap, setShowMap } = useContext(ProductContext);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    /* if(!idP){
      setIdP(localStorage.getItem('productId'))
      
    }  */
    fetchProductData(urlBase, idP, setProductData);
    fetchCityData(urlBase, idP, setProductCityData);
    fetchCategoryData(urlBase, idP, setProductCategoryData);

    if (showMap) {
      window.scrollTo(0, 1645);
    } else {
      window.scrollTo(0, 0);
    }
    setShowMap(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="product-page">
      <Header />
      <ProductHeader
        name={productData.name}
        category={productCategoryData.title}
      />

      <Ubication
        city={productCityData.name}
        prov={productCityData.province}
        country={productCityData.country}
      />
      {/* <ShareProduct productCategoryData={productCategoryData} productData={productData} /> */}
      <div className={styles.blockImgCar}>
        <Images
          clicked={clicked}
          handleClick={handleClick}
          productImages={productData.images}
        />
        <Carrousel
          clicked={clicked}
          handleClick={handleClick}
          productImages={productData.images}
        />
      </div>
      <Description description={productData.description} />
      <Characteristic characteristics={productData.characteristics} />
      <CalendarProduct urlBase={urlBase} setIsRedirect={setIsRedirect} productData={productData} />
      <Maps city={productData.city} latitude={productData.latitude} longitude={productData.longitude} idP={idP} />
      <ProductPolicy
        healthAndSafety={productData.healthAndSafety}
        houseRules={productData.houseRules}
        cancellation={productData.cancellationPolicy}
      />
      <Footer />
    </div>
  );
}

export default Product;
