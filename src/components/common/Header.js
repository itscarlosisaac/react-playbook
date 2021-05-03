import React, { useContext } from 'react'
import { AuthContext } from '../../context/Auth/AuthContext'
import { ViewContext } from '../../context/View/ViewContext'
import { types } from '../../types/types'
import { AppLogo } from './AppLogo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faFileCode, faPager, faObjectGroup } from '@fortawesome/free-solid-svg-icons';

export const Header = (props) => {
  const { user } = useContext(AuthContext)
  const { dispatchViewReducer } = useContext(ViewContext)

  const iconColor = "#c1c9da"

  const handleViewChange = (type) => {
    //     color: #57b1ff;
    dispatchViewReducer({ type })
  }

  return (
    <header className="app__header" {...props}>
      <AppLogo style={{width: "28px"}}/>
      <div className="app__header--toggle">
        <div onClick={() => handleViewChange(types.viewComponent)}>
          <FontAwesomeIcon icon={faPager} size="2x" color={iconColor} />
          <span>Component</span>
        </div>
        <div onClick={() => handleViewChange(types.viewDocumentation)}>
          <FontAwesomeIcon icon={faFileCode} size="2x" color={iconColor} />
          <span>Documentation</span>
        </div>
        <div onClick={() => handleViewChange(types.viewSplit)}>
          <FontAwesomeIcon icon={faObjectGroup} size="2x" color={iconColor} />
          <span>Split</span>
        </div>
      </div>
      <div className="app__header__user--info">
        <img src="" alt="" />
        <h3>{user.username}</h3>
      </div>
    </header>
  )
}
