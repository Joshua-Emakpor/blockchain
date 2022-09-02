import React from 'react'
import LogoPics from "C:/Users/dell/Desktop/interbit2/src/frontend/container/images/20220807_004246.png"
import {Link} from 'react-router-dom'
import "C:/Users/dell/Desktop/interbit2/src/frontend/container/styles/header.css"

const Header = (route) => {
     return (
          <div className='head'>

          <div className="img-logo">

               <img src= {LogoPics}  alt = 'logo img' className='logo-img' />

               <span className='title'>InterBit</span>

          </div>

          <div className='log-in-up'>

               <Link to = './login'>
               <span className="login">
                    LogIn
               </span>
               </Link>
               <span className="logup">
                    <Link to ='./signup'>
                    <button className='signup-btn'>
                         SignUp
                    </button>
                    </Link>
               </span>

          </div>

     </div>
     )
}

export default Header