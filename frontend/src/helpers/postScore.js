export const postScore = async (urlBase, reserva, setReservaExitosa) => {
    let token = localStorage.getItem('jwt');
    const options = {
        method: 'POST',
        body: JSON.stringify(reserva),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }

    try { 
        const response = await fetch(urlBase, options);
        const data = await response.json();
        await setReservaExitosa(true);
        // debería mostrar pop up reserva exitosa

    } catch(error) {
        console.warn(error)
    }
}