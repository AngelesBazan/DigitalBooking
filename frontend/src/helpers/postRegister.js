import {fetchUser} from './getUser';

export const fetchRegister = async (urlBase, nuevoUsuario, mail, setUser, setLogged, setErrorRegister, resetForm, setEmailExist) => {
    const options = {
        method: 'POST',
        body: JSON.stringify(nuevoUsuario),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try { 
        const response = await fetch(`${urlBase}/register`, options);
        if(response.status === 201){
            setErrorRegister(false)
            const data = await response.json()
            if(data.token){
                localStorage.setItem('jwt', data.token);
                await fetchUser(urlBase, mail, setUser, setLogged);
                resetForm()
            }
        } else if(response.status === 409){
            setErrorRegister(false)
            setEmailExist(true)
        } else {
            setErrorRegister(true)
        }
    } catch(error) {
        console.warn(error)
    }
};