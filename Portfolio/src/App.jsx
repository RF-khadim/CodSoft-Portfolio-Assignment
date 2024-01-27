import './App.css'
import Home from './assets/Routes/Home'
import Contact from './assets/Routes/Contact'
import Project from './assets/Routes/Project'
import About from './assets/Routes/About'
import { Route, Routes } from "react-router-dom"

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Project' element={<Project />} />
      </Routes>
    </>
  )
}

export default App
