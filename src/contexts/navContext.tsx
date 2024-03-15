'use client'
import { ReactNode, createContext, useContext, useState } from "react";

interface Props {
    children: ReactNode
};

interface navProviderData {
    activateMenu: boolean;
    setActivateMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavContext = createContext<navProviderData>({} as navProviderData);

export const NavProvider = ({ children }: Props) => {
    const [activateMenu, setActivateMenu] = useState(false);

    return (
        <NavContext.Provider 
            value={{
                activateMenu, setActivateMenu,
            }}
        >
            { children }
        </NavContext.Provider>
    );
};

export const useNavContext = () => useContext(NavContext);