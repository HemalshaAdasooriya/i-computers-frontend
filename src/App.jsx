import './App.css'
import Header from './components/header'
import ProductCard from './components/productCard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/homePage'
import LoginPage from './Pages/loginPage'
import RegisterPage from './Pages/registerPage'
import AdminPage from './Pages/adminPage'


function App() {

  return (
    <BrowserRouter>
            <div className="w-full h-screen bg-primary">
    
                <Routes path="/">
                    <Route path="/*" element={<HomePage/>} />
                    <Route path="/login" element={<LoginPage/>} />
                    <Route path="/register" element={<RegisterPage/>} />
                    <Route path="/admin/*" element={<AdminPage/>} />
                    
    
                </Routes>
            </div>
        </BrowserRouter>
  )
}

export default App
