import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [values, setValues] = useState({
        uEmail: '',
        uPassword: '',
        uNickname: '',
    });

    const handleUser = (email, password, nickname) => setValues({
        uEmail: email,
        uPassword: password,
        uNickname: nickname,
    });

    return (
        <UserContext.Provider value={{ ...values, handleUser }}>
            {children}
        </UserContext.Provider >
    );
};
