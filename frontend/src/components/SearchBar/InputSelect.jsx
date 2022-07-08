import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Select from 'react-select';
import axios from 'axios';
import '../../styles/searchbar/inputSelect.css'
import { useContext } from 'react';
import { SearchContext } from '../../contexts/SearchContext';
import { UrlContext } from '../../contexts/UrlContext';

/* const urlBase = "http://backendapiad-env.eba-smbq5rj2.us-east-1.elasticbeanstalk.com" */
//const urlBase = 'http://apibackendg1c1-env.eba-f63kvump.us-east-1.elasticbeanstalk.com';
const customStyles = {
    container: (provided) => ({
        width: '100%',
        fontSize: '1rem',
        "@media (min-width: 768px)": {
            ...provided["@media (min-width: 768px)"],
            marginRight: '.3rem'
        }
    }),
    control: (provided, state) => ({
        ...provided,
        height: '40px',
        border: state.isSelected ? 'none' : 'none',
        outline: state.isFocused ? 'none' : 'none',
        boxShadow: state.isFocused ? 'none' : 'none',
        cursor: 'pointer',
    }),
    menu: () => ({
        backgroundColor: 'var(--primary-color)',
        borderRadius: '0px 0px 5px 5px',
        boxShadow: '0px 4px 4px 0px #00000040',
        padding: '5px 0px',
        marginTop: '1px',
    }),
    option: (provided, state) => ({
        ...provided,
        borderBottom: '1px solid var(--secondary-color)',
        height: '60px',
        display: 'flex',
        backgroundColor:
            state.isSelected
                ? 'white'
                : state.isFocused
                    ? 'var(--color-1)'
                    : undefined,
        borderRadius: state.isSelected ? 'inherited' : 'none',
        cursor: 'pointer',
        /* "&:active": {
            backgroundColor: "#7cc3be",
        }, */
        "&:hover": {
            backgroundColor: "#7cc3be",
        }
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
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
    }),
    singleValue: (provided, state) => ({
        ...provided,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end'
    }),
    menuPortal: base => ({
        ...base,
        position: 'absolute',
        zIndex: 1
    })
}

const InputSelect = ({ selectedCity, setSelectedCity }) => {
    const { urlBase } = useContext(UrlContext);
    const { searchCity, setSearchCity } = useContext(SearchContext);
    const [cities, setCities] = useState([])

    const handleChange = (e) => {
         if (e != null) {
            setSelectedCity(e.value);
        } 
        setSearchCity(e.value);
    };
 
    useEffect(() => {
        setSelectedCity(selectedCity);
        setSearchCity(selectedCity);
    }, [selectedCity]); 

    useEffect(() => {
        const fetchCities = async () => {
            try {
                const resp = await axios.get(`${urlBase}/cities`);
                setCities(resp.data);
            } catch (error) {
                console.warn(error);
            };
        };
        fetchCities();
    }, [])

    const options = cities.map((elem, id) => {
        return {
            value: elem.name,
            label: (
                <div className={`cities-list ${id === cities.length - 1 && 'no-border'}`} >
                    <FontAwesomeIcon className='icon-list' icon={faLocationDot} />
                    <div className='list-item'>
                        <h4>{`${elem.name}`}</h4>
                        <p>{elem.country}</p>
                    </div>
                </div>
            )
        };
    });

    return (
        <div className="select-container">
            <Select
                className='select'
                placeholder={
                    < div className='placeholder' >
                        <FontAwesomeIcon className='icon-select' icon={faLocationDot} />
                        ¿A dónde vamos?
                    </div >
                }
                styles={customStyles}
                options={options}
                value={searchCity}
                onChange={handleChange}
                components={{
                    DropdownIndicator: () => null,
                    IndicatorSeparator: () => null,
                }}
                //isClearable
                menuPosition="fixed"
                
            />
        </div>
    )
}

export default InputSelect;