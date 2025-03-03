import React from 'react'
import { LuArrowDownRight } from "react-icons/lu";

const NavbarBtn = () => {
  return (
    <button className="px-4 py-2 rounded-full text-xl font-bold text-white border-[#009fb3] border flex items-center gap-1 bg-gradient-to-r from-[#009fb3] to-orange-500 hover:border-orange-500 hover:scale-110 transition-all duration-500 hover:shadow-[##5ECEDC80]">
      Hire Me
      <LuArrowDownRight />
    </button>
  );
}

export default NavbarBtn
