import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [uEmail, setUEmail] = useState('');
    const [uPassword, setUPassword] = useState('');

    const handleUser = (email, password) => {
        setUEmail(email);
        setUPassword(password);
    };

    return (
        <UserContext.Provider value={{ uEmail, uPassword, handleUser }}>
            {children}
        </UserContext.Provider>
    );
};
