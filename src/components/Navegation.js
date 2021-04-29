import React  from 'react'
import { NavLink } from 'react-router-dom'

export const Navegation = () => {

  return (
    <div>
      <nav>
        <ul>
          <li><NavLink to="/card" exact activeClassName="active" >Card</NavLink></li>
          <li><NavLink to="/box" exact activeClassName="active" >Box</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}
