import { useContext, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductContext } from '../../contexts/ProductContext';
import { UserContext } from '../../contexts/UserContext';

export const useUser = () => {
    
    const { setLogged, setUser } = useContext(UserContext);
    const { setIsRedirect, setIdP } = useContext(ProductContext);
    let toHome = useNavigate();

    const login = useCallback(() => {
        setLogged(true)
    }, [setLogged])

    const logout = useCallback(() => {
        setLogged(false);
        setIsRedirect(false);
        setIdP('');
        localStorage.removeItem('jwt');
        setUser([]);
        toHome('/');
    }, [setLogged, toHome, setIsRedirect, setIdP, setUser])

    return{
        login,
        logout
    }
}