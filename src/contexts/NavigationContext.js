import React, { createContext, useState } from "react";
import { MdOutlineGroup, MdOutlineMonetizationOn, MdOutlineSettings } from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi";

export const NavigationContext = createContext();

let navButtons = [
  {name: 'Despesa', icon: <MdOutlineMonetizationOn size={'2rem'}/>, isActive: true},
  {name: 'Grupo', icon: <MdOutlineGroup size={'2rem'}/>, isActive: false},
  {name: 'Amigos', icon: <HiOutlineUsers size={'2rem'}/>, isActive: false},
  {name: 'Config', icon: <MdOutlineSettings size={'2rem'}/>, isActive: false},
];

function NavigationContextProvider(props) {

  const [currentActivatedButton, setCurrentActivatedButton] = useState(navButtons[0])

  const contextValue = {
    navButtons,
    currentActivatedButton,
    setCurrentActivatedButton,
  };

  return <NavigationContext.Provider value={contextValue}>{props.children}</NavigationContext.Provider>;
}

export default NavigationContextProvider;
