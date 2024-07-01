"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'

const LoginForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      })
      if (res.error) {
        setError("Invalid Credentials")
        return;
      }
      router.replace("dashboard")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='container w-full h-[100vh] flex items-center justify-center text-white p-4 md:p-0'>
      <form
        onSubmit={handleSubmit}
        action=''
        className='form bg-[#321E1E] p-6 md:p-[50px] rounded-lg w-full max-w-[500px] h-auto md:h-[600px] flex flex-col justify-center items-center gap-5'
      >
        <Image src="/gif/EventziaLogo.gif" alt="logo" width={120} height={120} />
        <h1 className='text-white font-bold text-2xl'>Login</h1>
        {error && (<div className='text-sm text-red-600'>{error}</div>)}

        <input
          type='text'
          placeholder='Enter Email'
          className='p-4 border border-[#503C3C] rounded-lg bg-[#321E1E] text-white w-full'
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type='password'
          placeholder='Enter Password'
          className='p-4 border border-[#503C3C] rounded-lg bg-[#321E1E] text-white w-full'
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className='p-4 bg-[#d4af37] rounded-lg text-[#321E1E] border-none cursor-pointer w-full'>Login</button>
        <Link className="text-sm" href={"/register"}>
          Don&apos;t have an account? <span className='underline'>Register</span>
        </Link>
      </form>
    </div>

  )
}

export default LoginForm

