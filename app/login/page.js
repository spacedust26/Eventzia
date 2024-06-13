import React from 'react'
import Image from 'next/image'

const loginPage = () => {
  return (
    <div className='container w-full h-[100vh] flex items-center justify-center'>
        <form action='' className='form bg-[#321E1E] p-[50px] rounded-lg w-[570px] h-[570px] flex flex-col justify-center items-center gap-5'>
            <Image src="/gif/EventziaLogo.gif" alt="logo" width={120} height={120} />
            <h1 className='text-white font-bold text-2xl'>Login</h1>
            <input type='text' placeholder='Enter Username' className='p-[30px] border border-[#503C3C] rounded-lg bg-[#321E1E] text-white w-full' />
            <input type='password' placeholder='Enter Password' className='p-[30px] border border-[#503C3C] rounded-lg bg-[#321E1E] text-white w-full' />
            <button className='p-[30px] bg-[#d4af37] rounded-lg text-[#321E1E] border-none cursor-pointer w-full'>Login</button>
        </form>
    </div>
  )
}

export default loginPage



































// "use client"
// import React, { useState } from 'react'
// import './login.css';
// import { FaUser } from "react-icons/fa";
// import { FaLock } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";

// const LoginRegister = () => {

//   const [action,setAction]=useState('');

//   const registerLink = () =>{
//     setAction('active');
//   }

//   const loginLink = () =>{
//     setAction('');
//   }

//   return (
//     <div className={`wrapper${action}`}>
//         <div className='form-box login'>
//             <form action=" ">
//                 <h1>Login</h1>
//                 <div className="input-box">
//                     <input type="text" 
//                     placeholder='Username' 
//                     required/>
//                     <FaUser className='icon'/>
//                 </div>
//                 <div className="input-box">
//                     <input type="password" 
//                     placeholder='Password' 
//                     required/>
//                     <FaLock className='icon'/>
//                 </div>
//                 <div className="remember-forgot">
//                     <label><input type="checkbox" />Remeber me</label>
//                     <a href="#">Forgot password?</a>    
//                 </div>
//                 <button type="submit">Login</button>
//                 <div className="register-link">
//                     <p>Don't have an account?<a href='#' onClick={registerLink}>Register</a></p>
//                 </div>
//             </form>
//         </div>

//         <div className='form-box register'>
//             <form action=" ">
//                 <h1>Registration</h1>

//                 <div className="input-box">
//                     <input type="text" 
//                     placeholder='Username' 
//                     required/>
//                     <FaUser className='icon'/>
//                 </div>

//                 <div className="input-box">
//                     <input type="email" 
//                     placeholder='Email' 
//                     required/>
//                     <MdEmail  className='icon'/>
//                 </div>

//                 <div className="input-box">
//                     <input type="password" 
//                     placeholder='Password' 
//                     required/>
//                     <FaLock className='icon'/>
//                 </div>

//                 <div className="remember-forgot">
//                     <label><input type="checkbox" />I agree to the term & conditions</label>
                       
//                 </div>

//                 <button type="submit">Register</button>

//                 <div className="register-link">
//                     <p>Don't have an account?<a href='#' onClick={loginLink}>Login</a></p>
//                 </div>

//             </form>
//         </div>
//     </div>
//   );
// };

// export default LoginRegister;