import React from 'react'
import Hero from "./Hero"
import Signin from '@/components/Signin/Signin'
import Signup from '@/components/Signup/Signup'
import Error from '@/components/Error/Error'


const Contact = () => {
  return (
    <div>
      <Hero />
      <Signin/>
      <Error/>
      <Signup/>
      
      
      

    </div>
  )
}

export default Contact
