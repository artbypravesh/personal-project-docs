import React from 'react'
import {Link} from 'gatsby'

export default props => (
  <header>
    <Link to='//'><h3>ArtbyPravesh Project Documentations</h3></Link>
    <nav>
      <ul>
        <li><Link to='//'>Home</Link></li>
        <li><Link to='/about/'>About</Link></li>
      </ul>
    </nav>
    <h1>{props.pageTitle}</h1>
  </header>
)