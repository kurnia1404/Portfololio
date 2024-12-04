import { useEffect } from 'react'

import Header from './components/Header/Header'
import AOS from 'aos';
import Hero from './components/Hero/Hero'
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import ContactUs from './components/ContactUs/ContactUs';

// import Services from './components/Services/Services';
// import Pricing from './components/Pricing/Pricing';
// import MeetOurTeam from './components/MeetOurTeam/MeetOurTeam';
// import ContactUs from './components/ContactUs/ContactUs';
// import Footer from './components/Footer/Footer';

// You can also use <link> for styles
import 'aos/dist/aos.css'; 
import '@fortawesome/fontawesome-free/css/all.css';
// import './App.css';


function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <AboutMe />
      <Skills />
      <ContactUs />     
      
      
      {/* <FirstScreen />
      <AboutUs />
      <Services />
      
      <Pricing />
      <MeetOurTeam />
      <ContactUs />
      <Footer /> */}
    </>
  );
}

export default App
