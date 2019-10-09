
import React from 'react'

const  Navbar = (props) => { 
  
    return (
      <nav className='navbar bg-primary'>
        <h1> 
        <i className="fa fa-github" aria-hidden="true" /> <span></span>
        {props.title}

        </h1>
      </nav>
    )
}

Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github'
}
export default Navbar
