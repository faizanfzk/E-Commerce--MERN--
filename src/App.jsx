import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Products } from './Components/Products'
import { Home } from './Components/Home'
import { HNews } from './Components/Newsletter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Home/>
   {/* <Products/>   */}
   {/* <HNews/> */}
    </div>
  )
}

export default App
