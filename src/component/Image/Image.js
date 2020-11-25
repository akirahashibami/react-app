import React, { Component } from 'react';
import './Image.min.css';

class Image extends Component {

  render(){
    return(
      <div className="image-items">
        <img
          onClick={this.props.onClick}
          src={this.props.image}
          alt="画像が入ります"/>
      </div>
    )
  }
}

export default Image;
