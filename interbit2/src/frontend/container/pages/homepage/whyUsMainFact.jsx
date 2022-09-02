import React from 'react'
import "C:/Users/dell/Desktop/interbit2/src/frontend/container/styles/whyus.css"
import inno from 'C:/Users/dell/Desktop/interbit2/src/frontend/container/images/banefits-1.png'
import sec from 'C:/Users/dell/Desktop/interbit2/src/frontend/container/images/banefits-1.png'
import fast from 'C:/Users/dell/Desktop/interbit2/src/frontend/container/images/banefits-1.png'

const WhyUsMainFact = () => {
     return(
     <div className="after-body">
          <header className="whyus">
               <span className="why">Why Us</span>
          </header>
          <div className="y-card">
               <div className="why-card y1">
                    <div className='Y-card1'>
                         <span  className="yy">Innovative</span><br></br>
                         <img src={inno} alt ='' /><br></br>
                         <span>
                              We think outside the box for the best tech and ideas to ensure the smooth flow of your
                              crypto cashflow
                         </span>
                    </div>
               </div>
               <div className="why-card y2">
                    <div className='Y-card1'><span  className="yy">Secured</span><br></br>
                         <img src={sec} alt = '' /><br></br>
                         <span>
                            With our trusted services, best technology and encryption all you money trasanction and deals are safe and secured
                         </span>
                    </div>
               </div>
               <div className="why-card y3">
                    <div className='Y-card1'><span className="yy">Fast</span><br></br>
                         <img src={fast} alt ='' /><br></br>
                         <span>
                            We deliver faster than anyother crypto tech in Nigeria
                         </span>
                    </div>
               </div>
          </div>
     </div>
     )
}

export default WhyUsMainFact