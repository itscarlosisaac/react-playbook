import React, { useState, useEffect } from 'react'
import { NavLink} from 'react-router-dom';
import { useResponsive } from '../../hooks/useResponsive';
import { Navegation } from '../Navegation';
import { AppLogo } from './AppLogo';
import { Logout } from './Logout';
// import { IsMobileContext } from '../../context/IsMobile/IsMobileContext';


export const Sidebar = (props) => {
  
  const [ responsiveState ] = useResponsive();
  
  const [showSidebar, setShowSidebar ] = useState();

  useEffect(() => {
    responsiveState === "mobile" || responsiveState === "tablet" ? 
      setShowSidebar(true) : 
      setShowSidebar(false)
    return () => {}
  }, [responsiveState])

  
  return (
    <aside className={
      showSidebar && props.navState ? 
      "app__sidebar app__sidebar--mobile app__sidebar--open" :
      (showSidebar) ? "app__sidebar app__sidebar--mobile" : 
      "app__sidebar" } >
      <div>
        <NavLink to="/">
          <AppLogo width="150" />
        </NavLink>
      </div>
      <Navegation />
      <Logout/>
    </aside>
  )
}
