import React from 'react';

const defaultUser = {
    email: '',
    password: '',
    isLoggedIn: false,
};

const defaultLogOut = () => { };

export const AppContext = React.createContext({
    user: defaultUser,
    logOut: defaultLogOut,
});