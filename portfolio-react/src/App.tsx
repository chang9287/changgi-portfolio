import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import { Home, About, Projects, ProjectDetail, Contact } from './pages'
import Preloader from './components/ui/Preloader'
import './App.css'


function App() {
  const [isLoading, setIsLoading] = useState(() => {
    return sessionStorage.getItem("visited") ? false : true
  });

  if(isLoading) {
    return <Preloader finishLoading = {() => {
      sessionStorage.setItem("visited", "true");
      setIsLoading(false);
    }}/>
  };

  return (
    <>
      <Toaster position='top-center' reverseOrder={false}/>

      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/projects/:id' element={<ProjectDetail />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App