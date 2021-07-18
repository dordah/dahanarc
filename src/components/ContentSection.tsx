import React from 'react'
import '../App.css'
import { Button } from './Button'
import './ContentSection.css'

function ContentSection() {
  return (
    <div className='content-container'>
      <img src='../images/image1.jpg' alt='img' />
      <h1>Dahan Architecture</h1>
      <p>Your Dream House A Touch Away</p>
      <div className='content-btn'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={() => console.log(`clicked`)}
        >
          GET STARTED
        </Button>
      </div>
    </div>
  )
}

export default ContentSection
