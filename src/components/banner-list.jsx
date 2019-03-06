// Librairies
import React, { Component } from 'react';

// Components
import Banner from './banner';

class BannerList extends Component {
  constructor(props) {
    super(props)
  }

  // setAngle() {

  // }

  // setSpread() {
    
  //   const spread = this.props.speard;
  //   this.setState({spread: spread + 3});
  //   console.log(spread);
  //   return spread;
  // }

  // componentWillUnmount() {
  //   this.state = {
  //     angle: 0,
  //     speard: 0,
  //   }
  // }
  
  render() {
    const style = {
      position: 'relative',
      width: '100%',
      height: `130vh`,
      overflow: 'hidden'
    }

    return (
      <div className="banners" style={style}>
        <Banner spread="0" zIndex="-10" angle="0" colour="yellow" shade="30" />
        {/* <Banner spread="3" zIndex="-20" angle="0" colour="yellow" shade="40" />
        <Banner spread="6" zIndex="-30" angle="0" colour="yellow" shade="50" />
        <Banner spread="9" zIndex="-40" angle="0" colour="orange" shade="40" />
        <Banner spread="12" zIndex="-50" angle="0" colour="orange" shade="50" />
        <Banner spread="15" zIndex="-60" angle="0" colour="red" shade="40" />
        <Banner spread="18" zIndex="-70" angle="0" colour="red" shade="50" />
        <Banner spread="21" zIndex="-80" angle="0" colour="purple" shade="40" />
        <Banner spread="24" zIndex="-90" angle="0" colour="purple" shade="50" />
        <Banner spread="-70" zIndex="-10" angle="0" colour="purple" shade="50" /> */}
      </div>
    );
  }
}

export default BannerList;