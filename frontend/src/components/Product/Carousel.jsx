import React, { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../styles/carousel.css";
import styles from "../../styles/product/product.module.css";

function Carrousel({ clicked, handleClick, productImages }) {

  useEffect(() => {
    if (clicked) {
      window.scrollTo(0, 0)
      document.body.style.overflow = "hidden";
    } else if (!clicked) {
      document.body.style.overflow = "unset";
    }
  }, [clicked]);

  return (
    <div className={`block-carrousel-container ${clicked ? "show" : "hide"}`}>
      <div className="carousel-container-with-close">
        <div onClick={handleClick}>
          <FontAwesomeIcon icon={faXmark} className="fa-2xl x-form back close-carousel" />
        </div>
        <Carousel
          autoPlay
          infiniteLoop
          showArrows={true}
          showIndicators={false}
          showStatus={true}
          interval={3000}
          showThumbs={true}
          thumbWidth={126}
          className="carousel-container"
          statusFormatter={(currentItem, total) => `${currentItem}/${total}`}
        >
          {productImages != null && productImages/* .slice(1, 6) */.map((e) => (
            <img className="img-ind" key={e.id} src={e.urlImage} alt={e.title} />
          ))}

          {/* {productImages != null && productImages.slice(6, 11).map((e) => (
          <img className="img-ind img-carousel-dektop" key={e.id} src={e.urlImage} alt={e.title}/>
        ))} */}
        </Carousel>
      </div>
    </div>
  );
}
export default Carrousel;