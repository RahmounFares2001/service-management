'use client';

import React, {createContext, useContext, useState} from "react";

export const TestContext = createContext();

export const CustomAppProvider = ({children}) => {
    const [state, setState] = useState('hello');

    return (
        <TestContext.Provider value={{state, setState}}>
            {children}
        </TestContext.Provider>
    )
}

export const useCustomContext = () => useContext(TestContext);