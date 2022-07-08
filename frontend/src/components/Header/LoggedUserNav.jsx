import React from "react";
import { useUser } from "../Login-Register/useUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/header/header.module.css";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Link } from "react-router-dom";
import swal from "sweetalert2";

const LoggedUserNav = ({ user }) => {

  const { logout } = useUser();
  const [name, lastname] = user;
  const { admin } = useContext(UserContext);

  const handleLogout = () => {
    document.body.style.overflow = "hidden";

    const swalWithBootstrapButtons = swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: '¿Estás seguro que deseas cerrar sesión?',
      showCancelButton: true,
      confirmButtonText: 'Cerrar sesión',
      cancelButtonText: 'Seguir logueado',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        logout()
        document.body.style.overflow = "unset";
      } else {
        document.body.style.overflow = "unset";
      }
    })
  }

  return (
    <div className={styles.blockUser}>
      {
        admin ?
          <div className={styles.userAdmin}>
            <Link to="/admin">
              <h3>Administración</h3>
            </Link>
          </div> : ""
      }

      {name ?
        <>
          <div className={styles.avatar}>
            {user.length > 0 ? name.charAt(0).toUpperCase() + lastname.charAt(0).toUpperCase() : ""}
          </div>
          <div className={`${styles.userHeader} user-header-desktop`}>
            <p>Hola,</p>
            <p className={styles.userlogHeader}>{name + ' ' + lastname}</p>
            <FontAwesomeIcon
              icon={faXmark}
              className={`${styles.blockUser} ${styles.faL}`}
              onClick={handleLogout}
            />
          </div></> :

        <>
          <div className={styles.avatarSkeleton}>
            {user.length > 0 ? name.charAt(0).toUpperCase() + lastname.charAt(0).toUpperCase() : ""}
          </div>
          <div className={`${styles.userHeader} user-header-desktop`}>
            <p>Hola,</p>
            <p className={styles.userlogHeaderAvatar}>Rol Administrador</p>
            <FontAwesomeIcon
              icon={faXmark}
              className={`${styles.blockUser} ${styles.faL}`}
              onClick={logout}
            />
          </div>
        </>}

    </div>
  );
};

export default LoggedUserNav;
