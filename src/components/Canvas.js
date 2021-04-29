import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Card } from '../components/Card/Card'
import { Box } from '../components/Card/Box'
import { Documentation } from '../components/Documentation';

export const Canvas = () => {
  return (
    <div>
      <h1>Canvas here</h1>
      <Switch>
        <Route path="/card" components={{card: Card, doc: Documentation}} />
        <Route path="/box" component={Box} />
      </Switch>
    </div>
  )
}
