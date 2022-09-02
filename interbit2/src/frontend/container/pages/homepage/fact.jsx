import React from 'react'
import 'C:/Users/dell/Desktop/interbit2/src/frontend/container/styles/fact.css'
import Pics from 'C:/Users/dell/Desktop/interbit2/src/frontend/container/images/trade-icon-2.png'

const Fact = () => {
     return (
          <div>
               <div className="fact ">
                    <div className="fact-title">
                         Main fact About Our Coin and Wallet
                    </div>
                    <div className='fact-cards'>
                         <div className='fact-card firstF'>
                              <div className="instant ff">
                                   <img src={Pics} alt = '' /><br></br>
                                   <span className="FstT">Instant Payout</span>
                              </div>
                              <div className="discount ff">
                                   <img src={Pics} alt = ''/><br></br>
                              <span className="FstT">Good Discount</span>
                         </div>
                         <div className="amazing ff">
                              <img src={Pics} alt = ''/><br></br>
                              <span className="FstT">Ammazing Offers</span><br></br>
                         </div>
                    </div>
               </div>
          </div>
          </div>
     )
}

export default Fact