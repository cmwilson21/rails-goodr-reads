import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <NavLink className="navbar_link" to="/">Home</NavLink>
      <NavLink className="navbar_link" to="/books">Books</NavLink>
      <NavLink className="navbar_link" to="/books/new">Add A Book</NavLink>
      {/* <NavLink className="navbar_link" to="/login">Login</NavLink> */}
    </div>
  )
}

export default NavBar
