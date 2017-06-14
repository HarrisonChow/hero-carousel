'use strict';

import React, { Component } from 'react';

export default class IconComponent extends Component {
  constructor(props){
    super(props);
  }

  render(){
    const divStyle = {
      textShadow: 'rgba(0, 0, 0, 0.3) 2px 2px 5px',
      width: '20px',
      fontFamily: 'massivision-icon',
      fontSize: '20px',
      color: 'rgb(181, 19, 128)'
    };

    return (
      <div className="icon" style={divStyle}></div>
    );
  }
}
