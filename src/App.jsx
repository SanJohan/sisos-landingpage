
import Benefits from './components/Benefits'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Results from './components/Results'
import Testimonials from './components/Testimonials'
import Contact  from './components/Contact'
import Footer from './components/Footer'


function App() {

  return (
    <>
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-gray-100">
        <Navbar />
        <HeroSection />
        <Benefits />
        <Results />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
      
      {/* <HeroSection />
      <AboutUs />
      <OurServices />
      <Methodology />
      <Testimonials />
      <Contact />
      <Footer /> */}
    </>
  )
}

export default App
