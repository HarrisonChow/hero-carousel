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
  }

  handleClick(index) {
    this.setState({
      imageIndex: index
    });
  }

  leftHandler(index) {
    if (index === 0) {
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
    if (index === imageData.carousel.length-1) {
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
      this.rightHandler(this.state.imageIndex);
    }.bind(this), 5000);
  }

  render(){
    const mainThis = this;
    const style = {
      icon: {
        top : '400px',
        right : '80px',
        zIndex: '999',
        position: 'absolute',
        display: 'flex',
        cursor: 'hand',
      },
      left: {
        top : '300px',
        left : '40px',
        zIndex: '999',
        fontSize:'40px',
        color: '#fff',
        position: 'absolute',
        cursor: 'hand',
      },
      right: {
        top : '300px',
        right : '40px',
        zIndex: '999',
        fontSize:'40px',
        color: '#fff',
        position: 'absolute',
        cursor: 'hand',
      }
    };

    return (
      <div>
        <div style={style.icon}>
          {
            imageData.carousel.map(function(_, i){
              return (
                <div key={i} onClick={mainThis.handleClick.bind(mainThis, i)}><IconComponent/></div>
              )
            })
          }
        </div>
        <div style={style.left} onClick={this.leftHandler.bind(this.state.imageIndex)}>&lt;</div>
        <div style={style.right} onClick={this.rightHandler.bind(this,this.state.imageIndex)}>&gt;</div>
        <ImageComponent imageIndex={this.state.imageIndex} data={imageData}/>
      </div>
    );
  }
}

render(<TestComponent />, document.getElementById('app-root'));
