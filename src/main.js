'use strict';

import React, { Component } from 'react';
import { render } from 'react-dom';
import IconComponent from './components/IconComponent';
import ImageComponent from './components/ImageComponent';
import imageData from '../data/data.json';


class TestComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      isToggleOn: true,
      imageIndex: 0,
      total:0,
    };
    this.handleClick = this.handleClick.bind(this);
    this.leftHandler = this.leftHandler.bind(this);
    this.rightHandler = this.rightHandler.bind(this);
  }

  handleClick(index) {
    this.setState({
      imageIndex: index
    });
  }

  leftHandler(index) {
    if (index == 0) {
      this.setState({
        imageIndex: imageData.carousel.length-1
      });
    } else {
      this.setState({
        imageIndex: index-1
      });
    }
  }

  rightHandler(index) {
    if (index == imageData.carousel.length-1) {
      this.setState({
        imageIndex: 0
      });
    } else {
      this.setState({
        imageIndex: index+1
      });
    }
  }

  componentDidMount = () => {
    setInterval(function() {
      if (this.state.imageIndex < imageData.carousel.length-1) {
        this.setState({
          imageIndex:this.state.imageIndex+1
        });
      } else {
        this.setState({
          imageIndex:0
        });
      }
    }.bind(this), 5000);
  }

  render(){
    let mainThis = this;
    let style = {
        li: {
          top : '400px',
          right : '80px',
          zIndex: '999',
          position: 'absolute',
          display: 'flex'
        },
        left: {
          top : '300px',
          left : '40px',
          zIndex: '999',
          fontSize:'40px',
          color: '#fff',
          position: 'absolute',
        },
        right: {
          top : '300px',
          right : '40px',
          zIndex: '999',
          fontSize:'40px',
          color: '#fff',
          position: 'absolute',
        }
    };
    return (
      <div>
        <ul>
          <li style={style.li}>
            {
              imageData.carousel.map(function(user, i){
                return <div style={style.icon} key={i} onClick={mainThis.handleClick.bind(mainThis, i)}><IconComponent/></div>
              })
            }
          </li>
        </ul>
        <div style={style.left} onClick={this.leftHandler.bind(this,this.state.imageIndex)}>&lt;</div>
        <div style={style.right} onClick={this.rightHandler.bind(this,this.state.imageIndex)}>&gt;</div>
        <ImageComponent imageIndex={this.state.imageIndex} data={imageData}/>
      </div>
    );
  }
}

render(<TestComponent />, document.getElementById('app-root'));
