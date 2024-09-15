import React from 'react'
import Navbar from '../../../components/Navbar'

function page() {
  return (
    <>
    <Navbar/>
    <div className='min-h-screen bg-black text-gray-200 '>
        <section className='py-16 px-4 md:py-24'>
            <div className='container mx-auto text-center'>
                <h1 className='text-4xl md:text-5xl font-extrabold mb-6'>About <span className='text-red-700 font-extrabold'>Me</span></h1>
                <p className='text-lg md:text-xl mb-8 max-w-3xl mx-auto'>
                Hello! I'm Sara, a passionate web developer and software engineer based in [Your Location]. 
            With a keen interest in creating intuitive and responsive web applications, I specialize in using modern technologies 
            such as <span className="font-semibold">Next.js</span>, <span className="font-semibold">TypeScript</span>, and <span className="font-semibold">Tailwind CSS</span>.
            My goal is to build elegant and efficient solutions that enhance user experiences.
                </p>
                <div className='mb-14 p-9'>
                    <h2 className='text-3xl font-bold mb-6'>Skills <span className='text-red-700 font-extrabold'>&</span> Tech</h2>
                    <div className='flex flex-wrap justify-center gap-4'>
                        <span className='bg-pink-600 text-white px-4 py-2 rounded-full text-lg'>Next.js</span>
                        <span className='bg-purple-600 text-white px-4 py-2 rounded-full text-lg'>Typescript</span>
                        <span className='bg-emerald-600 text-white px-4 py-2 rounded-full text-lg'>Tailwaid css</span>
                        <span className='bg-cyan-700 text-white px-4 py-2 rounded-full text-lg'>Javascript</span>
                        <span className='bg-yellow-700 text-white px-4 py-2 rounded-full text-lg'>React</span>
                    </div>

                    <div className='mb-8 p-5'>
                        <h2 className='text-3xl font-bold mb-6'>Experience</h2>
                        <p className='text-lg md:text-xl max-w-2xl mx-auto'> With 1 years of experience in web development, I have worked on various projects ranging from simple websites to complex web applications. 
                        My experience includes collaborating with teams, working on both front-end and back-end development, and continuously learning new technologies.</p>
                    </div>

                    <div className='mb-8'>
                        <h2 className='text-3xl font-bold mb-3'>Let's Connect</h2>
                        <p className='text-lg md:text-xl mb-8 '>If you like to discuss a project or jusr want to say hello, feel free to reach out to me</p>
                        <a href="/contact" 
                        className='bg-red-600 text-white font-bold py-3 px-6 rounded-full hover:text-white hover:bg-black transition duration-300'>
                            Contact Me
                        </a>
                    </div>


                    

                </div>

            </div>
        </section>

    </div>
    </>
  )
}

export default page