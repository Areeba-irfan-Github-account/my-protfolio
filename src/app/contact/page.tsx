'use client';

import React, { FormEvent, useState } from 'react';
import Navbar from '../../../components/Navbar'
// import { BackgroundBeams } from '../components/ui/background-beams';


  

function page() {
    const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Submitted:', { email, message });
  };
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-100 dark:bg-black py-12 pt-36 relative">
      {' '}
    
      <div className="max-w-2xl mx-auto p-4 relative z-10">
        {' '}

        <h1 className="text-3xl md:text-7xl text-center font-sans font-bold mb-8 text-white">
          Contact <span className='text-red-800'>Us</span>
        </h1>
        <p className="text-neutral-300 max-w-lg mx-auto my-2 text-sm text-center">
          We&apos;re here to help with any questions about our courses,
          programs, or events. Reach out and let us know how we can assist you
          in your musical journey.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-100 text-gray-200"
            required
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-100 text-gray-200"
            rows={5}
            required
          ></textarea>
          <button
            type="submit"
            className="bg-red-600 text-white font-bold py-3 px-6 rounded-full hover:text-white hover:bg-black transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
    </>
  )
}

export default page