import React from 'react'

function About(props) {
  return (
    <div>
      <h1>About</h1>
      Name:{props.name}<br></br>
      Address:{props.address}
    </div>
  )
}

export default About
