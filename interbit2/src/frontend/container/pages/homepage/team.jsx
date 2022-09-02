import React from 'react'
import Pics from 'C:/Users/dell/Desktop/interbit2/src/frontend/container/images/20220807_144047.jpg'
import 'C:/Users/dell/Desktop/interbit2/src/frontend/container/styles/team.css'

const Team = () => {
     return(
          <div>
          <div className="team">
          <div className="team-title">Team Of Experts</div> 
          <div className="josh">
               <img src={Pics} width = '300px' alt = '' />
               <div className="josh-text"><span>Joshua Emakpor</span></div>
               
          </div>
     </div>
          </div>
     )
}

export default Team