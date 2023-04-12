import React, { createContext, useState } from "react";
import { MdOutlineMonetizationOn, MdOutlineSettings } from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi";
import { TbActivity } from "react-icons/tb";

export const NavigationContext = createContext();

let navButtons = [
  {name: 'Despesa', icon: <MdOutlineMonetizationOn size={'2rem'}/>, isActive: true},
  {name: 'Grupo', icon: <HiOutlineUsers size={'2rem'}/>, isActive: false},
  {name: 'Atividade', icon: <TbActivity size={'2rem'}/>, isActive: false},
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
