import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { imgurl } from './lib.js'
function App() {
  const [count, setCount] = useState(0)
  function showAuthentication()
  {
    window.location.replace("/authentication");
  }
  return (
    <div id='container'>
     <div id='header'>

      <img className='logo' src={imgurl+"logo.png"} alt='News Logo'/>
      <div className='headertext'><span>Live</span> weather Monitoring system</div>
      <img className='signinlogo' src={imgurl+"signupprofilepic.png"} alt='Logo'/>
      <div className='signintext' onClick={()=>showAuthentication()}>Sign In</div>
     </div>
    <div id='content'>
       <div className='contenttext1'>Real-Time Weather Intelligence Powered by IoT</div>
       <div className='contenttext2'>Monitor temperature, humidity, pressure, wind speed, rainfall, and air quality in real time through an interactive dashboard. Analyze historical trends, receive instant updates, and make informed decisions with accurate environmental data. </div>
       <div className='contenttext3'>📡Live Data | 📊 Interactive Charts | 🌍 Anywhere Access | ⚡ Real-Time Updates</div>
    </div>
    <div id='footer'>
      <div className='footertext'>© 2026 Weather Monitoring System. All rights reserved.</div>
      <img className='social-iconsimg' src={imgurl+"linkdin.png"} alt='Applogo'/>
      <img className='social-iconsimg' src={imgurl+"twiter.png"} alt='Applogo'/>
      <img className='social-iconsimg' src={imgurl+"logo.png"} alt='Applogo'/>
    </div>

    </div>
    
    
   
  )
}

export default App