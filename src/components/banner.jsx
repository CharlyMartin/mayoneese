// import Librairies
import React from 'react'

// Import CSS
import './banner.css'

class Banner extends React.Component {
  constructor(props) {
    super(props)
  }

  shouldComponentUpdate() {
    if (this.props.shadows === undefined) return false
    return true
  }

  // componentDidUpdate() {
  //   // Not possible to call setState here, it creates an infinite loops of renders.
  //   console.log('updating');
  // }

  render() {
    const {
      colour,
      shade,
      blob,
      children,
      shadows,
      position,
      width,
      left,
      top,
      zIndex,
      rotate
    } = this.props

    const style = {
      background: `var(--${colour}-${shade})`,
      boxShadow: shadows || `none`,
      width: width || `120%`,
      position: position || `relative`,
      left: left || `-10%`,
      top: top || `0%`,
      zIndex: zIndex || `0`,
      transform: `rotate(${rotate}deg)`
    }

    return (
      <div className={`banner blob-${blob}`} style={style}>
        {children}
      </div>
    )
  }
}

export default Banner
