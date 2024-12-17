// import React from 'react'

// const Center= () => {
//   return (
//     <div>
//       <section className="text-gray-600 body-font">


//   <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
//     <div className=''>
//     <span className='text-left m-5 p-5'>Featured</span>
//     </div>
//     <img className=" w-1440px
// " src="Runner.png" alt="" />
//     <br />
//     <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
//     <br />
        
//       <h1 className="font-HelveticaNeue sm:text-7xl text-3xl mb-4 font-medium text-gray-900">
//       STEP INTO WHAT FEELS GOOD
//       </h1>
      
//       <p className=" font-HelveticaNeue mb-8 leading-relaxed w-400 size-16px">
//       Cause everyone should know the feeling of running in that perfect pair.
//       </p>

//       <div className="flex">
//         <button className='flex-auto justify-center  text-white bg-black rounded-full mx-4 p-6 text-size-15px '>Find Your Shoes</button>
        
//       </div>
//     </div>
//   </div>
// </section>

//     </div>
//   )
// }

// export default Center

import React from 'react';

const Center = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
          <div className="w-full text-left ml-18 mb-5">
            <span className="text-lg font-semibold mx-16">Featured</span>
          </div>
          <img className="" src="Runner.png" alt="Runner" />
          <br />
          <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
            <h1 className="font-HelveticaNeue sm:text-7xl text-3xl mb-4 font-medium text-gray-900 mt-5">
              STEP INTO WHAT FEELS GOOD
            </h1>
            <p className="font-HelveticaNeue mb-8 leading-relaxed text-base md:text-lg max-w-lg">
              Cause everyone should know the feeling of running in that perfect pair.
            </p>
            <div className="flex">
              <button className="text-white bg-black rounded-full px-6 py-3 text-base font-medium hover:bg-gray-800">
                Find Your Shoes
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Center;
