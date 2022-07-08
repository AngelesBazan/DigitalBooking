import { postImages } from "./postImages";

export const postProduct = async (urlBase, endpoint, nuevoProducto, setSuccessProduct, images) => {
    let token = localStorage.getItem('jwt');
    
    const options = {
        method: 'POST',
        body: JSON.stringify(nuevoProducto),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }
  
    try {
        const response = await fetch(`${urlBase}/${endpoint}`, options);
        const data = await response.json();
        console.log(data);
    
        if(response.status === 200){
           
            await images.map( img => postImages(urlBase, img, setSuccessProduct));

        } else {
            setSuccessProduct(false);
            // "Lamentablemente el producto no ha podido crearse. Por favor intente más tarde"
        }
        
    } catch (error) {
        console.warn(error)
    };
};
