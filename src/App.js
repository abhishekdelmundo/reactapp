import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './pages/About.jsx'
import Blog from './pages/Blog.jsx'
import Home from './pages/Home.jsx'
import Error from './pages/Error.jsx'
import Login from './pages/login.jsx'
import Contact from './pages/Contact.jsx';
import MovieState from './Movie/MovieState.jsx'


function App() {

  
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/blog" element={<Blog/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="contact" element={<Contact/>} />
      <Route path="*" element={<Error/>} />
      <Route path="movie" element={<MovieState/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}


export default App

