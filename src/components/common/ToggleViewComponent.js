import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faFileCode, faPager, faObjectGroup } from '@fortawesome/free-solid-svg-icons';
import { ViewContext } from '../../context/View/ViewContext'
import { types } from '../../types/types'

export const ToggleViewComponent = () => {
  const { dispatchViewReducer, view } = useContext(ViewContext)
  const [ active ] = useState(view.view);
  const iconColor = "#c1c9da"
  
  const handleViewChange = (type) => {
    const cleanedUpType = type.replace("[view]", "").trim();
    if( cleanedUpType === view.view ) return;
    dispatchViewReducer({ type })
  }

  return (
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
  )
}
