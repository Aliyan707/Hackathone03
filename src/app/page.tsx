import React from 'react'
import Hero from './Components/Hero'
import Blog from './Components/Blog'
import Center from './Components/Center'
import Section2 from './Components/Section2'
import Section4 from './Components/Section4'
import Section3 from './Components/Section3'
import Lowerheader from './Components/Header'

const page = () => {
  return (
    <div>
      <Lowerheader/>
       <Hero/>
      <Blog />
      <Center />
      <Section2 />
      <Section3/>
      <Section4 />
      
    </div>
  )
}

export default page
