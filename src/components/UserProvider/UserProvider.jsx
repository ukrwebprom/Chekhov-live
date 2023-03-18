
import React, { createContext, useContext, useState } from "react";
import PropTypes from 'prop-types';

const UserContext = createContext();

export const myUser = () => useContext(UserContext);

export const UserProvider = ({children}) => {
    const [isLogged, setIsLogged] = useState(false);
    const [userName, setUserName] = useState('');
    const [userImg, setUserImg] = useState('');

    const logIn = () => {
        setIsLogged(true);
        setUserName("Jakob");
        setUserImg("no ava");
    }
    
    const logOut = () => {
        setIsLogged(false);
        setUserName(null);
        setUserImg(null);
    }

    return (
        <UserContext.Provider value={{isLogged, userName, userImg, logIn, logOut}}>
            {children}
        </UserContext.Provider>
    );
};

UserProvider.propTypes = {
    children: PropTypes.node.isRequired,
    };