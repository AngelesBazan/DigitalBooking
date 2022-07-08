import { createContext, useState } from "react";
import moment from 'moment';
import axios from 'axios';
import { useContext } from "react";
import { UrlContext } from "./UrlContext";

export const SearchContext = createContext();

const SearchProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    
    const [searchCity, setSearchCity] = useState("");
    const [searchDate, setSearchDate] = useState("");
    const [searchCategory, setSearchCategory] = useState("");

    const { urlBase } = useContext(UrlContext);

    let searchCheckin = moment(searchDate[0]).format().slice(0, 10);
    let searchCheckout = moment(searchDate[1]).format().slice(0, 10);

    const filterByDate = async () => {
        const resp = await axios.get(`${urlBase}/productsview/dates/${searchCheckin}/${searchCheckout}`);
        setProducts(resp.data);
    }

    const filterByCity = async () => {
        const resp = await axios.get(`${urlBase}/productsview/city/${searchCity}`);
        setProducts(resp.data);
    }

    const filterByCategory = async () => {
        const resp = await axios.get(`${urlBase}/productsview/category/${searchCategory}`);
        setProducts(resp.data);
    }

    const filterByDateAndCity = async () => {
        const resp = await axios.get(`${urlBase}/productsview/dates/${searchCheckin}/${searchCheckout}/city/${searchCity}`);
        setProducts(resp.data);
    }

    const filterDateCityCategory = async () => {
        const resp = await axios.get(`${urlBase}/productsview/dates/${searchCheckin}/${searchCheckout}/city/${searchCity}/category/${searchCategory}`);
        setProducts(resp.data);
    }

    const filterByCityAndCategory = async () => {
        const resp = await axios.get(`${urlBase}/productsview/city/${searchCity}/category/${searchCategory}`);
        setProducts(resp.data);
    }

    const filterByDateAndCategory = async () => {
        const resp = await axios.get(`${urlBase}/productsview/dates/${searchCheckin}/${searchCheckout}/category/${searchCategory}`);
        setProducts(resp.data);
    }


    return (
        <SearchContext.Provider value={{ searchCity, setSearchCity, searchCategory, setSearchCategory, searchDate, setSearchDate, searchCheckin, searchCheckout, products, setProducts, filterByDate, filterByCity, filterByCategory, filterByDateAndCity, filterDateCityCategory, filterByCityAndCategory, filterByDateAndCategory }}>
            {children}
        </SearchContext.Provider>
    )
}

export default SearchProvider;