import React, {useReducer, useState} from 'react'
import { Footer } from '../components/common/Footer'
import { Header } from '../components/common/Header'
import { PageContainer } from '../components/PageContainer'
import { Canvas } from '../components/Canvas'
import { Sidebar } from '../components/common/Sidebar'
import { ViewContextProvider } from '../context/View/ViewContext';
import { ViewReducer } from '../context/View/ViewReducer';
import { useResponsive } from '../hooks/useResponsive';

export const Dashboard = () => {

  const [ navState, setNaveState]= useState(false)
  const [ responsiveState ] = useResponsive();
  const [ view, dispatchViewReducer ] = useReducer(ViewReducer, { view: "component" })
  const isMobile = responsiveState === "mobile" || responsiveState === "tablet";
  const handleToggleNav = () => {
    setNaveState(!navState);
  }

  return (
    <PageContainer className="app__screen app__screen--dashboard">
      <ViewContextProvider value={{view, dispatchViewReducer}}>
        <Header toggleNav={handleToggleNav} navState={navState} />
        { responsiveState && <Sidebar navState={navState} isMobile={isMobile} />}
        <main className="app__main__playground__area">  
          <Canvas />
        </main>
        <Footer/>
      </ViewContextProvider>
    </PageContainer>
  )
}
