import React, { useState, useEffect} from 'react'
import { NavLink} from 'react-router-dom';
import { useWindowSize } from '../../hooks/useWindowSize';
import { Navegation } from '../Navegation';
import { AppLogo } from './AppLogo';
import { Logout } from './Logout';
// import { IsMobileContext } from '../../context/IsMobile/IsMobileContext';

export const Sidebar = () => {
  
  const [ windowSize ] = useWindowSize();
  const [ isMobile, setIsMobile ] = useState();

  useEffect(() => {
    windowSize.width < 960 ? setIsMobile(true) : setIsMobile(false);
    return () => { }
  }, [windowSize])
  
  const isNavOpen = false;
  return (
    <aside className={
      // isMobile && isNavOpen ? 
      // "app__sidebar app__sidebar--mobile app__sidebar--mobile-open" :
      isMobile ? "app__sidebar app__sidebar--mobile" : 
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
