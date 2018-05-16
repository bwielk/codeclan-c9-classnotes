import React from 'react'

const Planet = ({ datum: planet }) => (
  <div>
    <h3>{planet.name}</h3>
    <p>Climate: {planet.climate}</p>
  </div>
)

export default Planet
