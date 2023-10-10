import React from 'react'
import styles from './style'
import { Billing, Hero, Business, CardDeal, Navbar, Clients, Testimonials, Feedback, Footer, Stats, CTA } from './components'

function App() {
  return (
    <>
      <div className='bg-green-600 text-white'>
        Hello World
      </div>
      <div className='text-green-600 text-9xl'>
        Hello World
      </div>
      <div className='text-6xl ml-5 italic underline'>
        Hello World
      </div>
    </>
    // <div className="bg-primary w-full overflow-hidden">
    //   <div className={`${styles.paddingX} ${styles.flexCenter}`}>
    //     <div className={`${styles.boxWidth}`}>
    //       <Navbar />
    //     </div>
    //   </div>

    //   <div className={`bg-primary ${styles.flexStart}`}>
    //     <div className={`${styles.boxWidth}`}>
    //       <Hero />
    //     </div>
    //   </div>

    //   <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
    //     <div className={`${styles.boxWidth}`}>
    //       <Stats />
    //       <Business />
    //       <Billing />
    //       <CardDeal />
    //       <Testimonials />
    //       <Clients />
    //       <CTA />
    //       <Footer />
    //     </div>
    //   </div>
    // </div>
  )
}

export default App