import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MenuBar } from './components/header/MenuBar'
import { Footer } from './components/footer/footer'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <MenuBar />
    <Outlet />
    <Footer />
     
    </>
  )
}

export default App
