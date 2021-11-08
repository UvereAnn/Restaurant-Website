import React from 'react'
import aboutImage from '../images/about.png'

function About() {
  return (
      <div id="about">
        <div class="about-text">
            <h1>UPCOMING EVENT</h1>
            <p>Please be part of our great events</p>
            <button>Read More</button>
        </div>
        <div className="about-image">
            <img src={aboutImage} alt="" />
        </div>
    </div>
  )
}

export default About
