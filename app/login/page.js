import { getServerSession } from "next-auth";
import {redirect} from "next/navigation"
import { authOptions } from "../api/auth/[...nextauth]/route";
import React from 'react'
import LoginForm from "@/components/LoginForm"
  
const loginPage = async () => {
  const session = await getServerSession(authOptions);
  if(session) redirect("/dashboard")
  return (
    <>
      <LoginForm />
    </>
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
