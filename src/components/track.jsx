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
  const { data } = props.obj;
  console.log(data);

  const style = {
    backgroundImage: `url(${data.Artboard[0].url})`,
  }

  const renderRecipe = (recipe) => {
    let colour;
    if (recipe === 'Mayoneese') {colour = "yellow"};
    if (recipe === 'Mustard') {colour = "orange"};
    if (recipe === 'Hot Sauce') {colour = "red"};
    
    const style = {
      color: `var(--${colour}-50)`
    }
    return (
      <p className="recipe" style={style}>{recipe.toLowerCase()}</p>
    )
  }

  const renderBlob = (recipe) => {
    let colour;
    if (recipe === 'Mayoneese') {colour = "yellow"};
    if (recipe === 'Mustard') {colour = "orange"};
    if (recipe === 'Hot Sauce') {colour = "red"};
    
    return (
      <Blob
        width="var(--s-58)"
        colour={colour}
        shade="00"
        right="-5%"
        top="70%"
        rotate={getRandonNumber(100, 140)}
      />
    )
  }


  return (
    <div className="track">
      <div className="artwork blob-bottom" style={style} />

      <div className="header">
        <div className="track-container">
          <div className="header-content">
            <p id="date">{data.Date}</p>
            <p id="rank">{`#${data.Id}`}</p>
          </div>
        </div>
      </div>

      <div className="body">
        <div className="track-container">
          <h2 className="title">{data.Name}</h2>
          <p className="artist">{data.Artist[0].data.Name.toUpperCase()}</p>
          <div className="footer">
            <p className="details">{`${data.Year} - ${data.Artist[0].data.Country}`}</p>
            {renderRecipe(data.Recipe)}
          </div>
        </div>
      </div>

      {renderBlob(data.Recipe)}
    </div>
  )
}

export default Track
