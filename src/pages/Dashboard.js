import React from 'react'
import { Footer } from '../components/common/Footer'
import { Header } from '../components/common/Header'
import { PageContainer } from '../components/PageContainer'
import { Canvas } from '../components/Canvas'
import { Sidebar } from '../components/common/Sidebar'

export const Dashboard = () => {


  return (
    <PageContainer className="app__screen app__screen--dashboard">
      <Header  />
      <Sidebar />
      <main className="app__main__playground__area">  
        <Canvas />
      </main>
      <Footer/>
    </PageContainer>
  )
}
