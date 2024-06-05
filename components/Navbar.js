import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-[#321E1E] text-white flex items-center justify-around flex-row px-4 h-16'>
        <div className="logo">EVENTZIA</div>
        <ul className='flex justify-between gap-4'>
          <li>Home</li>
          <li>About Us</li>
          <li>Testimonials</li>
          <li>Contact</li>
        </ul>
        <button>Log In</button>
    </nav>
  )
}

export default Navbar
