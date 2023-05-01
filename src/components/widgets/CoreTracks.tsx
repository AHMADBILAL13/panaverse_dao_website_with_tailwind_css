import React from 'react'
import Wrapper from '@/components/shared/Wrapper'
import Button from '../shared/Button'

const CoreTracks = () => {
  return (
    <section className=' mt-16 lg:mt-28'>
      <Wrapper>
        {/* Content */}
        <div className='max-w-screen-sm'>
          <h4 className="text-teal-800 font-semibold text-lg mt-4">Program of Studies</h4>
          <h2 className="text-4xl sm:text-5xl font-bold ">Core Courses(Common in All Specializations)</h2>
          <p className="mt-3 text-slate-600">Every participant of the program will start by completing the following three core courses.</p>
          <div className="mt-5"><Button text='Learn More' /></div>
        </div>
      </Wrapper>
      </section>
  )
}

export default CoreTracks