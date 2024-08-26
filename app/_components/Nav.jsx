import React from 'react'

const Nav = ({josefin,mulish}) => {
  return (
    <div className='flex w-full justify-between bg-transparent'>
      <div className="flex self-center items-center p-6">
        <img src="/logo.png" className='w-[60px] lg:w-[80px] lg:h-[80px] p-3 h-[60px]' alt="" />
        <span className={`text-3xl lg:text-[2.7rem] pt-3 lg:pt-4 text-center ${josefin.className} font-bold text-white`}>Evaluator</span>
      </div>

      <div className="justify-self-end items-center self-center p-3 lg:p-6">
        <a href="" className={`bg-white self-center rounded-lg ${mulish.className} p-3 text-lg font-semibold mx-1 text-indigo-600`}>Login</a>
        <a href="" className={`bg-transparent self-center rounded-lg ${mulish.className} p-3 text-lg font-semibold border-2 border-white border-solid shadow-lg text-white`}>Sign Up</a>

      </div>
    </div>
  )
}

export default Nav
