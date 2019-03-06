import React from 'react'
import BlobSVG from './blob-svg'

function BlobList(props) {
  const style = {
    position: 'relative',
    width: '100%',
    minHeight: '280vh',
    overflow: 'hidden',
  }

  return (
    <div className="blobs" style={style}>
      {props.children}
      <BlobSVG
        colour="purple"
        shade="00"
        top="5vh"
        right="100px"
        width="450px"
        rotate="0"
      />

      <BlobSVG
        colour="red"
        shade="00"
        top="65vh"
        left="200px"
        right=""
        width="450px"
        rotate="0"
      />
      <BlobSVG
        colour="red"
        shade="20"
        top="65vh"
        left="100px"
        right=""
        width="250px"
        rotate="25"
      />


      <BlobSVG
        colour="orange"
        shade="00"
        top="125vh"
        left=""
        right="200px"
        width="450px"
        rotate="90"
      />
      <BlobSVG
        colour="orange"
        shade="20"
        top="125vh"
        left=""
        right="100px"
        width="250px"
        rotate="125"
      />

      <BlobSVG
        colour="yellow"
        shade="10"
        top="170vh"
        left="200px"
        right=""
        width="500px"
        rotate="223"
      />
      <BlobSVG
        colour="yellow"
        shade="20"
        top="170vh"
        left="100px"
        right=""
        width="250px"
        rotate="248"
      />
    </div>
  )
}

export default BlobList
