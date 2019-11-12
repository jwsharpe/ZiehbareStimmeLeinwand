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

    // setColor = () => {
    //     if(this.props.currentProject === 1){

    //     }
    // }



    componentDidMount() {
   
        
    let anim = new Konva.Animation(frame => {
        let period = 200;
          this.circle.opacity((Math.sin(frame.time / period) + 1) / 2);
        }, this.circle.getLayer());

    anim.start();
  }


    render() {
 
    return (
    <Stage   width={window.innerWidth } height={window.innerHeight }>
      <Layer>
        {[...Array(550)].map((_, i) => (
          <Circle
            key={i}
            x={Math.random() * window.innerWidth + this.state.dx}
            y={Math.random() * window.innerHeight + this.state.dx}
            radius={Math.floor(Math.random() * 200)}
            fill={this.getRandomBlue()}
            opacity={Math.random() * .7}
            ref={node => {
                this.circle = node;
              }}
          />
          
        ))}
      </Layer>
    </Stage>
    );
    }
}

export default Animation