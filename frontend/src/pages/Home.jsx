import React, { useEffect, useState, useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { UrlContext } from "../contexts/UrlContext";
import Header from "../components/Header/Header";
import Cards from "../components/Cards";
import Categories from "../components/Categories";
import Footer from "../components/Footer/Footer";
import SearchBar from "../components/SearchBar/SearchBar";
import { fetchAll } from "../helpers/get";
import ReactPaginate from "react-paginate";
import "../styles/home.css";
import { SearchContext } from "../contexts/SearchContext";

const Home = () => {
  const { urlBase } = useContext(UrlContext);

  const { idP, setIdP, setIsRedirect, setShowMap, lastProduct, setLastProduct } = useContext(ProductContext);

  const [categoriesData, setCategoriesData] = useState([]);
  const [category, setCategory] = useState("");
  const [city, setCity] = useState(null);

  const [filtersCleared, setFiltersCleared] = useState(false);
  const { searchCity, setSearchCity, searchCategory, setSearchCategory, searchDate, setSearchDate, searchCheckin, searchCheckout, products, setProducts, filterByCategory, filterByDateAndCity, filterDateCityCategory, filterByCityAndCategory, filterByDateAndCategory } = useContext(SearchContext);
  const [hideClass, setHideClass] = useState("");

 /*  useEffect(() => {
    if(category != "") {
      const endpoint=`productsview/category/${category}`
      fetchAll(urlBase, endpoint, setProducts);
    }
    // eslint-disable-next-line
  }, [category]); */

  useEffect(() => {
    fetchAll(urlBase,"categories", setCategoriesData);
    fetchAll(urlBase, "productsview", setProducts);
    setIsRedirect(false);
    setIdP();
    // eslint-disable-next-line
  }, []);

  const productsPerPage = 4;
  const [pageNumber, setPageNumber] = useState(0);
  const pageCount = Math.ceil(products.length / productsPerPage);
  const pagesVisited = pageNumber * productsPerPage;
  const changePage = ({ selected }) => setPageNumber(selected);

/* 
  useEffect(() => {
    fetchAll(urlBase, "categories", setCategoriesData);
    fetchAll(urlBase, "productsview", setProducts);
    setIsRedirect(false);
    setIdP();
    // eslint-disable-next-line
  }, []); */

  useEffect(() => {
    if (searchCategory && (!searchCity && !searchDate)) {
      filterByCategory();
      console.log("filterByCategory");

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
    console.log(searchCategory);
    // eslint-disable-next-line
  }, [searchCategory]);

  const changeCategory = (value) => {
    if (value !== category) {
      setCategory(value);
      setSearchCategory(value);
    } else {
      setCategory("");
      setSearchCategory("");
    }
  };

  const filterTitle = () => {
    if (searchCategory && searchCity === "" && searchDate === "") {
      return `${searchCategory}`;
    } else if (searchCity && searchCategory === "" && searchDate === "") {
      return `${searchCity}`;
    } else if (searchDate && searchCity === "" && searchCategory === "") {
      return `${searchCheckin} - ${searchCheckout}`;
    } else if (searchCategory && searchCity && searchDate === "") {
      return `${searchCategory} > ${searchCategory} en ${searchCity}`;
    } else if (searchCategory && searchCity === "" && searchDate) {
      return `${searchCategory} > ${searchCheckin} - ${searchCheckout}`;
    } else if (searchCategory === "" && searchCity && searchDate) {
      return `${searchCity} > ${searchCheckin} - ${searchCheckout}`;
    } else if (searchCategory && searchCity && searchDate) {
      return `${searchCategory} > ${searchCity} > ${searchCheckin} - ${searchCheckout}`;
    } else {
      return ``;
    }
  };

  useEffect(() => {
    const hideDiv = () => {
      if (searchCategory !== "" || searchCity !== "" || searchDate !== "") {
        return "filters";
      } else {
        return "filters hide";
      }
    };

    setHideClass(hideDiv());
    // eslint-disable-next-line
  }, [products]);

  useEffect(() => {
    setFiltersCleared(false);
     
    const productsIds = products.map( e => e.id );
    console.log(productsIds);
    setLastProduct( Math.max( ...productsIds) )
    console.log(lastProduct);

    // eslint-disable-next-line
  }, [products])

  useEffect(() => {
    setCity(null);
    setCategory("");

    setSearchCity("");
    setSearchCategory("");
    setSearchDate("");

    fetchAll(urlBase, "productsview", setProducts);
    // eslint-disable-next-line
  }, [filtersCleared]);

  return (
    <>
      <div className="header-home">
        <Header
          page={"home"}
        />
      </div>
      <div className="main">
        <SearchBar
          selectedCity={city}
          setSelectedCity={setCity}
        />
        <div className="categories-container">
          <h2>Buscar por tipo de alojamiento</h2>
          <div className="categos">
            {categoriesData.map((e) => (
              <Categories
                key={e.id}
                category={e.title}
                crimg={e.urlImage}
                productsQuantity={e.productsQuantity}
                changeCategory={changeCategory}
                currentCategory={category}
              />
            ))}
          </div>
        </div>
        <div className="suggestion" name="suggestion">
          <h2>{category == "" ? searchCity == "" ? searchDate == "" ? "Recomendaciones" : "" : "" : ""}</h2>
          <div
            className={hideClass}>
            <h4 className="breadcrumbs">{filterTitle()}</h4>
            <h4 className="clean-filters" onClick={() => setFiltersCleared(true)}>Limpiar filtros</h4>
          </div>
          <div className="card-container">
            {console.log(products)}
            {products
            .slice(pagesVisited, pagesVisited + productsPerPage)
            .map((e) => {
              return <Cards product={e} key={e.id} idP={idP} setIdP={setIdP} setShowMap={setShowMap} />;
            })}
          </div>
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"pagination-buttons"}
            previousLinkClassName={"previous-button"}
            nextLinkClassName={"next-button"}
            disabledClassName={"pagination-disabled"}
            activeClassName={"pagination-active"}
          />
        </div>
        <div className="footer-home">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
