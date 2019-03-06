// Librairies
import React, { Component } from 'react';

// SVG Components
import BlobSVG from '../components/blob-svg';
import MusicSVG from '../components/music-svg';
import VinylSVG from '../components/vinyl-svg';
import HeadphonesSVG from '../components/headphones-svg';

// CSS
import '../css/components/hero-svg.css';

class HeroSVGs extends Component {
  render() {
    return (
      <div className="hero-svgs">
        <MusicSVG colour="purple" width="var(--s-8)" shade="50" rotate={-10} />
        <VinylSVG colour="purple" width="var(--s-8)" shade="50" rotate={-20} />
        <HeadphonesSVG colour="purple" width="var(--s-8)" shade="50" rotate={-30} />
        <BlobSVG colour="grey" width="100%" shade="00" rotate={-10} zIndex="-10" />
      </div>
    );
  }
}

export default HeroSVGs;