'use strict';

import React, { Component } from 'react';

export default class ImageComponent extends Component {

  constructor(props){
    super(props);
  }

  render(){
    const { imageIndex, data } = this.props;
    const sectionStyle = {
      width: "100%",
      height: "400px",
      image: {
        position: 'relative',
        width: '100%',
      },
      h2: {
        position: 'absolute',
        top: '150px',
        left: '50px',
        width: '80%',
      },
      span: {
        color: 'white',
        font: '15px/25px Helvetica, Sans-Serif',
        letterSpacing: '-1px',
        background: 'rgb(0, 0, 0)',
        background: 'rgba(0, 0, 0, 0.7)',
        padding: '10px',
      },
      title: {
        color:'#FFF',
        fontSize: '25px',
      }
    };

    let index = 0;

    if (imageIndex < data.carousel.length-1 && imageIndex >= 0) {
      index = imageIndex;
    }

    const item = data.carousel[index];

    const image = (
        <div style={sectionStyle}>
          <a href={'http://'+item.link}>
            <img style={sectionStyle.image} src={require('../'+item.imageurl)} />
          </a>
          <h2 style={sectionStyle.h2}>
            <p style={sectionStyle.title}>{item.title}</p>
            <span style={sectionStyle.span}>{item.synopsis}</span>
          </h2>
        </div>
      )
    return (
      <div className="view" >
        { image }
      </div>
    );
  }
}
