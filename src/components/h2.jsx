// Librairies
import React, { Component } from 'react'
import Blob from './blob-svg'

// CSS
import './h2.css'

class H2 extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { colour, position } = this.props
    
    const style = {
      color: `var(--${colour}-50)`,
      position: `relative`,
      paddingBottom: `var(--s-12)`,
    }

    return (
      <div className="h2" style={style}>
        <h2>{this.props.children}</h2>

        <Blob
          colour={colour}
          shade="00"
          width="500px"
          top="0%"
          right={(position === 'right' ? "-55%" : "60%")}
          // left={(position === 'left' ? "-100%" : "")}
          rotate="20"
        />

        <Blob
          colour={colour}
          shade="10"
          width="300px"
          top="10%"
          right={(position === 'right' ? "-75%" : "120%")}
          rotate="50"
        />

        <Blob
          colour={colour}
          shade="30"
          width="100px"
          top="30%"
          right={(position === 'right' ? "120%" : "-10%")}
          rotate="50"
        />
      </div>
    )
  }
}

export default H2
