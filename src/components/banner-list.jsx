// Librairies
import React, { Component } from 'react';

// Components
import Banner from './banner';

class BannerList extends Component {
  constructor(props) {
    super(props)
    
    this.anim = {
      angle: 0,
      speard: 0,
    }
  }

  // setAngle() {

  // }

  computeSpread() {
    
  }

  setSpread() {
    const spread = this.anim.speard;
    this.anim.speard += 3;
    console.log(this.anim.speard);
    return spread;
  }

  componentWillUnmount() {
    this.anim = {
      angle: 0,
      speard: 0,
    }
  }
  
  render() {
    const style = {
      position: 'relative',
      width: '100%',
      height: `130vh`,
    }

    return (
      <div className="banners" style={style}>
        <Banner spread={this.setSpread()} zIndex="-10" angle="0" colour="yellow" shade="30" />
        <Banner spread={this.setSpread()} zIndex="-20" angle="0" colour="yellow" shade="40" />
        <Banner spread={this.setSpread()} zIndex="-30" angle="0" colour="yellow" shade="50" />
        <Banner spread={this.setSpread()} zIndex="-40" angle="0" colour="orange" shade="40" />
        <Banner spread={this.setSpread()} zIndex="-50" angle="0" colour="orange" shade="50" />
        <Banner spread={this.setSpread()} zIndex="-60" angle="0" colour="red" shade="40" />
        <Banner spread={this.setSpread()} zIndex="-70" angle="0" colour="red" shade="50" />
        <Banner spread={this.setSpread()} zIndex="-80" angle="0" colour="purple" shade="40" />
        <Banner spread={this.setSpread()} zIndex="-90" angle="0" colour="purple" shade="50" />
      </div>
    );
  }
}

export default BannerList;