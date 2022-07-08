import axios from "axios";

export const fetchCategoryData = async (urlBase, idP, setProductCategoryData) => {
    try{
      const resp = await axios.get(`${urlBase}/products/${idP}`);
      setProductCategoryData(resp.data.category);
    } catch (error) {
      console.warn(error)
    }
};