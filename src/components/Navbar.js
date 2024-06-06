import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
    <div className="navbar-brand">  
     <img src='https://png.pngtree.com/template/20191017/ourmid/pngtree-bg-initial-letter-logo-vector-design-template-image_320523.jpg'></img>
     <h1>SafarStoryBlogs</h1></div>

    <ul className="navbar-links">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">Blogs</a></li>
      <li><a href="#services">Give</a></li>
    </ul>
    <button className='guest-button'>BE OUR GUEST</button>
  </nav>
  )
}

export default Navbar
