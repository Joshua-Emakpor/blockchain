import {React, Component} from 'react'
import './app.css'
import {LogIn, SignUp} from './pages/login-signup/login';
import Market from './pages/market/market';
import Homepage from './pages/homepage/homepage';
import { Route, Routes } from "react-router-dom";




class App extends Component {
  render(){
    return (
      <div className='app'>
        <Routes>
          <Route path = '/' element = {<Homepage />}/>
          <Route path = '/market' element = {<Market />}/>
          <Route path = '/login' element = {<LogIn />}/>
          <Route path = '/signup' element = {<SignUp />}/>
        </Routes>
      </div>
    )
  }
}

export default App;


