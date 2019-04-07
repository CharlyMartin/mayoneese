// Librairies
import { Link } from 'gatsby'
import React from 'react'

// CSS
import './track.css'

// Component
function Track(props) {
  // console.log(props);
  const style = {
    backgroundImage: `linear-gradient(rgba(52, 50, 45, 0.5), rgba(52, 50, 45, 0)), url(https://i1.sndcdn.com/artworks-000060444464-hhegxv-t500x500.jpg)`,
    backgroundPosition: `right 10%`,
    backgroundSize: `85% auto`,
    backgroundRepeat: `no-repeat`,
  }
  return (
    <div className="track">
      <div className="artwork blob-bottom" style={style} />

      <div className="header">
        <div className="track-container">
          <div className="header-content">
            <p id="date">15 March 2019</p>
            <p id="rank">#1</p>
          </div>
        </div>
      </div>

      <div className="body">
        <div className="track-container">
          <h2>Lady</h2>
        </div>
      </div>
    </div>
  )
}

export default Track
