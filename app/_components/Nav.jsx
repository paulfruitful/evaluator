import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {
    SignInButton,
    SignedIn,
    SignUp,
    SignedOut,
    UserButton,
    SignUpButton
  } from '@clerk/nextjs'
  
const Nav = ({ josefin, mulish }) => {
  return (
    <div className="flex w-full justify-between bg-transparent">
      <div className="flex items-center p-6">
        <img
          src="/logo.png"
          className="w-[60px] lg:w-[80px] lg:h-[80px] p-3 h-[60px]"
          alt="Logo"
        />
        <span
          className={`text-3xl lg:text-[2.7rem] pt-3 lg:pt-4 text-center ${josefin.className} font-bold text-white`}
        >
          Evaluator
        </span>
      </div>

      <div className="flex items-center p-3 lg:p-6 lg:hidden">
        <button className="text-white text-2xl">
          <i className="fas fa-bars"></i> 
        </button>
      </div>
      
         
       
      <div className="hidden lg:flex items-center space-x-2 self-center p-3 lg:p-6">
     <SignedOut>  
       <a
          href="#"
          className={`bg-white rounded-lg ${mulish.className} p-2 lg:p-3 text-sm lg:text-lg font-semibold text-indigo-600`}
        >
        <SignInButton />
 
      </a>
      <a
          href="#"
          className={`bg-transparent rounded-lg ${mulish.className} p-2 lg:p-3 text-sm lg:text-lg font-semibold border-2 border-white border-solid flex shadow-lg text-white`}>
            <SignUpButton/>
            </a>  
      </SignedOut> 
        
        <SignedIn>
            <UserButton />
       </SignedIn>
      </div>
    </div>
  );
};

export default Nav;
