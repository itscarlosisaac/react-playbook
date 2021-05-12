import React from 'react'
import { NavLink} from 'react-router-dom';
import { Navegation } from '../Navegation';
import { AppLogo } from './AppLogo';
import { Logout } from './Logout';

export const Sidebar = () => {
  
  return (
    <aside className="app__sidebar">
      <NavLink to="/">
        <AppLogo width="150" />
      </NavLink>
      <Navegation />
      <Logout/>
    </aside>
  )
}
