import axios from "axios";

export const fetchProductData = async (urlBase, idP, setProductData) => {
    try{
      const resp = await axios.get(`${urlBase}/products/${idP}`);
      setProductData(resp.data);
    } catch (error) {
      console.warn(error)
    }
};