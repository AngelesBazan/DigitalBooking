export const fetchUser = async (urlBase, mail, setUser, setLogged, setAdmin) => {

    let token = localStorage.getItem('jwt');
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }
    
    const endpoint = `${urlBase}/users/email/${mail}`;
    try {
        const response = await fetch(endpoint, options);
        const data = await response.json();
        await setUser([data.name, data.lastname, data.username, data.id]);
        
        await setLogged(true);
        await data.roles[0].name === "ADMIN" ? setAdmin(true) : setAdmin(false);
    } catch(error) {
        console.warn(error)
    }
};