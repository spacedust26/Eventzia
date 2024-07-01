"use client"
import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [error, setError] = useState([])
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const res = await fetch("api/contact",{
      method: "POST",
      headers:{
        "Content-type" : "application/json",
      },
      body: JSON.stringify({
        name, email, message,
      }),
    })

    const {msg, success} = await res.json();
    setError(msg);
    setSuccess(success)
    if(success){
      setName("");
      setEmail("");
      setMessage("");
    }
  }

  return (
    <div id='contact'>
      <h2 className='text-center text-4xl font-bold my-8'>Contact Us</h2>
      <form className='flex flex-col justify-center items-center w-full max-w-xl mx-auto p-6 bg-[#321E1E] shadow-lg rounded-xl text-[#d4af37]' onSubmit={handleSubmit}>

        <div className="w-full mb-4">
          {error && error.map((e, index) => <div key={index} className={`${success ? "text-green-600" : "text-red-600"} text-sm`}>{e}</div>)}
        </div>

        <div className='w-full mb-4'>
          <label className='block text-lg font-medium mb-2' htmlFor='name'>Name</label>
          <input type='text' id='name' className='w-full md:w-80 h-10 p-3 border rounded-xl outline-none focus:ring-2 focus:ring-yellow-500 text-[#321E1E]' placeholder='Enter your name' onChange={(e) => setName(e.target.value)} value={name} />
        </div>
        <div className='w-full mb-4'>
          <label className='block text-lg font-medium mb-2' htmlFor='email'>Email</label>
          <input type='text' name='email' id='email' className='w-full md:w-80 h-10 p-3 border rounded-xl outline-none focus:ring-2 focus:ring-yellow-500 text-[#321E1E]' placeholder='Enter your email address' onChange={(e) => setEmail(e.target.value)} value={email} />
        </div>
        <div className='w-full mb-4'>
          <label className='block text-lg font-medium mb-2' htmlFor='message'>Message</label>
          <textarea name='message' id='message' className='w-full h-32 p-3 border rounded-xl outline-none focus:ring-2 focus:ring-yellow-500 text-[#321E1E]' placeholder='Do you have any message or query? Write to us.' onChange={(e) => setMessage(e.target.value)} value={message} />
        </div>
        <button type='submit' value="Send" className='w-full md:w-80 h-10 mt-4 bg-yellow-600 text-white font-semibold rounded-xl cursor-pointer hover:bg-yellow-700 transition duration-300'>Send</button>
      </form>
    </div>
  );
}

export default Contact;
