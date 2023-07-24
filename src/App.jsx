
import './App.css'
import Hero from './components/Hero'
import Demo from './components/Demo'
const App = () => {
  return (
<main>
    <div className="main">
        <div className="gradient"/>
    </div>
    <div class="fixed top-0 left-0 w-full h-full bg-black opacity-10"></div>

    <div className="app">
        
        <Hero/>
        <Demo/>
        <footer class="w-full text-white p-4">
        
        {/* <footer class="bg-gray-800 text-white py-4"> */}
  <div class="container mx-auto flex justify-center space-x-6 pb-10">
    <span className="spp">Follow Us On :</span>
    <a href="https://www.facebook.com/your-facebook-page" target="_blank" rel="noopener noreferrer">
      {/* <i class="fab fa-facebook-square text-2xl"></i> */}
      <img src="facebook.svg" alt="copy_icon"className="fabiconn" />
    </a>
    <a href="https://twitter.com/your-twitter-handle" target="_blank" rel="noopener noreferrer">
    <img src="twitter.svg" alt="copy_icon"className="twiiconn" />
    </a>
    <a href="https://www.instagram.com/your-instagram-account/" target="_blank" rel="noopener noreferrer">
    <img src="google.svg" alt="copy_icon"className="twiiconn" /> 
    </a>
    <a href="https://www.linkedin.com/in/your-linkedin-profile/" target="_blank" rel="noopener noreferrer">
    <img src="instagram.svg" alt="copy_icon"className="twiiconn" />  
    </a>
    <a href="https://www.linkedin.com/in/your-linkedin-profile/" target="_blank" rel="noopener noreferrer">
    <img src="linkedin.svg" alt="copy_icon"className="twiiconn" />  
    </a>
  </div>



    <div class="flex justify-between space-x-4">
      <a href="#" class="text-white hover:text-gray-300 pb-2">GET TO KNOW US</a>
      <a href="#" class="text-white hover:text-gray-300">CONNECT WITH US</a>
      <a href="#" class="text-white hover:text-gray-300 pr-3">SUPPORT</a>
      

    </div>
    <div className='flex justify-between space-x-4'>
    <a href="#" class="text-white hover:text-gray-200 pt-5">About Us</a>
      <a href="#" class="text-white hover:text-gray-200 pt-5 pl-4">Contact Us</a>
      <a href="#" class="text-white hover:text-gray-200 pr-5 pt-5">Careers</a>
     
      </div>
      <div className='flex justify-between space-x-4'>
    <a href="#" class="text-white hover:text-gray-200 pt-3">Legal & Financials</a>
      <a href="#" class="text-white hover:text-gray-200 pt-3 pr-12">Help Center </a>
      <a href="#" class="text-white hover:text-gray-200 pt-3 pr-7">FAQ</a>
     
      </div>
    </footer>
    </div>
</main>
  )
}

export default App