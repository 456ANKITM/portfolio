import React from 'react'
import Navbar from './layout/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Project from './sections/Project'
import Experience from './sections/Experience'
import Contact from './sections/Contact'
import Footer from './layout/Footer'
import Blogs from './sections/Blogs'

const App = () => {
  return (
    <div className='min-h-screen overflow-x-hidden'>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Project />
        <Experience />
        <Blogs />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
