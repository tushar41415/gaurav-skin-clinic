
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Treatments from './components/Treatments'
import WhyChooseUs from './components/WhyChooseUs'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import CTASection from './components/CTASection'
import StatsBar from './components/StatsBar'
import OurServices from './components/OurServices'
import OurResults from './components/OurResults'

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <StatsBar />
              <OurServices />
              <OurResults />
              <CTASection />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/treatments" element={<Treatments />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/whychooseus" element={<WhyChooseUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
