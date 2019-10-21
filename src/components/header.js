import React from 'react'

export default props => (
  <header>
    <h3>ArtbyPravesh Project Documentations</h3>
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
      </ul>
    </nav>
    <h1>{props.pageTitle}</h1>
  </header>
)