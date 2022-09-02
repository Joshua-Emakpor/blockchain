import React from 'react'
import "C:/Users/dell/Desktop/interbit2/src/frontend/container/styles/introbody.css"
import {
     Link
   } from "react-router-dom";


const IntroBody = () => {
     return (

          <div className='body' >
          <div className="body-text">
               <span>InterBit</span> is one of the best Cryptocurrency trading platform in Nigeria<br></br>
               <p className="body-text-sub">
                    With the best crypto technology
               </p>
           <nav>
                         <ul>
                              <li>
                              <button  className="btn-bodyText" >
                               <Link className = 'Link' to = '/login'>
                                 Trade With Us               
                              </Link>  
                              </button>
                              </li>
                         </ul>
          </nav>
           {/* <Switch>
          <Route path="/market">
            <Market />
          </Route>
          </Switch> */}
      </div>
     </div>
     )
}

export default IntroBody 