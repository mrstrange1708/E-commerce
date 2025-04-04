import React from 'react'

const Header = () => {
  return (
    <div className='h-screen bg-cover bg-center bg-fixed  bg-[#4c4949] bg-opacity-60 bg-blend-overlay'
    style={{ backgroundImage: "url('src/Assets/bg_main_img.jpg')" }}>
      <nav className='gap-1.5 py-4 px-6 flex justify-around'>
        <img src="src/Assets/Logo.png" alt="main_img" className='h-30' />
        <ul className='flex justify-around gap-34 align-middle pt-12'>
            <li><a href="#home" className="
            text-2xl text-white hover:text-gray-500 transition duration-300 scroll-smooth">Home</a></li>
            <li><a href="#about" className="
            text-2xl text-white hover:text-gray-500 transition duration-300 scroll-smooth">About</a></li>
            <li><a href="#services" className="
            text-2xl text-white hover:text-gray-500 transition duration-300 scroll-smooth">Services</a></li>
            <li><a href="#appointment" className="
            text-2xl text-white hover:text-gray-500 transition duration-300 scroll-smooth">Book Appointment</a></li>
            <li><a href="#contact" className="
            text-2xl text-white hover:text-gray-500 transition duration-300 scroll-smooth">Contact</a></li>
        </ul>
      </nav>
      <div className='flex flex-col items-center text-center mt-120'>
            <h1 className='text-white text-5xl mb-1.5'>Professional Style and Care</h1>
            <p className='text-white text-3xl'>+91-7013746097 | Kurnool,Ap</p>
      </div>
    </div>
  )
}

export default Header

