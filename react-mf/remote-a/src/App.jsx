import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(props) {
  const [count, setCount] = useState(0)
  console.log(props.data);
  return (
    <>
      
      <p className="read-the-docs">
       Remote-A MicroFrontEnd - {JSON.stringify(props.data)}
      </p>
    </>
  )
}

export default App
