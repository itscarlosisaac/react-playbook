import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '../../context/Auth/AuthContext'
import { ToggleViewComponent } from './ToggleViewComponent';


export const Header = (props) => {
  const { user } = useContext(AuthContext)
  const {location} = useHistory();

  return (
    <header className="app__header" {...props}>
      {location.pathname.includes("/component") && <ToggleViewComponent/>}

      <div className="app__header__user--info">
        <FontAwesomeIcon icon={faUserCircle} color="#c1c9da" size="2x"/> 
        <h5>{user.username}</h5>
      </div>
    </header>
  )
}
