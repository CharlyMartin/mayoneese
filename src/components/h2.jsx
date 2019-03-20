// Librairies
import React, { Component } from 'react'
import Blob from './blob';

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

    // this.rotateBlob = this.rotateBlob.bind(this);
  }

  // rotateBlob() {
  //   this.intervalID = setInterval(() => {
  //     this.setState({ angle: (this.state.angle + getRandonNumber(0, 90)) })
  //   }, getRandonNumber(3000, 6000))
  // }

  // componentDidMount() {
  //   this.setState({
  //     angle: getRandonNumber(0, 360),
  //   })

  //   this.rotateBlob()
  // }

  componentWillUnmount() {
    clearInterval(this.intervalID)
  }

  render() {
    const { colour, position } = this.props

    // const style = {
    //   color: `var(--${colour}-50)`,
    // }

    return (
      <div className="h2" style={{color: colour}}>
        <h2>{this.props.children}</h2>

        <Blob
          id="blob-small"
          colour={colour}
          shade="20"
          width={getRandonNumber(120, 140)}
          top="0"
          left="-5%"
          rotate={getRandonNumber(60, 100)}
        />

        <Blob
          id="blob-right"
          colour={colour}
          shade="00"
          width={getRandonNumber(720, 780)}
          top="-100%"
          left={position === "left" ? "-140%" : ""}
          right={position === "right" ? "-140%" : ""}
          rotate={getRandonNumber(80, 90)}
        />

        {/* <Blob
          id="blob-left"
          colour={colour}
          shade="00"
          width={getRandonNumber(500, 580)}
          top="0"
          left={position === "left" ? "-110%" : ""}
          right={position === "right" ? "-100%" : ""}
          rotate={getRandonNumber(270, 280)}
        /> */}

        {/* <Blob
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
        /> */}
      </div>
    )
  }
}

export default H2Blob;
