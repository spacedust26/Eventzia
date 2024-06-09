import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <footer className='bg-[#321E1E] mt-12 bottom-0 flex flex-col md:flex-row gap-10 md:gap-20 p-6 pt-8 items-center md:justify-around text-[#d4af37] text-sm md:items-start'>
      <div className="flex flex-col justify-center items-center md:-mt-7">
        <img src='gif/EventziaLogo.gif' alt='Eventzia' width={120} />
        <p className='text-center'>Making Your Events Memorable !</p>
        <div className='flex flex-row m-3 text-white'>
          <div className='bg-[#d4af37] p-2 m-1 rounded-full text-2xl hover:text-[#321E1E]'><FaFacebook /></div>
          <div className='bg-[#d4af37] p-2 m-1 rounded-full text-2xl hover:text-[#321E1E]'><FaInstagram /></div>
          <div className='bg-[#d4af37] p-2 m-1 rounded-full text-2xl hover:text-[#321E1E]'><FaSquareXTwitter /></div>
          <div className='bg-[#d4af37] p-2 m-1 rounded-full text-2xl hover:text-[#321E1E]'><FaLinkedin /></div>
        </div>
      </div>
      <div className="flex flex-col items-center md:items-start">
        <h4 className='text-white font-bold text-lg mb-2'>Get In Touch</h4>
        <ul className='text-center md:text-left'>
          <li className='my-1'>Email: eventzia@eventmanagement.com</li>
          <li className='my-1'>Phone no: +91 987654321, +91 9187667819</li>
        </ul>
      </div>
      <div className="flex flex-col items-center md:items-start">
        <h4 className='text-white font-bold text-lg mb-2'>Links</h4>
        <ul className='text-center md:text-left'>
          <li className='my-1 hover:text-white'>About Us</li>
          <li className='my-1 hover:text-white'>Contact</li>
          <li className='my-1 hover:text-white'>Privacy Policy</li>
          <li className='my-1 hover:text-white'>Terms and Conditions</li>
          <li className='my-1 hover:text-white'>Contact</li>
        </ul>
      </div>
      <div className="flex flex-col items-center md:items-start">
        <h4 className='text-white font-bold text-lg mb-2'>Address</h4>
        <p className='text-center md:text-left'>Eventzia Office<br />Madhav Nagar, Manipal<br />Karnataka, 576104</p>
      </div>
    </footer>
    <div className='w-full h-[1px]'></div>
    <div className="bg-[#321E1E] text-white text-center text-xs py-2">
      Eventzia &copy; Copyright | All Rights Reserved
    </div>
    </>
  )
}

export default Footer
