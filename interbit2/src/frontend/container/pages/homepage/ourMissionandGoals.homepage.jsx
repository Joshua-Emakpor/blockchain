import React from 'react'
import Pics from 'C:/Users/dell/Desktop/interbit2/src/frontend/container/images/benefits-5.png'
import 'C:/Users/dell/Desktop/interbit2/src/frontend/container/styles/ourmissionandgoals.css'

const OurMissionAndGoals = () => {
     return (
          <div>
                    <div className="mission">
          <div className = 'mission-title'>
               Our Mission
          </div>
          
          <div className="mt mt1i">
               <img className = 'mission-img' src={Pics} alt = '' width="maxContent" />
               <span>
                   To create an enabling environment for crypto workers and ensure smooth flow of cyber cash
              </span>
          </div>
              
          <div className="mt mt12">
               <img className = 'mission-img' src={Pics} alt = '' width="maxContent" />
               <span>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non vel suscipit ipsa beatae sunt vitae eum? Tenetur, ipsam consectetur magnam soluta vel veniam et dolores molestias perspiciatis similique sunt placeat.
              </span>
          </div>

              
          <div className="mt mt1i">
               <img className = 'mission-img' src={Pics} alt = '' width="maxContent" />
               <span>
                   To create an enabling environment for crypto workers and ensure smooth flow of cyber cash
              </span>
          </div>
     </div> 

     <div className="goals">
          <div className="goals-title">Our Goals</div>
          <div className="goal">
              <div className="goalT">
                   <li>Best ICO offers</li>
               </div>
          </div>
          <div className="goal">
              <div className="goalT">
                  <li> Encrypted money transfer</li>
               </div>
          </div>
          
          <div className="goal">
               <div className="goalT">
                    <li>  Not hackable</li>
                 
               </div>
          </div>
          
          <div className="goal">
              <div className="goalT">
                   <li>We offer at a the fastest</li>
               </div>
          </div>
     </div><br></br><br></br><br></br>
          </div>
     )
}

export default OurMissionAndGoals