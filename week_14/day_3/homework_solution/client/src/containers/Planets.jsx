import React from 'react'
import BaseContainer from './BaseContainer'
import Planet from '../components/Planet'

const Planets = () => (
    <BaseContainer
      title={'Planets'}
      url='http://swapi.co/api/planets'
      componentToRender={Planet} />
)

export default Planets
