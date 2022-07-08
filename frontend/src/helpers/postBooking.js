export const postBooking = async (urlBase, reserva, setReservaExitosa, setErrorBooking) => {
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
        const response = await fetch(`${urlBase}/bookings`, options);
        console.log(response);
        if(response.status === 201){
            const data = await response.json();
            console.log(data);
            await setReservaExitosa(true);
            await setErrorBooking(false)
        } else if(response.status === 500) {
            console.log("entra al error")
            await setErrorBooking(true)
        }
        // debería mostrar pop up reserva exitosa

    } catch(error) {
        console.warn(error)
    }
}