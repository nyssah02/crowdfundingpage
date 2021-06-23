import './App.css'
import HeroSection from './components/HeroSection/HeroSection'
import Navbar from './components/Navbar/Navbar'
import TopSection from './components/TopSection/TopSection'
import StatsSection from './components/StatsSection/StatsSection'
import InfoSection from './components/InfoSection/InfoSection'
import { ProjectObjects } from './components/InfoSection/Data'

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <TopSection />
      <StatsSection />
      <InfoSection projectObjects={ProjectObjects} />
    </>
  )
}

export default App
