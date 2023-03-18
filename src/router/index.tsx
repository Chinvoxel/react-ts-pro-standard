import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from '@/layout/Navbar'
import Home from '@/pages/home'
import About from '@/pages/about'
import Contact from '@/pages/contact'
import Debug from '@/pages/use/debug'
import Login from '@/pages/login'

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/debug" element={<Debug />} />
      </Routes>
    </Router>
  )
}

export default AppRouter
