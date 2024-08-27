"use client"
import React from 'react'
import { useClerk } from '@clerk/nextjs'
import { useRouter } from 'next/navigation';
const page = () => {
  const { user } = useClerk();
  const router=useRouter()
  if(!user){
    router.push('/')
 }

  return (
    <div>
      
    </div>
  )
}

export default page
