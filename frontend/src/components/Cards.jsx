import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { IoStarSharp } from "react-icons/io5";
import "../styles/cards.css";

import "font-awesome/css/font-awesome.min.css";
import { useContext } from "react";
import { UrlContext } from "../contexts/UrlContext";

const cstyles = {
  seeMore: { overflowY: "scroll", height: "60px" },
};

const Cards = ({ product, setIdP, setShowMap }) => {
  const [detailProduct, setDetailProduct] = useState(
    product.description.split("/")[0].split(" ").splice(0, 9).join(" ")
  );
  const [seeMore, setSeeMore] = useState(false);

  const handleSeeMore = (show) => {
    if (show) {
      setDetailProduct(product.description.split("/")[0]);
    } else {
      setDetailProduct(
        product.description.split("/")[0].split(" ").splice(0, 9).join(" ")
      );
    }
    setSeeMore(show);
  };

  let toProduct = useNavigate();
  /*let {idP} = useParams();

   const [idParam, setIdParam] = useState(''); */
  const photoHotel = {
    backgroundImage: `url(${product.image})`
  }
  /* console.log(product.images.find( im => im.title === "main").urlImage) */
  /* const [isLoading, setIsLoading] = useState(true); */
  /* const [products, setProducts] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch("http://localhost:8080/products")
          .then((response) => response.json())
          .then((products) => {
            setProducts(products);
            setIsLoading(false);
            console.log(products);
          });

          //console.log(result);
      }
      catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []); */

  //const urlBase = "http://apibackendg1c1-env.eba-f63kvump.us-east-1.elasticbeanstalk.com";
  const { urlBase } = useContext(UrlContext);

  const [characteristics, setCharacteristics] = useState([]);
  useEffect(() => {
    const fetchCharacteristics = async () => {
      try {
        const resp = await axios.get(`${urlBase}/characteristicsview/${product.id}`);
        setCharacteristics(resp.data);
      } catch (error) {
        console.warn(error);
      };
    };
    fetchCharacteristics();
    // eslint-disable-next-line
  }, [])

  /*   if (isLoading) {
      return (
        <div>
          <h1>Cargando...</h1>
        </div>
      );
    } */

  return (
    <>
      <div key={product.id} className="card">
        <div className="photo-card" style={photoHotel}>
          <FontAwesomeIcon icon={faHeart} className="fa-xl heart" />
        </div>
        <div className="text">
          <div className="rating">
            <span>8</span>
            <p>Muy Bueno</p>
          </div>
          <div className="title-hotel">
            <div className="stars">
              <div className="star-hotel">
                <h5>{product?.category.toUpperCase()}</h5>
                <div className='stars-container'>
                  {Array(5).fill().map((elem, i) => <IoStarSharp key={i} className="star" />)}
                </div>
              </div>
            </div>
            <h3>{product.name}</h3>
          </div>
          <div className="info">
            <div>
              <div className="distance-home">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="distance-icon"
                />
                <p>
                  <span onClick={() => { setIdP(product.id); setShowMap(true); toProduct(`/${product.category.replace(/ /g, '').toLowerCase()}/${product.name.replace(/ /g, '').toLowerCase()}`) }}> MOSTRAR EN EL MAPA</span>
                </p>
              </div>
              <div className="characteristics-container">
                {characteristics.map((elem, i) => <FontAwesomeIcon key={i} icon={elem.icon} className="icon-card" />)}
              </div>
            </div>
            <p
              className="description-card mobile"
              style={seeMore ? cstyles.seeMore : {}}
            >
              {detailProduct}

              {detailProduct}
              {!seeMore ? (
                <span onClick={() => handleSeeMore(true)} className="see-more">
                  {" "}
                  más...
                </span>
              ) : (
                <span onClick={() => handleSeeMore(false)} className="see-more">
                  {" "}
                  ver menos.
                </span>
              )}
            </p>
            <p
              className="description-card tablet"
              style={seeMore ? cstyles.seeMore : {}}
            >
              {detailProduct}

              {detailProduct}
              {!seeMore ? (
                <span onClick={() => handleSeeMore(true)} className="see-more">
                  {" "}
                  más...
                </span>
              ) : (
                <span onClick={() => handleSeeMore(false)} className="see-more">
                  {" "}
                  ver menos.
                </span>
              )}
            </p>
            <p
              className="description-card desktop"
              style={seeMore ? cstyles.seeMore : {}}
            >
              {detailProduct}
              {!seeMore ? (
                <span onClick={() => handleSeeMore(true)} className="see-more">
                  {" "}
                  más...
                </span>
              ) : (
                <span onClick={() => handleSeeMore(false)} className="see-more">
                  {" "}
                  ver menos.
                </span>
              )}
            </p>
          </div>
          <div className="more">
            <button onClick={() => { 
              setIdP(product.id); 
              localStorage.setItem('productId', product.id);
              toProduct(`/${product.category.replace(/ /g, '').toLowerCase()}/${product.name.replace(/ /g, '').toLowerCase()}`) }} 
              className="button">ver más</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
