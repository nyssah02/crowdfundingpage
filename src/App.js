import { useState } from 'react'
import './App.css'
import HeroSection from './components/HeroSection/HeroSection'
import Navbar from './components/Navbar/Navbar'
import TopSection from './components/TopSection/TopSection'
import StatsSection from './components/StatsSection/StatsSection'
import InfoSection from './components/InfoSection/InfoSection'
import { ProjectObjects } from './components/InfoSection/Data'
import SelectSection from './components/SelectSection/SelectSection'
import { SelectObjects } from './components/SelectSection/Data'
import Footer from './components/Footer/Footer'

function App() {
  const [selectIsOpen, setSelectIsOpen] = useState(false)

  const toggleSelect = () => {
    setSelectIsOpen(!selectIsOpen)
  }

  return (
    <>
      <Navbar />
      <HeroSection />
      <TopSection toggleSelect={toggleSelect} />
      <StatsSection />
      <InfoSection
        projectObjects={ProjectObjects}
        toggleSelect={toggleSelect}
      />
      <SelectSection
        selectObjects={SelectObjects}
        selectIsOpen={selectIsOpen}
        toggleSelect={toggleSelect}
      />
      <Footer />
    </>
  )
}

export default App
