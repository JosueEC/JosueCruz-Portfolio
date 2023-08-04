import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import LearningAbout from './components/LearningAbout'
import Works from './components/Works'
import About from './components/About'
import Footer from './components/Footer'

function App () {
  const [theme, setTheme] = useState(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  // function handleThemeSwitch () {
  //   setTheme(theme === 'dark' ? 'light' : 'dark')
  // }

  return (
    <>
      {/* <button
        type='button'
        onClick={handleThemeSwitch}
        className='fixed z-10 right-2 top-2 bg-indigo-500 text-lg p-1 rounded-md'
      >
        {theme === 'dark' ? '🌚' : '🌞'}
      </button> */}
      <div className='font-inter bg-gradient-to-br from-slate-900 to-indigo-800'>
        <div className='max-w-5xl mx-auto w-11/12'>
          <Hero />
          <div className='md:h-screen'>
            <Services />
            <LearningAbout />
          </div>
          <Works />
          <About />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
