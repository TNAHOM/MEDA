import React from 'react';

const Hero = () => {
  return (
    <div className='my-4 px-6 py-7 bg-gradient-to-t from-lightGreen to-darkGreen rounded-2xl text-white space-y-6'>
      <h1 className='text-2xl font-bold'>Summer Tournament 2025</h1>
      <p className='text-lg'>Register now and compete with the best teams!</p>

      <button className='rounded-full px-6 py-3 bg-white text-darkGreen font-semibold text-base'>Join Now</button>
    </div>
  );
};

export default Hero;