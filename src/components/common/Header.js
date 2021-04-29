import React, { useContext } from 'react'
import { AuthContext } from '../../context/Auth/AuthContext'
import { ViewContext } from '../../context/View/ViewContext'
import { types } from '../../types/types'
import { AppLogo } from './AppLogo'

export const Header = (props) => {
  const { user } = useContext(AuthContext)
  const { dispatchViewReducer } = useContext(ViewContext)

  const handleViewChange = (type) => {
    dispatchViewReducer({ type })
  }

  return (
    <header className="app__header" {...props}>
      <AppLogo style={{width: "28px"}}/>
      <div className="app__header__toggle">
        <h1 onClick={() => handleViewChange(types.viewComponent)}>Component</h1>
        <h1 onClick={() => handleViewChange(types.viewDocumentation)}>Documentation</h1>
        <h1 onClick={() => handleViewChange(types.viewSplit)}>Split</h1>
      </div>
      <div className="app__header__user--info">
        <img src="" alt="" />
        <h3>{user.username}</h3>
      </div>
    </header>
  )
}
