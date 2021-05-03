import React, { useContext } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Card } from '../components/Card/Card'
import { Box } from '../components/Card/Box'
import { Documentation } from './Documentation/Documentation';
import { ViewContext } from '../context/View/ViewContext';

import { PropertyCard } from './PropertyCard/PropertyCard';
import { PropertyCardData, PropertyCardDocumentation } from '../data/staticData';


export const Canvas = () => {

  const { view } = useContext(ViewContext);

  const checkViewType = (Component, props, documentationProps) => {
    switch (view.view) {
      case "component":
        return (<Component {...props} />)
      case "documentation":
        return (<Documentation {...documentationProps}/>)
      case "split":
        return (<><Component {...props}/> <Documentation {...documentationProps}/></>)
      default:
        return (<Component {...props}/>)
    }
  }

  return (
    <>
      <Switch>
        <Route path="/card" render={(props) => checkViewType(Card, props) } />
        <Route path="/box" render={(props) => checkViewType(Box, props) } />
        <Route path="/property-card" render={() => checkViewType(PropertyCard, PropertyCardData, PropertyCardDocumentation) } />
      </Switch>
    </>
  )
}
