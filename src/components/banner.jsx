// import Librairies
import React from 'react';

// Import CSS
import './banner.css';

class Banner extends React.Component {
  constructor(props) {
    super(props)
  }

  shouldComponentUpdate() {
    if (this.props.shadow === undefined) return false;
    return true;
  }

  addBoxShadow() {
    // console.log(this);
  }

  componentDidUpdate() {
    console.log(this, 'banner updating')
    this.addBoxShadow();
  }

  render() {
    const {colour, shade, position, children} = this.props;
    const style = {
      background: `var(--${colour}-${shade})`,
    }

    return (
      <div className={`banner ${position}`} style={style}>
        {children}
        <div className="banner-placeholder" />
      </div>
    );
  }
}

export default Banner;