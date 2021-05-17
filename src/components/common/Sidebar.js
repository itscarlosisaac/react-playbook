import React, {  } from 'react'
import { NavLink} from 'react-router-dom';
import { Navegation } from '../Navegation';
import { AppLogo } from './AppLogo';
import { Logout } from './Logout';

export const Sidebar = (props) => {
  
  return (
    <aside className={
      props.isMobile && props.navState ? 
      "app__sidebar app__sidebar--mobile app__sidebar--open" :
      props.isMobile ? "app__sidebar app__sidebar--mobile" : 
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
