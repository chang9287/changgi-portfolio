import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import MainLayout from './layouts/MainLayout'
import { Home, About, Projects, ProjectDetail, Contact, NotFound } from './pages'
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

      <Routes>
        <Route element={<MainLayout />}>
         <Route path='/' element={<Home />} />
         <Route path='/about' element={<About />} />
         <Route path='/projects' element={<Projects />} />
         <Route path='/projects/:id' element={<ProjectDetail />} />
         <Route path='/contact' element={<Contact />} />
        </Route>
        <Route 
          path='/projects/not-found' 
          element={<NotFound 
            targetName={"프로젝트"} 
            linkTo={"/projects"} 
            buttonText={"Projects"} />
          } 
         />
         <Route 
            path='*' 
            element={<NotFound 
              targetName={"페이지"} 
              linkTo={"/"} 
              buttonText={"Home"} />
            } 
          />
      </Routes>
     </>
  )
}

export default App