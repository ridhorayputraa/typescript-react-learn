import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Post from './components/Post'
import Data from './components/Data'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
  <Post/>
  <Data/>
    </div>
  )
}

export default App
