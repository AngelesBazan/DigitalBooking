import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import LoggedUserNavBurger from './LoggedUserNavBurger';

const BurgerHeader = ({ user, closeMenu, logged }) => {
  return (
    <div className="menu">
        <FontAwesomeIcon
            icon={faXmark}
            className="fa-l closeUser"
            onClick={closeMenu}
        />

        {
          logged? <LoggedUserNavBurger user={user}/> : <h4>MENÚ</h4>
        }
    </div>
  )
}

export default BurgerHeader