import React from 'react'

const Links = [
  {link:"About Me", section:"about"},
  {link:"skills", section:"skills"},
  {link:"Experience", section:"experience"},
  {link:"Projects", section:"projects"},,
  {link:"Contact", section:"contact"},
]

const NavbarLinks = () => {
  return (
    <ul className='flex gap-6 text-white  text-center py-4 '>
      {Links.map((link,index)=>{
        return (
          <li key={index} className="group">
            <a
              href="#"
              className="cursor-pointer text-white hover:text-[#15d139] transition-all duration-300"
            >
              {link.link}
            </a>
            <div className="mx-auto bg-[#15d139] w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
          </li>
        );
      })}
    </ul>
  )
}

export default NavbarLinks
