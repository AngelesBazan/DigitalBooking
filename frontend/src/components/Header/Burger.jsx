import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useUser } from "../Login-Register/useUser";
import BurgerHeader from "./BurgerHeader";
import BurgerMain from "./BurgerMain";
import BurgerFooter from "./BurgerFooter";
import "../../styles/header/burger.css";

const Burger = ({ page }) => {

  const [clicked, setClicked] = useState(false);
  const { logout } = useUser();
  const { user, logged } = useContext(UserContext);

  const handleClick = () => {
    setClicked(!clicked);
  };
  const closeMenu = () => {
    setClicked(false);
  };

  useEffect(() => {
    if (clicked) {
      document.body.style.overflow = "hidden";
    } else if (!clicked) {
      document.body.style.overflow = "unset";
    }
  }, [clicked]);

  return (
    <div>
      <div onClick={handleClick} className={`bars ${clicked ? "ocultar" : ""}`}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className={`${clicked ? "opacity" : "none"}`}></div>
      <div className={`open-menu ${clicked ? "" : "ocultar"}`}>
        <BurgerHeader user={user} logged={logged} closeMenu={closeMenu} />
        <BurgerMain page={page} user={user} logged={logged} logout={logout} />
        <BurgerFooter/>
      </div>
    </div>
  );
};

export default Burger;
