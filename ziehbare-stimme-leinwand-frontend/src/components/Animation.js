import React, { Component } from "react";
import Konva from "konva";
import { render } from "react-dom";
import { Stage, Layer, Circle } from "react-konva";
// import {useSprings, animated} from 'react-spring'

class Animation extends Component {
  state = {
    dx: 0,
    dy: 0
  };

  getRandomRed = () => {
    let r = Math.floor(Math.random() * 255);
    return `rgb( ${r}, 0, 0)`;
  };
  getRandomGreen = () => {
    let g = Math.floor(Math.random() * 255);
    return `rgb( 0, ${g}, 0)`;
  };
  getRandomBlue = () => {
    let b = Math.floor(Math.random() * 255 + 100);
    return `rgb( 0, 0, ${b})`;
  };

  getRandomColor = () => {
    let r = Math.floor(Math.random() * 55 + 100);
    let g = Math.floor(Math.random() * 55 + 100);
    let b = Math.floor(Math.random() * 55 + 100);
    return `rgb(${r},${g},${b})`;
  };

  getCircles = () => {
    return [...Array(180)].map((ele, i) => (
      <Circle
        key={i}
        x={Math.random() * window.innerWidth * 2 - window.innerWidth / 2}
        y={Math.random() * window.innerHeight * 2 - window.innerHeight / 2}
        radius={Math.floor(Math.random() * 300 + 50)}
        fill={this.getRandomColor()}
        opacity={Math.random() * 0.7}
        ref={node => {
          this.circle = node;
        }}
      />
    ));
  };
  componentDidMount() {
    // console.log(this.circle.animation);

    this.circle
      .getLayer()
      .getChildren()
      .forEach(circle => {
        const random = Math.random() * 6;
        const anim = new Konva.Animation(frame => {
          const period = 800;
          circle.opacity(
            (Math.sin(frame.time / period + random) + 1) / 1.5 + 0.5
          );
        }, circle.getLayer());
        anim.start();
      });
  }

  render() {
    return (
      <Stage
        className="stage"
        width={window.innerWidth * 2}
        height={window.innerHeight * 2}
      >
        <Layer style={{ left: "40px" }}>{this.getCircles()}</Layer>
      </Stage>
    );
  }
}

export default Animation;
