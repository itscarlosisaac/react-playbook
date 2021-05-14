import React, { useContext, useReducer  } from 'react'
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faBars } from '@fortawesome/free-solid-svg-icons';
import { ToggleViewComponent } from './ToggleViewComponent';
import { AuthContext } from '../../context/Auth/AuthContext'
import { useResponsive } from '../../hooks/useResponsive';

import { ViewContextProvider } from '../../context/View/ViewContext';
import { ViewReducer } from '../../context/View/ViewReducer';

export const Header = (props) => {
  const { user } = useContext(AuthContext)
  const { location } = useHistory();
  const [ responsiveState ] = useResponsive();

  console.log("RENDERING HEADER")
  const [ view, dispatchViewReducer ] = useReducer(ViewReducer, { view: "component" })

  const handleOpenMobileNav = () => {
    //setMobile({isNavOpen: !isNavOpen , ...mobileState})
  }
  
  return (
    <header className="app__header" {...props}>
      { location.pathname.includes("/component") &&
        <ViewContextProvider value={{view, dispatchViewReducer}}>
          <ToggleViewComponent/>
        </ViewContextProvider>
      }

      { (responsiveState === "mobile" || responsiveState === "tablet" ) && <div onClick={handleOpenMobileNav}>
        <FontAwesomeIcon icon={faBars} color="#c1c9da" size="1x"/> 
      </div> }
      <div className="app__header__user--info">
        <FontAwesomeIcon icon={faUserCircle} color="#c1c9da" size="2x"/> 
        <h5>{user.username}</h5>
      </div>
    </header>
  )
}
