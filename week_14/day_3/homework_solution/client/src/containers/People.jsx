import React from 'react'
import BaseContainer from './BaseContainer'
import Person from '../components/Person'

const People = () => (
    <BaseContainer
      title={'People'}
      url='http://swapi.co/api/people'
      componentToRender={Person} />
)

export default People
