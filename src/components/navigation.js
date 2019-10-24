import React from 'react'
import {Link} from 'gatsby'
import navigationStyles from '../styles/navigation.module.scss'

export default () => (
  <nav className={navigationStyles.mainNav}>
      <ul>
        <li><Link to='//'>Home</Link></li>
        <li><Link to='/about/'>About</Link></li>
      </ul>
    </nav>
)
