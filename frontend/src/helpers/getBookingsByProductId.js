import axios from "axios";

export const fetchBookingsByProductId = async (url, setBookings) => {
    /* const urlBase = "http://localhost:8080"; */
    try {
        const resp = await axios.get(`${url}`);
        await setBookings(resp.data)
    } catch (error) {
        console.warn(error)
    }
};