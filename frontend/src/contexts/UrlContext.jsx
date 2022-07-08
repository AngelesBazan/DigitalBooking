import { createContext } from 'react';

export const UrlContext = createContext();

const UrlProvider = ({ children }) => {
    const urlBase = 'http://apibackendg1c1-env.eba-f63kvump.us-east-1.elasticbeanstalk.com';

    return (
        <UrlContext.Provider value={{ urlBase }}>
            {children}
        </UrlContext.Provider>
    )
}

export default UrlProvider;