import React, {useReducer, useState} from 'react'
import { Footer } from '../components/common/Footer'
import { Header } from '../components/common/Header'
import { PageContainer } from '../components/PageContainer'
import { Canvas } from '../components/Canvas'
import { Sidebar } from '../components/common/Sidebar'
import { ViewContextProvider } from '../context/View/ViewContext';
import { ViewReducer } from '../context/View/ViewReducer';

export const Dashboard = () => {

  const [navState, setNaveState]= useState(false)
  const [ view, dispatchViewReducer ] = useReducer(ViewReducer, { view: "component" })

  const handleToggleNav = () => {
    setNaveState(!navState);
  }

  return (
    <PageContainer className="app__screen app__screen--dashboard">
      <ViewContextProvider value={{view, dispatchViewReducer}}>
        <Header handleToggleNav={handleToggleNav} navState={navState} />
        <Sidebar  navState={navState} />
        <main className="app__main__playground__area">  
          <Canvas />
        </main>
        <Footer/>
      </ViewContextProvider>
    </PageContainer>
  )
}
