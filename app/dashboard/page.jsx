"use client"
import React from 'react'
import { useClerk } from '@clerk/nextjs'
import { useUser } from '@clerk/nextjs';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Chat from '../_components/Chat';
const page = () => {
    const { isLoaded, isSignedIn, user } = useUser();
    const router = useRouter();
  
    useEffect(() => {
      if (isLoaded && !isSignedIn) {
      }
    }, [isLoaded, isSignedIn, router]);

  return (
    <div style={{height:'100vh'}} className=' w-full flex flex-col justify-center items-center bg-[#4F46E5]'>
      <Chat/>
    </div>
  )
}

export default page
