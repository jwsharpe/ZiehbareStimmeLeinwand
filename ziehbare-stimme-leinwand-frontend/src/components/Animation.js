import React, { Component } from 'react';
import Konva from 'konva';
import { render } from 'react-dom';
import { Stage, Layer, Circle } from 'react-konva';
// import {useSprings, animated} from 'react-spring'

class Animation extends Component {

    state={
        dx: 0,
        dy: 0
        
    }
    

    getRandomRed = () => {
        let r = Math.floor(Math.random() * 255)
        return `rgb( ${r}, 0, 0)`
    }
    getRandomGreen = () => {
        let g = Math.floor(Math.random() * 255)
        return `rgb( 0, ${g}, 0)`
    }
    getRandomBlue = () => {
        let b = Math.floor(Math.random() * 255)
        return `rgb( 0, 0, ${b})`
    }



    componentDidMount() {
   
    var period = 200;

    var anim = new Konva.Animation(frame => {
      this.rect.opacity((Math.sin(frame.time / period) + 1) / 2);
    }, this.rect.getLayer());

    anim.start();
  }


    render() {
    return (
    <Stage   width={window.innerWidth + 100} height={window.innerHeight + 100}>
      <Layer>
        {[...Array(350)].map((_, i) => (
          <Circle
            key={i}
            x={Math.random() * window.innerWidth + this.state.dx}
            y={Math.random() * window.innerHeight + this.state.dx}
            radius={Math.floor(Math.random() * 200)}
            fill={this.getRandomBlue()}
            opacity={Math.random() * .7}
            ref={node => {
                this.rect = node;
              }}
          />
        ))}
      </Layer>
    </Stage>
    );
    }
}

export default Animation