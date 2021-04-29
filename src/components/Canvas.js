import React, { useContext } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Card } from '../components/Card/Card'
import { Box } from '../components/Card/Box'
import { Documentation } from '../components/Documentation';
import { ViewContext } from '../context/View/ViewContext';

export const Canvas = () => {

  const { view } = useContext(ViewContext);

  const checkViewType = (Component) => {
    switch (view.view) {
      case "component":
        return (<Component />)
      case "documentation":
        return (<Documentation/>)
      case "split":
        return (<><Component /> <Documentation/></>)
      default:
        return (<Component />)
    }
  }

  return (
    <div>
      <h1>Canvas Containeer</h1>
      <Switch>
        <Route path="/card" render={() => checkViewType(Card) } />
        <Route path="/box" render={() => checkViewType(Box) } />
      </Switch>
    </div>
  )
}
