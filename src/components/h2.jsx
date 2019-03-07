// Librairies
import React, { Component } from 'react'
import Blob from './blob-svg'

// CSS
import './h2.css'

// Helpers
import { getRandonNumber } from '../helpers/functions'

class H2Blob extends Component {
  constructor(props) {
    super(props)

    this.state = {
      angle: 0,
    }

    this.rotateBlob = this.rotateBlob.bind(this)
  }

  rotateBlob() {
    this.intervalID = setInterval(() => {
      this.setState({ angle: (this.state.angle + getRandonNumber(0, 90)) })
    }, getRandonNumber(3000, 6000))
  }

  componentDidMount() {
    this.setState({
      angle: getRandonNumber(0, 360),
    })

    this.rotateBlob()
  }

  componentWillUnmount() {
    clearInterval(this.intervalID)
  }

  render() {
    const { colour, position } = this.props

    const style = {
      color: `var(--${colour}-50)`,
      position: `relative`,
      paddingBottom: `var(--s-10)`,
    }

    return (
      <div className="h2" style={style}>
        <h2>{this.props.children}</h2>

        <Blob
          colour={colour}
          shade="00"
          width="550px"
          top="0%"
          right={position === 'right' ? '-40%' : '50%'}
          // left={(position === 'left' ? "-100%" : "")}
          rotate={this.state.angle}
        />

        <Blob
          colour={colour}
          shade="10"
          width="300px"
          top="10%"
          right={position === 'right' ? '-80%' : '110%'}
          rotate={this.state.angle}
        />

        <Blob
          colour={colour}
          shade="30"
          width="120px"
          top="30%"
          right={position === 'right' ? '115%' : '-10%'}
          rotate={this.state.angle}
        />

        <Blob
          colour={colour}
          shade="40"
          width="25px"
          top="35%"
          right={position === 'right' ? '135%' : '-20%'}
          rotate={this.state.angle}
        />
      </div>
    )
  }
}

export default H2Blob;