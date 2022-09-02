import React from 'react'
import LogoPics from "C:/Users/dell/Desktop/interbit2/src/frontend/container/images/20220807_004246.png"
import {Link} from 'react-router-dom'
import 'C:/Users/dell/Desktop/interbit2/src/frontend/container/styles/login-signup.css'


export const LogIn = () => {
     return (
          <div className = 'log'>
            <form>
               <div className = 'login-img'>
                 <img src = {LogoPics} alt = '' />
              </div>
               <div className = 'login-params'>
                  <div className = 'login-unit'>
                     <div className  = 'login-input'>
                        <input 
                        className=' input input-name input-log' 
                        type='text' 
                        required 
                        placeholder = 'Username' /><br></br>
                        <input
                         className =  ' input  input-pass input-log' 
                         required
                         type='password' 
                         placeholder = 'password' /><hr></hr>
                     </div>

                     <div  className = 'login-btn'>
                        <Link to = '/market'>
                        <input type = 'submit' className = 'log-in-button input' value = 'Login' />
                        </Link>
                     </div>
                  </div>
                  <div className = 'options'>
                     <h2>Don't have an account?</h2>
                     <Link className = 'signup-link' to = '/signup'>Signup</Link>
                  </div>
               </div>
            </form>
          </div>
     )
}


export const SignUp = () => {
   return (
        <div className = 'log sign'>
         <form>
            <div className = 'signup-img'>
               <img src = {LogoPics} alt = '' />
               <span>Have an account?
                  <Link className = 'sgn' to ='/login'>Login</Link>
               </span>
            </div>

            <div className  = 'signup-input'>
               <div className = 'signup-div1'>
                  
               <input className='input-name input-sign input' type='text' required placeholder = 'Username' /><br></br>
               <input className='input-email input-sign input' type='email' required placeholder = 'Email or Phone Number' /><br></br>

               </div>
               <div className = 'signup-div2'>

               <input className='input-name input-sign input' type='password' required placeholder = 'Password' /><br></br>
               <input className = 'input-pass input-sign input' type='password' required placeholder = 'Confirm Password' />

               </div>

            </div><hr></hr>

               <div  className = 'login-btn'>
                  <Link to = '/market'>
                  
                 <input type = 'submit' className = 'log-in-button input' value = 'SignUp' />
                  </Link>
               </div>
          </form>
          <div>Terms and Policy</div>
        </div>
   )
}

export default LogIn