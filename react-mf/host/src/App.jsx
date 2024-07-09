import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from './component/navbar';
import Container from './component/container';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Container/>
    </>
  )
}

export default App
