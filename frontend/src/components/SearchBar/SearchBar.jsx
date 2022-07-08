import React, { useState } from 'react';
import { UrlContext } from '../../contexts/UrlContext';
import InputSelect from './InputSelect';
import NuevoDatePicker from './NuevoDatePicker'
import TitleSB from './TitleSB';
import Scroller from "../../components/Scroller";
import styles from '../../styles/searchbar/searchBar.module.css'
import { useContext } from 'react';
import { SearchContext } from '../../contexts/SearchContext';
import { fetchAll } from '../../helpers/get';

const SearchBar = ({ selectedCity, setSelectedCity }) => {
    const [dateRange, setDateRange] = useState("");
    const { searchCity, searchCategory,  searchDate, setProducts, filterByDate, filterByCity, filterByCategory, filterByDateAndCity, filterDateCityCategory, filterByCityAndCategory, filterByDateAndCategory } = useContext(SearchContext);

    const { urlBase } = useContext(UrlContext);

    //setSearchDate(dateRange);
    // let checkin = moment(dateRange[0]).format().slice(0, 10);
    // let checkout = moment(dateRange[1]).format().slice(0, 10);

    const filters = () => {
        if (searchCategory && (!searchCity && !searchDate)) {
            filterByCategory();
        } else if (searchCity && (!searchCategory && !searchDate)) {
            filterByCity();
        } else if (searchDate && (!searchCity && !searchCategory)) {
            filterByDate();
        } else if (searchCategory && searchCity && !searchDate) {
            filterByCityAndCategory();
        } else if (searchCategory && !searchCity && searchDate) {
            filterByDateAndCategory();
        } else if (!searchCategory && searchCity && searchDate) {
            filterByDateAndCity();
        } else if (searchCategory && searchCity && searchDate) {
            filterDateCityCategory();
        } else {
            fetchAll(urlBase, "productsview", setProducts);
        }
    }


    return (
        <div className={styles.container}>
            <TitleSB
                text="Busca ofertas en hoteles, casas y mucho más"
            />
            <div className={styles.structure}>
                <InputSelect selectedCity={selectedCity} setSelectedCity={setSelectedCity} />
                <NuevoDatePicker dateRange={dateRange} setDateRange={setDateRange} />
                <Scroller
                    to="suggestion"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className={styles.button}
                >
                    <button className={styles.buttonReal} type='submit' onClick={filters}>
                        Buscar
                    </button>
                </Scroller>
            </div>
        </div>
    )
}
export default SearchBar