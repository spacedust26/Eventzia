import React from 'react'

const About = () => {
  return (
    <div id='about'>
      <div className='text-[#321E1E] bg-[#d4af37] p-2 rounded-xl my-16 mx-4 md:mx-10'>
        <h2 className='my-4 text-center font-bold text-3xl md:text-4xl'>About Us</h2>
        <div className='flex flex-col md:flex-row justify-center items-center m-4 gap-10 md:gap-20'>
          <div className='bg-[#321E1E] rounded-full w-36 h-36 md:w-72 md:h-72 flex justify-center items-center overflow-hidden'>
            <img src='/gif/EventziaLogo.gif' className='w-full h-full object-contain' />
          </div>
          <div className='w-full md:w-3/4 text-base md:text-lg flex flex-col gap-5'>
            <p>Welcome to Eventzia, your ultimate platform for seamless event management! Whether you're planning a dream wedding, a corporate gala, or a cozy birthday celebration, Eventzia offers an intuitive and comprehensive solution to bring your vision to life.</p>
            <p>With our user-friendly interface, wide range of options, and a vast network of trusted vendors, organizing any event becomes a breeze. From initial planning to flawless execution, Eventzia ensures every detail is handled with precision and care, making your special occasions truly unforgettable. Join Eventzia today and experience the ease of perfect event planning!</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row m-4 md:m-10 gap-10 md:gap-36 justify-center items-center text-[#321E1E]">
        <div className='flex flex-col w-full md:w-72 justify-center items-center text-center'>
          <div className='bg-[#321E1E] rounded-full p-4 mb-2 flex justify-center items-center'>
            <img src="/gif/user-friendly.gif" alt="User Friendly" className='w-16 md:w-20' />
          </div>
          <h3 className='font-bold text-lg mb-2'>User Friendly</h3>
          <p>Easy for anyone to plan and manage events anywhere without any technical expertise</p>
        </div>
        <div className='flex flex-col w-full md:w-72 justify-center items-center text-center'>
          <div className='bg-[#321E1E] rounded-full p-4 mb-2 flex justify-center items-center'>
            <img src="/gif/vendor-network.gif" alt="Vendor Network" className='w-16 md:w-20' />
          </div>
          <h3 className='font-bold text-lg mb-2'>Vendor Network</h3>
          <p>A vast network of trusted vendors, from caterers and florists to photographers and entertainers</p>
        </div>
        <div className='flex flex-col w-full md:w-72 justify-center items-center text-center'>
          <div className='bg-[#321E1E] rounded-full p-4 mb-2 flex justify-center items-center'>
            <img src="/gif/budget-friendly.gif" alt="Budget Management" className='w-16 md:w-20' />
          </div>
          <h3 className='font-bold text-lg mb-2'>Budget Management</h3>
          <p>Helps you stay within your financial limits while achieving your desired outcomes</p>
        </div>
      </div>
    </div>
  )
}

export default About
