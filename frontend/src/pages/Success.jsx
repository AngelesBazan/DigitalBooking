import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/success.module.css";
import img from "../images/jj.png";
import { useState, useEffect } from "react";

const cstyles = {
  page: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1,
  },
  modal: {
    position: "absolute",
    zIndex: "99999999999",
  },
};

const Success = ({ message1, message2, messageButton }) => {
  const navigate = useNavigate();
  const goHome = () => navigate("/");

  const [isDisplayed, setIsDisplayed] = useState(true);

  useEffect(() => {
    if (isDisplayed) {
      document.body.style.overflow = "hidden";
    } else if (!isDisplayed) {
      document.body.style.overflow = "unset";
    }
  }, []);

  return (
    <div style={cstyles.page}>
      <div className={styles.container} style={cstyles.modal}>
        <div>
          <img src={img} className={styles.sccss} alt="img"></img>
          {message1 && <h2 className={styles.h2}>{message1} </h2>}
          <p className={styles.p}>{message2}</p>
          <Link
            to="/"
            className={`${styles.button} ${styles.buttonSuccess}`}
            onClick={goHome}
          >
            {messageButton}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Success;
