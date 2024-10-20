import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Count from './count'
import Team from './Team'
import User from './User'
import Friends from './Friends'


function App() {
  function handleClick () {
    alert ('Button Click');
  }

  const handleClick2 = () => {
    alert ('Button 2 Clicked');
  }

  const addToFive = (num) => {
    alert (num+5);
  }

  return (
    <>
      <h1>Vite + React</h1>
      <Friends></Friends>
      <User></User>
      <Team></Team>
      
      <button onClick = {handleClick}>Click Me</button>
      <button onClick = {handleClick2}>Click Me 2</button>
      <button onClick={()=> {alert ('Third button clicked')}}>Click Me 3</button>
      <button onClick={()=>addToFive(3)}>Click 4</button> 
      {/* jodi parameter soho direct call kore dey tahole function button  e click korar agei call hoye jai tai ekta function diye etake wrap kora hoi */}
    </>
  )
}

export default App
