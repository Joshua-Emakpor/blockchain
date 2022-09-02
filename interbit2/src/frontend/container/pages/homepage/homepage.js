import React from 'react';
import Header from '../_reusable/header';
import IntroBody from './introBody.homepage'
import WhyUsMainFact from './whyUsMainFact'
import  Chart from '../_reusable/chartSection.homepage'
import Fact from './fact'
import OurMissionAndGoals from './ourMissionandGoals.homepage'
import Team from './team'
import Footer from '../_reusable/footer'

const Homepage = ()=> {
     return (
          <div>
               <Header  />
               <IntroBody  />
               <WhyUsMainFact />
               <Chart />
               <Fact />
               <OurMissionAndGoals />
               <Team />
               <Footer />
          </div>
     )
}


export default Homepage