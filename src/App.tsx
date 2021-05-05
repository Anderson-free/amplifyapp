
import React, { useState, useEffect } from 'react'
import { Navigation } from './home_page/components/navigation'
import { Header } from './home_page/components/header'
import { About } from './home_page/components/about'
import { Testimonials } from './home_page/components/testimonials'
import { Team } from './home_page/components/Team'
import { Contact } from './home_page/components/contact'
import JsonData from './home_page/data/data.json'
import SmoothScroll from 'smooth-scroll'

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

const App = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
    </div>
  )
}

export default App
