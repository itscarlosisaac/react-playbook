import React, { useContext  } from 'react'
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faBars } from '@fortawesome/free-solid-svg-icons';
import { ToggleViewComponent } from './ToggleViewComponent';
import { AuthContext } from '../../context/Auth/AuthContext'
import { useResponsive } from '../../hooks/useResponsive';

export const Header = (props) => {
  const { user } = useContext(AuthContext)
  const { location } = useHistory();
  const [ responsiveState ] = useResponsive();
  
  return (
    <header className="app__header" {...props}>
      { location.pathname.includes("/component") && <ToggleViewComponent/> }

      { (responsiveState === "mobile" || responsiveState === "tablet" ) && <div className="app__mobile--nav" onClick={ props.toggleNav}>
        <FontAwesomeIcon icon={faBars} color="#c1c9da" size="1x"/> 
      </div> }
      <div className="app__header__user--info">
        <FontAwesomeIcon icon={faUserCircle} color="#c1c9da" size="2x"/> 
        <h5>{user.username}</h5>
      </div>
    </header>
  )
}
