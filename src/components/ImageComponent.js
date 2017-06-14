import React, { Component } from 'react';

export default class ImageComponent extends Component {

  constructor(props){
    super(props);
  }

  render(){
    const { imageIndex, data } = this.props;
    const style = {
      width: "100%",
      height: "400px",
      image: {
        position: 'relative',
        width: '100%',
      },
      content: {
        position: 'absolute',
        top: '150px',
        left: '50px',
        width: '80%',
      },
      synopsis: {
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
        <div style={style}>
          <a href={'http://'+item.link}>
            <img style={style.image} src={require('../'+item.imageurl)} />
          </a>
          <div style={style.content}>
            <p style={style.title}>{item.title}</p>
            <p style={style.synopsis}>{item.synopsis}</p>
          </div>
        </div>
      )
    return (
      <div className="view" >
        { image }
      </div>
    );
  }
}
