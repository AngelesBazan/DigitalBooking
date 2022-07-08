import React from "react";
import Select from 'react-select';
import styles from "../../styles/admin/admin.module.css";

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
  container: () => ({
    position: "relative",
    width: '100%',
    padding: '4px 0px'
  }),
  placeholder: (provided) => ({
    ...provided,
    color: '#7d7777'
  }),
  option: (provided, state) => ({
    ...provided,
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
    color: '#fff',
  }),
  control: (provided, state) => ({
    ...provided,
    border: state.isSelected ? 'none' : 'none',
    outline: state.isFocused ? 'none' : 'none',
    boxShadow: state.isFocused ? 'none' : 'none',
    cursor: 'pointer',
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: 'var(--primary-color)',
    borderRadius: '0px 0px 5px 5px',
    boxShadow: '0px 4px 4px 0px #00000040',
    padding: '5px 0px',
    marginTop: '1px',
    zIndex: 1
  }),
  menuList: () => ({
    display: 'flex',
    flexDirection: 'column',
    height: 'fit-content',
    maxHeight: '215px',
    overflowY: 'scroll',
    scrollbar: 'smooth',
    "::-webkit-scrollbar": {
      display: 'none'
    },
    zIndex: 1
  }),
  singleValue: (provided) => ({
    ...provided,
    color: 'var(--color-2)'
  })
}

const SelectCheckIn = ({ title, setSelectedCheckin, selectedCheckin}) => {

  const handleChange = (e) => {
    if (e != null) {
      if(selectedCheckin.length < 2 ){
        setSelectedCheckin([...selectedCheckin, e.hour])
      } /* else{
        setSelectedCheckin([''])
        setSelectedCheckin([...selectedCheckin, e.hour])
      } */
    }
  }

  return (
    <div className={styles.input} style={{ padding: '0px', fontWeight: '400' }} >
        <Select
            options={options}
            styles={customStyles}
            menuPosition="absolute"
            menuPlacement="auto"
            onChange={handleChange}
            components={{
                IndicatorSeparator: () => null
            }}
            placeholder={title}
        />
    </div>
  );
};

export default SelectCheckIn;
