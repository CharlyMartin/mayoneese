// import Librairies
import React from 'react';

// Import CSS
import './banner.css';

class Banner extends React.Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   shadows: '',
    //   shouldUpdate: true,
    // }
  }

  // buildCSS(colour, shade) {
  //   return `var(--${colour}-${shade})`
  // }

  // renderStyle(colour, shade) {
  //   // find a way to call renderStyle recursively
  //   // until the shadows object is done enumerating
  //   return {
  //     background: this.buildCSS(colour, shade),
  //     boxShadow: this.state.shadows
  //   }
  // }

  triggerRainbow() {
    // console.log(this.intervalID);
    // clearInterval(this.intervalID);

    // const shadows = [
    //   ['yellow', 40],
    //   ['yellow', 50],
    //   ['orange', 40],
    //   // ['orange', 50]
    // ];
    // for (let i = 0; i < shadows.length; i += 1) {
    //   const [colour, shade] = shadows[i];
    //   setTimeout(() => {
    //     this.setState({
    //       shadows: this.state.shadows + `0 2px 0 ${this.buildCSS(colour, shade)},`
    //     })
    //   }, i * 2000);
    // }
  }

  // addBoxShadow() {
  //   const shadow = '0 4px 0 var(--yellow-30)'
  //   const newShadow = this.setState.shadows += shadow;
  //   this.setState({shadows: newShadow});
  //   // console.log(this);
  // }

  shouldComponentUpdate() {
    if (this.props.shadows === undefined) return false;
    return true;
  }

  componentDidUpdate() {
    // Not possible to call setState here, it creates an infinite loops of renders.
    console.log('updating');
  }

  render() {
    console.log('rendering');
    const {colour, shade, position, children, shadows} = this.props;
    // const shadowsString = shadows.join(', ');
    // console.log(shadowsString);
    const style = {
      background: `var(--${colour}-${shade})`,
      boxShadow: shadows,
    }

    return (
      <div className={`banner ${position}`} style={style}>
        {children}
      </div>
    );
  }
}

export default Banner;