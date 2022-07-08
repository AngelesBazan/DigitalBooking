import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import Select from 'react-select';
import styles from "../../styles/booking/booking.module.css";
import "../../styles/booking/detalleReservaStyle.css"

const options = [
  { value: "1", label: '01:00 AM', hour: '01:00:00' },
  { value: "2", label: '02:00 AM', hour: '02:00:00' },
  { value: "3", label: '03:00 AM', hour: '03:00:00' },
  { value: "4", label: '04:00 AM', hour: '04:00:00' },
  { value: "5", label: '05:00 AM', hour: '05:00:00' },
  { value: "6", label: '06:00 AM', hour: '06:00:00' },
  { value: "7", label: '07:00 AM', hour: '07:00:00' },
  { value: "8", label: '08:00 AM', hour: '08:00:00' },
  { value: "9", label: '09:00 AM', hour: '09:00:00' },
  { value: "10", label: '10:00 AM', hour: '10:00:00' },
  { value: "11", label: '11:00 AM', hour: '11:00:00' },
  { value: "12", label: '12:00 PM', hour: '12:00:00' },
  { value: "13", label: '01:00 PM', hour: '13:00:00' },
  { value: "14", label: '02:00 PM', hour: '14:00:00' },
  { value: "15", label: '03:00 PM', hour: '15:00:00' },
  { value: "16", label: '04:00 PM', hour: '16:00:00' },
  { value: "17", label: '05:00 PM', hour: '17:00:00' },
  { value: "18", label: '06:00 PM', hour: '18:00:00' },
  { value: "19", label: '07:00 PM', hour: '19:00:00' },
  { value: "20", label: '08:00 PM', hour: '20:00:00' },
  { value: "21", label: '09:00 PM', hour: '21:00:00' },
  { value: "22", label: '10:00 PM', hour: '22:00:00' },
  { value: "23", label: '11:00 PM', hour: '23:00:00' },
  { value: "0", label: '12:00 PM', hour: '24:00:00' },
]

const customStyles = {
  container: (provided) => ({
    position: "relative",
    width: '100%',


    "@media (min-width: 768px)": {
      ...provided["@media (min-width: 768px)"],
      width: '50vw'
    },
    "@media (min-width: 1024px)": {
      ...provided["@media (min-width: 1024px)"],
      width: '25vw'
    }
  }),
  placeholder: (provided) => ({
    ...provided,
    color: '#c7cbcf'
  }),
  option: (provided, state) => ({
    ...provided,

    fontWeight: '800',
    backgroundColor:
      state.isSelected
        ? 'var(--secondary-color)'
        : state.isFocused
          ? 'var(--color-1)'
          : undefined,
    "&:hover": {
      backgroundColor: "#7cc3be",



    }
  }),
  dropdownIndicator: provided => ({
    ...provided,
    color: 'var(--secondary-color)',

  }),
  control: (provided, state) => ({
    ...provided,

    /* border: state.isSelected ? 'none' : 'solid 1px #DFE4EA', */
    outline: state.isFocused ? 'none' : 'none',
    boxShadow: state.isFocused ? 'none' : 'none',
    cursor: 'pointer',
    "&:hover": {
      outline: "none",
    }
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: 'var(--primary-color)',
    borderRadius: '0px 0px 5px 5px',
    boxShadow: '0px 4px 4px 0px #00000040',
    padding: '5px 0px',
    marginTop: '1px',
    zIndex: 1,


  }),
  menuList: () => ({
    display: 'flex',
    flexDirection: 'column',
    height: 'fit-content',
    maxHeight: '215px',
    overflowY: 'scroll',
    scrollbar: 'smooth',
    "::-webkit-scrollbar": {
      display: 'none',
    },
    msOverflowStyle: 'none',
    scrollbarWidth: 'none',
    zIndex: 1
  }),
  singleValue: (provided) => ({
    ...provided,
    color: 'var(--color-2)',

  })
}

const CheckInCheckOut = ({ productData, isCheckIn, setIsCheckIn, clickBooking, setClickBooking }) => {
  const filteredOptions = options.filter(elem => elem.hour >= productData.checkinStart && elem.hour <= productData.checkinEnd);

  const checkInStart = productData.checkinStart == '12:00:00' ? productData.checkinStart?.split(":")[0] + ":00 PM" : productData.checkinStart < '12:00:00' ? productData.checkinStart?.split(":")[0] + ":00 AM" : productData.checkinStart?.split(":")[0] - 12 + ":00 PM"
  const checkInEnd = productData.checkinEnd == '12:00:00' ? productData.checkinEnd?.split(":")[0] + ":00 PM" : productData.checkinEnd < '12:00:00' ? productData.checkinEnd + " AM" : productData.checkinEnd?.split(":")[0] - 12 + ":00 PM"

  const handleChange = (e) => {
    if (e != null) {
      setIsCheckIn(e.value)
    }
};

  return (
    <div className={styles.section}>
      <h2 className={styles.title}>Tu horario de llegada</h2>
      <div className={`${styles.container} ${styles.timeContainer}`}>
        <div>
          <BsFillPatchCheckFill className={styles.iconCheck} />
          <h4>
            {`Tu habitación va a estar lista para el check-in entre las ${checkInStart} y
            las ${checkInEnd}`}
          </h4>
        </div>
        <p>Indicá tu horario estimado de llegada</p>
        <div className={styles.selectBooking}  >
          <Select
            options={filteredOptions}
            styles={customStyles}
            menuPosition="absolute"
            menuPlacement="auto"
            components={{
              IndicatorSeparator: () => null
            }}
            placeholder="Seleccionar hora de llegada"
            outline={true}
            onChange={handleChange}
            className={`${styles.borderRadius} ${clickBooking ? !isCheckIn ? styles.redBorder : styles.greyBorder : styles.greyBorder}`}
          />
          <div className={`${styles.error} ${styles.errorCheckIn}`}>{clickBooking ? isCheckIn ? "" : "El horario de llegada es requerido" : ""}</div>
        </div>
      </div>
    </div>
  );
};

export default CheckInCheckOut;
