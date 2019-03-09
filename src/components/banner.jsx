// import Librairies
import React from 'react';

// Import CSS
import './banner.css';

class Banner extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      shadows: '',
      shouldUpdate: true,
    }
  }



  buildCSS(colour, shade) {
    return `var(--${colour}-${shade})`
  }

  renderStyle(colour, shade) {
    // find a way to call renderStyle recursively
    // until the shadows object is done enumerating
    return {
      background: this.buildCSS(colour, shade),
      boxShadow: this.state.shadows
    }
  }

  addBoxShadow() {
    const shadow = '0 4px 0 var(--yellow-30)'
    const newShadow = this.setState.shadows += shadow;
    this.setState({shadows: newShadow});
    // console.log(this);
  }

  // componentDidUpdate() {
  //   this.addBoxShadow();
  //   // Not possible to call setState here, it creates an infinite loops of renders.
  // }

  shouldComponentUpdate() {
    if (this.props.shadow === undefined) return false;
    return true;
  }

  componentDidUpdate() {
    clearInterval(this.intervalID);
    const shadows = [
      ['yellow', 40],
      ['yellow', 50],
      ['orange', 40]
    ];
    
    console.log('component update');
    this.intervalID = setInterval(() => {
      this.setState({shadows: '2px 2px 0 red'})
    }, 1000);

    console.log(shadows);
  }

  render() {
    const {colour, shade, position, children} = this.props;

    return (
      <div className={`banner ${position}`} style={this.renderStyle(colour, shade)}>
        {children}
        <div className="banner-placeholder" />
      </div>
    );
  }
}

export default Banner;