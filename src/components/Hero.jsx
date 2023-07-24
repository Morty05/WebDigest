import React from 'react'

const Hero = () => {
  return (
   <header className="w-full flex justify-center items-center flex-col">
<nav class="navbar p-4 w-screen text-align-center">
    <div class="containernav mx-auto flex items-center justify-between">
   
     <img className="imglogo mb-4  h-16 w-90 overflow-hidden"src="WhatsApp_Image_2023-07-24_at_10.48.10_PM-removebg-preview.png" alt="" />

  
      <div className=" listitems space-x-20  mr-10  text-xl font-satoshi">
        <a href="#" className="text-white pb-2">Home</a>
        <a href="#" className="text-white pb-2">About</a>
        <a href="#" className="text-white pb-2">Services</a>
        <a href="#" className="text-white pb-2">Contact</a>
        <button className='bg-yellow-500 text-lg text-black pr-4 pl-4  pt-1.5 pb-1.5'>GitHub</button>
      </div>
    </div>
  </nav>

    <h1 className='head_text '><p>Summarize with</p> 
    <span className='orange_gradient'>WebDigest</span></h1>
    <h2 className="description overflow-hidden text-white w-half text-lg mt-6">Summarize lengthy articles, blog posts, or news items from any webpage into concise and easily understandable snippets</h2>
   </header>

  )
}

export default Hero