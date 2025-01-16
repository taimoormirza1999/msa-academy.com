import React from 'react'
import { Link } from 'react-scroll'

function Button({isRounded = true}) {
  const style2 = {
    "--bgColor": '#25d366',
      };
  return (
    <div
    className="outter-wrapper"
  >
    <div className="wrapper-inner-main ">
      
         <Link 
      to='enroll-checkout' 
      className={` animate-pulse2 bg-red cursor-pointer text-white border-2 border-red hover:border-black hover:text-white py-3 text-sm md:text-[1.129rem] font-medium px-6 md:px-7  shadow-lg transform transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl shadow-red/70 ${isRounded ? 'rounded-[14px]' : 'rounded-[0.7rem]'}`}
    >ENROLL NOW!
    </Link>
    </div>
    </div>
   
  
  )
}

export default Button