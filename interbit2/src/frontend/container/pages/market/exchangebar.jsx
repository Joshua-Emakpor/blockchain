import {React} from 'react'
import 'C:/Users/dell/Desktop/interbit2/src/frontend/container/styles/exchangebar.css'
import DataDisplay from '../_reusable/dataDisplay'

const ExchangeBar = ({crypto}) => {

     return (
          <div>
             {
               crypto.map((user, i) => {
                    return (
                         <DataDisplay  
                              key = {i}
                              id = {crypto[i].id}
                              name = {crypto[i].name}
                              value = {crypto[i].value}
                              dummy = {crypto[i].dummy}
                         />
                    )
               })
             }
             
             {/* <DataDisplay name= {crypto[0].name}  value= {crypto[1].value} /> */}


       </div>
     )
          
}

export default ExchangeBar