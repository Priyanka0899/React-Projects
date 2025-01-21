import React from 'react'

const Nav = () => {
  return (
    <>
          <nav className='container'>
            <img id="logo" src="https://seeklogo.com/images/N/nike-logo-47A65A59D5-seeklogo.com.png" alt="Nike Logo"/>
            <ul>
              <li href="#">Menu</li>
              <li href="#">Location</li>
              <li href="#">About</li>
              <li href="#">Contact</li>
            </ul>
            <button className="btn">Login</button>
          </nav>
    </>
  )
}

export default Nav
