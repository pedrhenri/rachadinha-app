import React, { useContext } from "react";
import { NavigationContext } from "../contexts/NavigationContext";

const BottomNavBar = () => {

  const { 
    navButtons,
    setCurrentActivatedButton
  } = useContext(NavigationContext);    

  const handleButtonAction = (button) => {
    navButtons.map((navButton)=>(
        navButton.isActive = navButton.name === button.name
    ))
    setCurrentActivatedButton(button);
  }
  
  return (
      <nav className='flex w-full h-fit px-0 pt-0 pb-6'> 
      {navButtons.map((navButton, i)=>(
        <button 
          key={i} 
          className={`flex flex-col gap-2 w-full items-center px-0 text-2xl `+(navButton.isActive?`text-green-600`:``)}
          onClick={()=>{handleButtonAction(navButton)}}
          >
          <div className={`flex flex-col items-start w-full h-1 `+(navButton.isActive?`bg-green-600 shadow-[0_12px_24px_rgba(67,168,84,0.25)] shadow-green-500`:``)}></div>
          {navButton.icon}
          {navButton.name}
        </button>
      ))}    
    </nav>
  )
}

export default BottomNavBar;