import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import { Home, About, Projects, ProjectDetail, Contact, NotFound } from './pages'
import './App.css'

function App() {

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/projects/:id' element={<ProjectDetail />} />
        <Route path='/contact' element={<Contact />} />
      </Route>
      <Route 
        path='*' 
        element={<NotFound 
          targetName={"페이지"} 
          linkTo={"/"} 
          buttonText={"Home"} />
        } 
      />
    </Routes>
  )
}

export default App