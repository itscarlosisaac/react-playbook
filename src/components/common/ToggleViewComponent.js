import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faFileCode, faPager, faObjectGroup } from '@fortawesome/free-solid-svg-icons';
import { ViewContext } from '../../context/View/ViewContext'
import { types } from '../../types/types'

export const ToggleViewComponent = () => {
  const { dispatchViewReducer, view } = useContext(ViewContext)
  const iconColor = "#c1c9da";
  
  const handleViewChange = (type) => {
    const cleanedUpType = type.replace("[view]", "").trim();
    if( cleanedUpType === view.view ) return;
    dispatchViewReducer({ type })
  }

  return (
    <div className="app__header--toggle">
      <div className={view.view === "component" ? "active" : ""} onClick={() => handleViewChange(types.viewComponent)}>
        <FontAwesomeIcon icon={faPager} size="1x" color={iconColor} />
      </div>
      <div className={view.view  === "documentation" ? "active" : ""} onClick={() => handleViewChange(types.viewDocumentation)}>
        <FontAwesomeIcon icon={faFileCode} size="1x" color={iconColor} />
      </div>
      <div className={view.view  === "split" ? "active" : ""} onClick={() => handleViewChange(types.viewSplit)}>
        <FontAwesomeIcon icon={faObjectGroup} size="1x" color={iconColor} />
      </div>
    </div>
  )
}
