import React, { useEffect, useState } from 'react'
import Button from '../components/Button'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
     setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll )
    return () => window.removeEventListener("scroll", handleScroll)
  },[])
  const navLinks = [
    {href:"#about", label:"About"},
    {href:"#projects", label:"Projects"},
    {href:"#experience", label:"Experience"},
    {href:"#testimonials", label:"Testimonials"},
  ]
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "glass-strong py-3" : "bg-transparent py-5"} `}>
      <nav className='container mx-auto px-6 flex items-center justify-between'>
        <a href="#" className='text-xl font-bold tracking-tight hover:text-primary'>AM <span>.</span></a>

        {/* Desktop Nav */}
        <div className='hidden md:flex items-center gap-1'>
            <div className='glass rounded-full px-2 py-1 flex items-center gap-1'>
              {navLinks.map((link, index) => (
                <a href={link.href} key={index} className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface">{link.label}</a>
              ))}
            </div>
        </div>
        {/* Call to action button  */}
        <div className="hidden md:block">
          <Button size="sm">Contact Me</Button>
        </div>

        {/* Mobile Menu Button  */}
        <button className='md:hidden p-2 text-foreground cursor-pointer' onClick={()=>setMobileMenu(!mobileMenu)}>
          { mobileMenu ?  <X size={24} /> : <Menu size={24}/> }
        </button>
      </nav>
       {/* Mobile Menu  */}
      { mobileMenu && <div className="md:hidden glass-strong animate-fade-in">
           <div className='container mx-auto px-6 py-6 flex flex-col gap-4'>
                {navLinks.map((link, index) => (
                <a href={link.href} key={index} onClick={()=>setMobileMenu(false)} className="text-lg text-muted-foreground hover:text-foreground py-2">{link.label}</a>
              ))}
              <Button onClick={()=>setMobileMenu(false)}>Contact Me</Button>
           </div>
       </div>}
      
    </header>
  )
}

export default Navbar
