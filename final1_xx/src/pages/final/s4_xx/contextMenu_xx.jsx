import { useState, useEffect, createContext, useContext } from 'react';
import { toast } from 'react-toastify';
import menu_data from './menu_data';

const MenuContext_xx = createContext();

const MenuContextProvider_xx = ({ children }) => {
  return (
    <MenuContext_xx.Provider value={{}}>{children}</MenuContext_xx.Provider>
  );
};

const useMenuContext_xx = () => {
  return useContext(MenuContext_xx);
};

export { MenuContextProvider_xx, useMenuContext_xx };
