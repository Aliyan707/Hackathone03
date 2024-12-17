import React from 'react'

const Hero = () => {
  return (
    <div>
      
      <section className="text-gray-600 body-font">
        
  <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
    <img
      className=""
      alt="hero"
      src="Hero.png"
    />
    <br />
    <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
    <p className=' font-HelveticaNeue  text-gray-900 flex-auto justify-center text-2xl'>Frist Look</p>

    <br />
        
      <h1 className="font-HelveticaNeue sm:text-7xl text-3xl mb-4 font-medium text-gray-900">
      Nike Air Max Pulse
      </h1>
      
      <p className=" font-HelveticaNeue mb-8 leading-relaxed w-400 size-16px">
      Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse <br />
    
      —designed to push you past your limits and help you go to the max.
      </p>

      <div className="flex">
       
        <button className='button flex-auto justify-center  text-white bg-black rounded-full mx-4 p-6 text-size-15px '>Notify Me</button>
        
        <button className=' flex-auto justify-center  text-white bg-black rounded-full mx-1 p-6 text-size-15px'>Shop Air Max</button>
      
      </div>
    </div>
  </div>
  
</section>

    </div>
  )
}

export default Hero
