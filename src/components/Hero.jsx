import React from 'react'

const Hero = () => {
  return (
   <header className="w-full flex justify-center items-center flex-col">
    <nav className="flex justify-between items-center w-full mb-8 pt-2">
        <img src="" alt="logo goes here" className="w-28 object-contain " />
        <button type="button"
        className="black_btn" 
        onClick={()=> window.open('https://github.com/')}>
            github
        </button>
    </nav>
    <h1 className='head_text'>Summarize articles with <br className='max-md:hidden' />
    <span className='orange_gradient'>Open-AI</span></h1>
    <h2 className="description mt-6">Simplyfy udbudsbsbuy dbcdbcd</h2>
   </header>

  )
}

export default Hero