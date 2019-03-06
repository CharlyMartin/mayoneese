// Librairies
import React, { Component } from 'react';

// Components
import Banner from './banner';

class BannerList extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const style = {
      position: 'relative',
      width: '100%',
      height: `115vh`,
      overflow: 'hidden'
    }

    return (
      <div className="banners" style={style}>
        {this.props.children}
        <Banner spread="0" zIndex="-10" angle="0" colour="yellow" shade="30" />
        {/* <Banner spread="0.5" zIndex="-30" angle="0" colour="purple" shade="50" /> */}
        {/* <Banner spread="8" zIndex="-30" angle="0" colour="yellow" shade="50" />
        <Banner spread="12" zIndex="-40" angle="0" colour="orange" shade="40" />
        <Banner spread="16" zIndex="-50" angle="0" colour="orange" shade="50" />
        <Banner spread="20" zIndex="-60" angle="0" colour="red" shade="40" />
        <Banner spread="24" zIndex="-70" angle="0" colour="red" shade="50" />
        <Banner spread="28" zIndex="-80" angle="0" colour="purple" shade="40" />
        <Banner spread="32" zIndex="-90" angle="0" colour="purple" shade="50" /> */}
      </div>
    );
  }
}

export default BannerList;