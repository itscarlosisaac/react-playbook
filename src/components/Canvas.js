import React, { useContext } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Documentation } from './Documentation/Documentation';
import { ViewContext } from '../context/View/ViewContext';

import { PropertyCard } from './PropertyCard/PropertyCard';
import { PropertyCardData, PropertyCardDocumentation } from '../data/staticData';
import { Welcome } from './Welcome/Welcome';


export const Canvas = () => {

  const { view } = useContext(ViewContext);

  const checkViewType = (Component, props, documentationProps, hasViews = true) => {
    if( !hasViews ) { 
      return <Component {...props} />;
    }

    switch (view.view) {
      case "component":
        return (<Component {...props} />)
      case "documentation":
        return (<Documentation {...documentationProps} />)
      case "split":
        return (<><Component {...props} /> <Documentation {...documentationProps} /> </>)
      default:
        return (<Component {...props} />)
    }
  }

  return (
    <>
      <Switch>
        <Route exact path="/" render={() => checkViewType(Welcome, {}, {}, false) } />
        <Route path="/component/property-card" render={() => checkViewType(PropertyCard, PropertyCardData, PropertyCardDocumentation) } />
      </Switch>
    </>
  )
}
