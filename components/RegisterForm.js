"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const RegisterForm = () =>{
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      setError("All fields are necessary");
      return;
    }

    try {
      const resUserExists = await fetch("api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "applications/json",
        },
        body: JSON.stringify({
          email
        }),
      })
      const {user} = await resUserExists.json();
      if(user){
        setError("User already exists")
        return;
      }

      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "applications/json",
        },
        body: JSON.stringify({
          username, email, password,
        }),
      })
      if (res.ok){
        const form = e.target;
        form.reset();
        router.push("/login")
      }else{
        console.log("User registration failed")
      }
    } catch (error) {
      console.log("Error during registration: ", error)
    }
  }

  return (
    <div className='container w-full h-[100vh] flex items-center justify-center text-white'>
      <form onSubmit={handleSubmit} className='form bg-[#321E1E] p-[50px] rounded-lg w-[500px] h-[650px] flex flex-col justify-center items-center gap-5'>
        <Image src="/gif/EventziaLogo.gif" alt="logo" width={120} height={120} />
        <h1 className='text-white font-bold text-2xl'>Register</h1>
        {error && (<div className='text-sm text-red-600'>{error}</div>)}

        <input type='text' placeholder='Enter username' className='p-[20px] border border-[#503C3C] rounded-lg bg-[#321E1E] text-white w-full' onChange={(e) => setUsername(e.target.value)} value={username} />

        <input type='text' placeholder='Enter Email' className='p-[20px] border border-[#503C3C] rounded-lg bg-[#321E1E] text-white w-full' onChange={(e) => setEmail(e.target.value)} value={email} />

        <input type='password' placeholder='Enter Password' className='p-[20px] border border-[#503C3C] rounded-lg bg-[#321E1E] text-white w-full' onChange={(e) => setPassword(e.target.value)} value={password} />

        <button className='p-[20px] bg-[#d4af37] rounded-lg text-[#321E1E] border-none cursor-pointer w-full'>Register</button>
        <Link className="text-sm" href={"/login"}>Already have an account? <span className='underline'>Login</span></Link>
      </form>
    </div>
  )
}

export default RegisterForm