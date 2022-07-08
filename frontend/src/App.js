import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import Product from './pages/Product';
import Booking from './pages/Booking';
import Success from './pages/Success';
import Admin from './pages/Admin';
import { ProductContext } from './contexts/ProductContext';
import UrlProvider, { UrlContext } from './contexts/UrlContext';
import { UserContext } from './contexts/UserContext';
import { useState, useEffect, useContext } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import './App.css';
import { fetchUser } from './helpers/getUser';
import jwt_decode from "jwt-decode";
import SearchProvider from './contexts/SearchContext';


function App() {

  const [idP, setIdP] = useState();
  const [productData, setProductData] = useState([]);
  const [productCityData, setProductCityData] = useState([]);
  const [productCategoryData, setProductCategoryData] = useState([]);
  const [position, setPosition] = useState([]);
  const [products, setProducts] = useState([]);

  const [isRedirect, setIsRedirect] = useState(false);
  const [badCredentials, setBadCredentials] = useState(false);
  const [errorLogin, setErrorLogin] = useState(false);
  const [errorRegister, setErrorRegister] = useState(false);
  const [goToBooking, setGoToBooking] = useState(false);
  const [emailExist, setEmailExist] = useState(false);
  const [user, setUser] = useState([]);
  const [admin, setAdmin] = useState(false);
  const [ showMap, setShowMap ] = useState(false);
  const [ lastProduct, setLastProduct ] = useState('');

  const isToken = localStorage.getItem("jwt") != null
  const [logged, setLogged] = useState(isToken);

  const urlBase = 'http://apibackendg1c1-env.eba-f63kvump.us-east-1.elasticbeanstalk.com';


  useEffect(() => {
    if (isToken) {
      const token = localStorage.getItem("jwt");
      const decoded = jwt_decode(token);
      fetchUser(urlBase, decoded.sub, setUser, setLogged, setAdmin)
    }
    // eslint-disable-next-line
  }, []);


  const iconList = Object.keys(Icons)
    .filter((key) => key !== 'fas' && key !== 'prefix')
    .map((icon) => Icons[icon]);

  library.add(...iconList);

  return (
    <UrlProvider>
      <UserContext.Provider value={{ logged, setLogged, user, setUser, badCredentials, setBadCredentials, errorLogin, setErrorLogin, errorRegister, setErrorRegister, emailExist, setEmailExist, admin, setAdmin }}>
        <ProductContext.Provider value={{ idP, setIdP, productData, setProductData, productCityData, setProductCityData, productCategoryData, setProductCategoryData, isRedirect, setIsRedirect, goToBooking, setGoToBooking, position, setPosition, showMap, setShowMap, lastProduct, setLastProduct, products, setProducts }} >
        <SearchProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/:category/:id" element={<Product />} />
              <Route path="/:category/:id/reserva" element={<Booking />} />
              <Route path="*" element={<ErrorPage />} />
              <Route path="/success" element={<Success/>}/>
              <Route path="/admin" element={<Admin/>} />
            </Routes>
          </Router>
        </SearchProvider>
        </ProductContext.Provider>
      </UserContext.Provider>
    </UrlProvider>
  );
}

export default App;
