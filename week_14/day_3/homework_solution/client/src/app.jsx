import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import Main from './components/Main'
import People from './containers/People'
import Planets from './containers/Planets'

window.onload = () => {
  render(
    <Router history={hashHistory}>
      <Route path='/' component={Main}>
        <IndexRoute component={People} />
        <Route path='people' component={People} />
        <Route path='planets' component={Planets} />
      </Route>
    </Router>,
    document.getElementById('app')
  )
}
