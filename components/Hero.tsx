import React from 'react'
import Navbar from './Navbar'

function Hero() {
  return (
    <>
    <section className="bg-black text-white min-h-screen flex flex-col justify-center items-center px-4 text-center">
      {/* Hero Content */}
      <div className="max-w-3xl">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Hi, I'm <span className="text-red-700">Areeba</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          A Passionate Web Developer & Designer
        </h2>
        <p className="text-lg md:text-xl mb-8">
          I create beautiful, responsive web applications using the latest technologies like Next.js, Tailwind CSS, and TypeScript.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex justify-center space-x-4">
          <a
            href="/about"
            className="bg-red-600 text-white font-bold py-3 px-6 rounded-full hover:text-white hover:bg-black transition duration-300"
          >
            View My Work
          </a>
          <a
            href="/contact"
            className="bg-transparent border border-white text-white font-bold py-3 px-6 rounded-full hover:bg-white hover:text-red-900 transition duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
    </>
  )
}

export default Hero