import React from 'react'
import { BrowserRouter, Route, hashHistory } from 'react-router-dom'
import { MainContainer, HomeContainer } from '../containers'

const routes = (
  <BrowserRouter history={hashHistory}>
    <BrowserRouter path='/' component={MainContainer}>
      <Route exact path='/' component={HomeContainer} />
    </BrowserRouter>
  </BrowserRouter>
)

export default routes
