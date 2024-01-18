import React from 'react'
import './NavBar.css'

function Navbar() {
  return (
    <nav className='navbar'>
      <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />
      <ul className='navItems'>
        <li><a href="/">Home</a></li>
        <li><a href="/cart">TV shows</a></li>
        <li><a href="/wishlists">Movies</a></li>
        <li><a href="/profile">News & Popular</a></li>
        <li><a href="/orders">My List</a></li>
        <li><a href="/profile">Browse by Language</a></li>
      </ul>
      <img className='avatar' src="https://i.pinimg.com/736x/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.jpg" alt="" />
    </nav>
  )
}

export default Navbar
