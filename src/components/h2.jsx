// Librairies
import React, { Component } from 'react'
import Blob from './blob-svg'

// CSS
import './h2.css'

class H2Blob extends Component {
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
          right={(position === 'right' ? "-40%" : "50%")}
          // left={(position === 'left' ? "-100%" : "")}
          rotate="20"
        />

        <Blob
          colour={colour}
          shade="10"
          width="300px"
          top="10%"
          right={(position === 'right' ? "-80%" : "110%")}
          rotate="50"
        />

        <Blob
          colour={colour}
          shade="30"
          width="120px"
          top="30%"
          right={(position === 'right' ? "115%" : "-10%")}
          rotate="50"
        />

        <Blob
          colour={colour}
          shade="40"
          width="25px"
          top="35%"
          right={(position === 'right' ? "135%" : "-20%")}
          rotate="50"
        />
      </div>
    )
  }
}

export default H2Blob
