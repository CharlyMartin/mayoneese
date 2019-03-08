// import Librairies
import React from 'react';

// Import CSS
import './banner.css';

class Banner extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      shadows: '0 4px 0 red'
    }
  }

  shouldComponentUpdate() {
    if (this.props.shadow === undefined) return false;
    return true;
  }

  renderStyle(colour, shade) {
    // find a way to call renderStyle recursively
    // until the shadows object is done enumerating
    const shadows = [
      ['yellow', 40],
      ['yellow', 50],
      ['orange', 60]
    ]
    
    return {
      background: `var(--${colour}-${shade})`,
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