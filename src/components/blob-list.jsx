import React from 'react'
import BlobSVG from './blob-svg'

function BlobList(props) {
  const style = {
    position: 'relative',
    width: '100%',
    height: '300vh',
    overflow: 'hidden',
  }

  return (
    <div className="blobs" style={style}>
      {props.children}
      <BlobSVG
        colour="purple"
        shade="40"
        top="0"
        left="-700px"
        right=""
        width="800px"
        rotate="45"
      />

      <BlobSVG
        colour="yellow"
        shade="40"
        top="60vh"
        left=""
        right="-700px"
        width="850px"
        rotate="90"
      />

      <BlobSVG
        colour="orange"
        shade="40"
        top="120vh"
        left="-350px"
        right=""
        width="500px"
        rotate="223"
      />
    </div>
  )
}

export default BlobList
