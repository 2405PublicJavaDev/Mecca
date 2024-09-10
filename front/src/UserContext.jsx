import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [values, setValues] = useState({
        uEmail: '',
        uNickname: '',
    });

    const handleUser = (email, nickname) => setValues({
        uEmail: email,
        uNickname: nickname,
    });

    return (
        <UserContext.Provider value={{ ...values, handleUser }}>
            {children}
        </UserContext.Provider >
    );
};
