import React, { useState, useEffect } from 'react'
import { NavLink} from 'react-router-dom';
import { useResponsive } from '../../hooks/useResponsive';
import { Navegation } from '../Navegation';
import { AppLogo } from './AppLogo';
import { Logout } from './Logout';
// import { IsMobileContext } from '../../context/IsMobile/IsMobileContext';


export const Sidebar = () => {
  
  const [ responsiveState ] = useResponsive();
  // const { isMobile, isTablet } = responsiveState;
  
  const [showSidebar, setShowSidebar ] = useState();

  useEffect(() => {
    console.log("Rendering Sidebar")
    responsiveState === "mobile" || responsiveState === "tablet" ? 
      setShowSidebar(true) : 
      setShowSidebar(false)
    return () => {}
  }, [responsiveState])

  
  return (
    <aside className={
      // isMobile && isNavOpen ? 
      showSidebar ?
      "app__sidebar app__sidebar--mobile app__sidebar--mobile-open" :
      // (isMobile || isTablet) ? "app__sidebar app__sidebar--mobile" : 
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
