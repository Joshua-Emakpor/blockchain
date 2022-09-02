import React from 'react'
import 'C:/Users/dell/Desktop/interbit2/src/frontend/container/styles/exchangebar.css'

const DataDisplay = ({name, value, dummy}) => {
     return(
          <div className = 'all-cur gen-market'>
               <div className = 'cur' >
                    <span className = 'name hd'>{name}</span>        
                    <span className = 'value hd'>{value}</span>     
                    <span className = 'dummy hd'>{dummy}</span>  
               </div>    
          </div>
     )
}

export default DataDisplay