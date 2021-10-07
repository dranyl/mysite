import React from 'react';
import image from '../images/pexels-anete-lusina-5240548.jpg';

export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt='background'
        className='absolute object-cover w-full h-full opacity-95'
      />
      <section className='relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8'>
        <h1 className='text-6xl text-green-300 font-normal cursive leading-none lg:leading-snug'>
          print("Hello, My name is {}".format("dranyl"[::-1]))
        </h1>
      </section>
    </main>
  );
}
