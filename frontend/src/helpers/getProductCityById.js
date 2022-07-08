import axios from "axios";

export const fetchCityData = async (urlBase, idP, setProductCityData) => {
    try{
      const resp = await axios.get(`${urlBase}/products/${idP}`);
      setProductCityData(resp.data.city);
    } catch (error) {
      console.warn(error)
    }
};