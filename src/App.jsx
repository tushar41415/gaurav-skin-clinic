
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
import ClinicsPreview from './components/ClinicsPreview'
import Clinics from './components/Clinics'
import CTASection from './components/CTASection'

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
              <ClinicsPreview />
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
        <Route path="/clinics" element={<Clinics />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
