import React from 'react'
import { Link } from 'react-router'

const Main = ({children}) => (
  <div>
    <h1>Star Wars</h1>
    <ul>
      <li><Link to='/people'>People</Link></li>
      <li><Link to='/planets'>Planets</Link></li>
    </ul>
    {children}
  </div>
)

export default Main
