import React from 'react'
import { AppLogo } from './AppLogo'

export const Header = (props) => {
  return (
    <header className="app__header" {...props}>
      <AppLogo style={{width: "28px"}}/>
      <div>
        
      </div>
    </header>
  )
}
