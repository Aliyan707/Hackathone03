import React from 'react'
import Hero from '../components/Hero'
import Blog from '../components/Blog'
import Center from '../components/Center'
import Section2 from '../components/Section2'
import Section4 from '../components/Section4'
import Section3 from '../components/Section3'
import Lowerheader from '../components/Header'

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
