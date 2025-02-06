import React from 'react'
import Hero from "./Hero"
import Signin from '@/components/Signin/Signin'
import Signup from '@/components/Signup/Signup'
import Error from '@/components/Error/Error'
import Faq from '@/components/Faq/Faq'


const Contact = () => {
  return (
    <div>
      <Hero />
      <Signin/>
      <Error/>
      <Signup/>
      <Faq/>
      
      
      

    </div>
  )
}

export default Contact
