import React from 'react';

const Contact = () => {
  return (
    <div id='contact'>
      <h2 className='text-center text-4xl font-bold my-8'>Contact Us</h2>
      <form className='flex flex-col justify-center items-center w-full max-w-xl mx-auto p-6 bg-[#321E1E] shadow-lg rounded-xl text-[#d4af37]'>
        <div className='w-full mb-4'>
          <label className='block text-lg font-medium mb-2'>Name</label>
          <input type='text' name='name' className='w-full md:w-80 h-10 p-3 border rounded-xl outline-none focus:ring-2 focus:ring-yellow-500 text-[#321E1E]' placeholder='Enter your name' />
        </div>
        <div className='w-full mb-4'>
          <label className='block text-lg font-medium mb-2'>Email</label>
          <input type='email' name='email' className='w-full md:w-80 h-10 p-3 border rounded-xl outline-none focus:ring-2 focus:ring-yellow-500 text-[#321E1E]' placeholder='Enter your email address' />
        </div>
        <div className='w-full mb-4'>
          <label className='block text-lg font-medium mb-2'>Message</label>
          <textarea name='message' className='w-full h-32 p-3 border rounded-xl outline-none focus:ring-2 focus:ring-yellow-500 text-[#321E1E]' placeholder='Enter your message' />
        </div>
        <input type='submit' value="Send" className='w-full md:w-80 h-10 mt-4 bg-yellow-600 text-white font-semibold rounded-xl cursor-pointer hover:bg-yellow-700 transition duration-300' />
      </form>
    </div>
  );
}

export default Contact;
