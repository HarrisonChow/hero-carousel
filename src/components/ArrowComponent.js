'use strict';

import React, { Component } from 'react';

export default class ArrowComponent extends Component {
    constructor(props){
        super(props);
    }
    handleClick(index) {
      this.setState({
        imageIndex: index
      });
    }

    render(){
        return (
          <div onClick={this.handleClick.bind(this,this.props.imageIndex)}>FFFF</div>
        );
    }
}
