import React, {useReducer} from 'react'
import { Footer } from '../components/common/Footer'
import { Header } from '../components/common/Header'
import { PageContainer } from '../components/PageContainer'
import { Canvas } from '../components/Canvas'
import { Sidebar } from '../components/common/Sidebar'
import { ViewContextProvider } from '../context/View/ViewContext';
import { ViewReducer } from '../context/View/ViewReducer';

export const Dashboard = () => {

  console.log("RENDERING DASHBOARD")
  const [ view, dispatchViewReducer ] = useReducer(ViewReducer, { view: "component" })

  return (
    <PageContainer className="app__screen app__screen--dashboard">
      <Header />
      <Sidebar  />
      <main className="app__main__playground__area">  
      <ViewContextProvider value={{view, dispatchViewReducer}}>
        <Canvas />
      </ViewContextProvider>
      </main>
      <Footer/>
    </PageContainer>
  )
}
