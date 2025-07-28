import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductCard from './components/productCard.jsx'
import UserData from './components/UserData.jsx'
import Testing from './components/testing.jsx'
import LoginPage from './pages/loginPage.jsx'
import SignInPage from './pages/signInPage.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/homePage.jsx'
import AdminHomePage from './pages/adminHomePage.jsx'
import DesignTest from './pages/designtest.jsx'
import { Toaster } from 'react-hot-toast'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      
     <BrowserRouter>
     <Toaster />
      <Routes path="/*">
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<DesignTest />} />
        <Route path="/signInPage" element={<SignInPage />} />
        <Route path="/admin/*" element={<AdminHomePage />} />
        <Route path="/design" element={<DesignTest />} />
        <Route path="/*" element={<HomePage />} />
      </Routes>
     </BrowserRouter>
      

    </>
  )
}

export default App
