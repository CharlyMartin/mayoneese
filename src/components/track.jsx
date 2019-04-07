// Librairies
import { Link } from 'gatsby'
import React from 'react'

// Components
import Blob from '../components/blob'

// CSS
import './track.css'

// Helpers
import { getRandonNumber } from '../helpers/functions'

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
          <h2 className="title">Lady</h2>
          <p className="artist">{'Modjo'.toUpperCase()}</p>
          <div className="footer">
            <p className="details">France - 2018</p>
            <p className="recipe">mayoneese</p>
          </div>
        </div>
      </div>

      <Blob
        width="var(--s-58)"
        colour="yellow"
        shade="00"
        right="-5%"
        top="70%"
        rotate={getRandonNumber(80, 120)}
      />
      {/* width, rotate, colour, shade, left, top, right */}
    </div>
  )
}

export default Track
