import React from 'react'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import './App.css'
import Companies from './Companies/Companies'
function App() {
  return (
    <div className='App'>
      <div> 
      <div className="white-gradient"/>
       <Header />
       <Hero/>
       </div>
       <Companies/>
    </div>
  )
}

export default App
