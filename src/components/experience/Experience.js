import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
        <h3>Frontend Development</h3>
        <div className='experience__content'>
          <article className='experience__details'>
            <BsPatchCheckFill />
            <h4>HTML</h4>
            <small className='text-light'>Intermediate</small>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill />
            <h4>CSS</h4>
            <small className='text-light'>Advance</small>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill />
            <h4>REACT</h4>
            <small className='text-light'>Advance</small>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill />
            <h4>JavaScript</h4>
            <small className='text-light'>Advance</small>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill />
            <h4>BootStrap</h4>
            <small className='text-light'>Advance</small>
          </article>
        </div>
        </div>
        <div className='experience__backend'>
          
        </div>
      </div>
    </section>
  )
}

export default experience