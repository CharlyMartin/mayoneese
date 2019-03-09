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
    console.log('rendering')
    const { colour, shade, position, children, shadows } = this.props

    const style = {
      background: `var(--${colour}-${shade})`,
      boxShadow: shadows,
    }

    return (
      <div className={`banner ${position}`} style={style}>
        {children}
      </div>
    )
  }
}

export default Banner
