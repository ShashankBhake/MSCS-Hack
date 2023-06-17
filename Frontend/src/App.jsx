import { useState } from 'react'

import './App.css'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Home from './components/Home'

function App() {

  const [logged, setLogged] = useState(true)
  
  return (
    <>
      {
        logged ?  <Home/> : <SignIn/> 
      }
      
    </>
  )
}

export default App
