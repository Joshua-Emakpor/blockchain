import React from 'react'
import Chart from '../_reusable/chartSection.homepage'
import Header from '../_reusable/header'
import Footer from '../_reusable/footer'
import ExchangeBar from './exchangebar'
import SearchBox from '../_reusable/searchfield'
import {currencyAndValue} from '../_reusable/currenciesValues'

class Market extends React.Component {
     constructor() {
          super() 
          this.state = {
               searchState: '',
               data: currencyAndValue
          }
     }

     onSearchChange = (event) => {
          this.setState({ searchState : event.target.value })
          console.log(event.target.value)
     }

     render(){
          
          const filterData = this.state.data.filter(data => {
               return data.name.toLowerCase().includes(this.state.searchState.toLowerCase())
          })

     return(
          <div>
               <Header />
               <Chart />
               <SearchBox search = {this.onSearchChange}/>
               <ExchangeBar crypto = {filterData}/>
               <Footer />
          </div>

     )
     }
}

export default Market