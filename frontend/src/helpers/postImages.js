export const postImages = async (urlBase, img, setSuccessProduct) => {
    let token = localStorage.getItem('jwt');

    const options = {
        method: 'POST',
        body: JSON.stringify(img),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }

    console.log(img);

    try { 
        const response = await fetch(`${urlBase}/images`, options);
        const data = await response.json()
        
        console.log(response);
        console.log(data);

        if(response.status === 200){
            setSuccessProduct(true);
        } else {
            setSuccessProduct(false);
            // "Lamentablemente no se han podido guardar las imágenes. Por favor intente más tarde"
        }

    } catch(error) {
        console.warn(error);
    }
}