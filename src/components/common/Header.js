import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/Auth/AuthContext'
import { ViewContext } from '../../context/View/ViewContext'
import { types } from '../../types/types'
import { AppLogo } from './AppLogo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faFileCode, faPager, faObjectGroup, faUserCircle } from '@fortawesome/free-solid-svg-icons';

export const Header = (props) => {
  const { user } = useContext(AuthContext)
  const { dispatchViewReducer, view } = useContext(ViewContext)
  const [ active ] = useState(view.view);

  const iconColor = "#c1c9da"

  const handleViewChange = (type) => {
    const cleanedUpType = type.replace("[view]", "").trim();
    if( cleanedUpType === view.view ) return;
    dispatchViewReducer({ type })
  }

  return (
    <header className="app__header" {...props}>
      <AppLogo style={{width: "28px"}}/>
      <div className="app__header--toggle">
        <div className={active === "component" ? "active" : ""} onClick={() => handleViewChange(types.viewComponent)}>
          <FontAwesomeIcon icon={faPager} size="2x" color={iconColor} />
          <span>Component</span>
        </div>
        <div className={active === "documentation" ? "active" : ""} onClick={() => handleViewChange(types.viewDocumentation)}>
          <FontAwesomeIcon icon={faFileCode} size="2x" color={iconColor} />
          <span>Documentation</span>
        </div>
        <div className={active === "split" ? "active" : ""} onClick={() => handleViewChange(types.viewSplit)}>
          <FontAwesomeIcon icon={faObjectGroup} size="2x" color={iconColor} />
          <span>Split</span>
        </div>
      </div>
      <div className="app__header__user--info">
        <FontAwesomeIcon icon={faUserCircle} color={iconColor} size="3x"/> 
        <h3>{user.username}</h3>
      </div>
    </header>
  )
}
