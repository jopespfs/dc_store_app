import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NotFound } from './pages/notFound/NotFound.jsx'
import { Produtos } from './pages/produtos/Produtos.jsx'
import { Home } from './pages/home/Home.jsx'
import { Categorias } from './pages/categorias/Categorias.jsx'
import { Login } from './pages/login/login.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<App />}>
          <Route path="" element={<Home/>} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/categorias" element={<Categorias/>} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
