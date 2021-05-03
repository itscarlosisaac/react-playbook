import React  from 'react'
import { NavLink } from 'react-router-dom'

export const Navegation = () => {

  return (
    <nav className="app__side__nav">
      <ul>
        <li>
          <NavLink to="/property-card" 
            exact 
            activeClassName="active" >
              <span>Property Card</span>
          </NavLink>
        </li>
        
      </ul>
    </nav>
  )
}
