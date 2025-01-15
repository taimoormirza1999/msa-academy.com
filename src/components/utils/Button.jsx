import React from 'react'
import { Link } from 'react-scroll'

function Button({isRounded = true}) {
  return (
    <Link 
      to='enroll-checkout' 
      className={`animate-bounce bg-red cursor-pointer text-white border-2 border-red hover:border-black hover:text-white py-3 text-sm md:text-lg font-medium px-6 md:px-8  shadow-lg transform transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl shadow-red/70 ${isRounded ? 'rounded-[2rem]' : 'rounded-[0.7rem]'}`}
    >ENROLL NOW!
    </Link>
  
  )
}

export default Button