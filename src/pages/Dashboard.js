import React from 'react'
import { Footer } from '../components/common/Footer'
import { Header } from '../components/common/Header'
import { IconLogout } from '../components/Icons/IconLogout'
import { Navegation } from '../components/Navegation'
import { PageContainer } from '../components/PageContainer'
import { useHistory } from 'react-router-dom'
import { useLocalStorage } from '../hooks/useLocalStorage'



export const Dashboard = () => {

  const [, , , deleteLocalData ] = useLocalStorage();
  const history = useHistory();
  
  const handleLogout = () => {
    deleteLocalData("ReactPlaybookLogin")
    history.go("/login");
  }

  return (
    <PageContainer className="app__screen app__screen--dashboard">
      <Header  />
      <aside className="app__sidebar">
        <Navegation/>
        <div className="logout" onClick={handleLogout}>
          <span>Logout</span>
          <IconLogout/>
        </div>
      </aside>
      <main className="app__main__playground__area">  
        <h1>Content Content</h1>
      </main>
      <Footer/>
    </PageContainer>
  )
}
