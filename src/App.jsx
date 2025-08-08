import React from 'react'
import Header from './components/Header'
import bgImg from './assets/back.jpg'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Spline from '@splinetool/react-spline';

function App() {


  return (

    <main >

      <div className='absolute  -z-10 flex justify-center items-center right-0 left-0 w-screen h-screen overflow-hidden'>
        <Spline className='absolute  -z-10 top-0 bottom-0 right-0 left-0 w-screen h-full' scene="https://prod.spline.design/CBmtrk9TfJIKybcC/scene.splinecode" />
      </div>
      <Header />
      <Hero />
      {/* <Footer /> */}

    </main>

  )
}

export default App
