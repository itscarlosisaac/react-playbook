import React from 'react'
import { useHistory } from 'react-router-dom'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { IconLogout } from '../Icons/IconLogout'

export const Logout = () => {
  const [, , , deleteLocalData ] = useLocalStorage();
  const history = useHistory();
  const handleLogout = () => {
    deleteLocalData("ReactPlaybookLogin")
    history.go("/login");
  }
  return (
    <div className="logout" onClick={handleLogout}>
      <span>Logout</span>
      <IconLogout/>
    </div>
  )
}
