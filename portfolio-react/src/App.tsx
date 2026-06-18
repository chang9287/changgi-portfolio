import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import { Home, About, Projects, Contact } from './pages'
import './App.css'


function App() {

  return (
    <>
      <Toaster position='top-center' reverseOrder={false}/>

      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
