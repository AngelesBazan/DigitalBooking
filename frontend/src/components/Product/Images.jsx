import styles from "../../styles/product/product.module.css";
import "../../styles/carousel.css";

const Images = ({ handleClick, productImages }) => {
  return (
    <div className={styles.containerImages}>
      {productImages != null ? (
        <div
          key="main"
          className={styles.principalImg}
          style={{
            backgroundImage: `url(${
              productImages.find((elem) => elem.title == "main").urlImage
            })`,
          }}
        ></div>
      ) : (
        ""
      )}
      <div className={styles.blockRight}>
        {productImages != null
          ? productImages
              .filter((el) => el.title != "main")
              .map((elem, i) => {
                if (i < 4) {
                  return (
                    <div
                      key={i}
                      className={styles.secondImg}
                      style={{ backgroundImage: `url(${elem.urlImage})` }}
                    ></div>
                  );
                }
              })
          : ""}
        <div className={styles.backgroundButton}>
          <button onClick={handleClick} className={styles.seeMore}>
            Ver más
          </button>
        </div>
      </div>
    </div>
  );
};

export default Images;
