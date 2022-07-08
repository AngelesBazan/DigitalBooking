import { fetchUser } from './getUser';

export const fetchLogin = async (endpoint, urlBase, usuario, mail, setUser, setLogged, badCredentials, setBadCredentials, setErrorLogin, setAdmin) => {
    const options = {
        method: 'POST',
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
        const response = await fetch(endpoint, options);
        if (response.status === 401) {
            /* console.log("no autorizado")
            console.log(badCredentials) */
            setBadCredentials(true)
        } else if (response.status === 200) {
            const data = await response.json()
            if (data.token) {
                localStorage.setItem('jwt', data.token);
                await fetchUser(urlBase, mail, setUser, setLogged, setAdmin);
                setBadCredentials(false)
                /* console.log(badCredentials)
                console.log("logueado") */
            }
        } else {
            setBadCredentials(false)
            setErrorLogin(true)
            /* console.log("erroooor") */
        }
    } catch (error) {
        console.warn(error)
    }

}