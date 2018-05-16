import React from 'react'

const Person = ({ datum: person }) => (
  <div>
    <h3>{person.name}</h3>
    <p>Mass: {person.mass}</p>
  </div>
)

export default Person
