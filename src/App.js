import React, { Component } from 'react'
import './App.css'
import Header from './components/HeaderTab/Header'
import Home from './components/HomeTab/Home'
import Bottom from './components/HomeTab/Bottom'

class App extends Component {
  render() {
    return (
      <div className="body">
        <Header/>
        <Home/>
        <Bottom/>
        
      </div>
    )
  }
}

export default App
