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

  getRandomBlue = () => {
    let r = Math.floor(Math.random() * 100);
    let g = Math.floor(Math.random() * 55);
    let b = Math.floor(Math.random() * 255 + 50);
    return `rgb( ${g}, ${r}, ${b})`;
  };

  getRandomColor = () => {
    let r = Math.floor(Math.random() * 55 + 15);
    let g = Math.floor(Math.random() * 55 + 150);
    let b = Math.floor(Math.random() * 55 + 150);
    return `rgb(${r},${g},${b})`;
  };

  getRandomWhite = () => {
    let r = Math.floor(Math.random() * 255 + 120);
    let g = Math.floor(Math.random() * 255 + 120);
    let b = Math.floor(Math.random() * 255 + 120);
    return `rgb(${r},${g},${b})`;
  };

  // setColor = () => {
  //     if(this.props.currentProject === 1){

  //     }
  // }

  //   componentDidMount() {
  //     let anim = new Konva.Animation(frame => {
  //       let period = 1000;
  //       this.circle.opacity((Math.sin(frame.time / period) + 1) / 2);
  //     }, this.circle.getLayer());

  getCircles = () => {
    return [...Array(135)].map((ele, i) => (
      <Circle
        key={i}
        x={Math.random() * window.innerWidth * 2 - window.innerWidth / 2}
        y={Math.random() * window.innerHeight * 2 - window.innerHeight / 2}
        radius={Math.floor(Math.random() * 200)}
        fill={this.getRandomBlue()}
        // opacity={Math.random() * 0.1}
        ref={node => {
          this.circle = node;
        }}
      />
    ));
  };

  getWhiteCircles = () => {
    return [...Array(110)].map((ele, i) => (
      <Circle
        key={i}
        x={Math.random() * window.innerWidth * 2 - window.innerWidth / 2}
        y={Math.random() * window.innerHeight * 2 - window.innerHeight / 2}
        radius={Math.floor(Math.random() * 350)}
        fill={this.getRandomWhite()}
        opacity={Math.random() * 0.6}
        ref={node => {
          this.whiteCircle = node;
        }}
      />
    ));
  };
  getRandomCircles = () => {
    return [...Array(30)].map((ele, i) => (
      <Circle
        key={i}
        x={Math.random() * window.innerWidth * 2 - window.innerWidth / 2}
        y={Math.random() * window.innerHeight * 2 - window.innerHeight / 2}
        radius={Math.floor(Math.random() * 500)}
        fill={this.getRandomColor()}
        ref={node => {
          this.whiteCircle = node;
        }}
      />
    ));
  };
  componentDidMount() {
    this.circle
      .getLayer()
      .getChildren()
      .forEach(circle => {
        const random = Math.random() * 6;
        const anim = new Konva.Animation(frame => {
          const period = 800;
          circle.opacity(
            (Math.sin(frame.time / period + random) + 0.6) / 1.5 + 0.4
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
        <Layer>
          {this.getWhiteCircles()}
          {this.getRandomCircles()}
          {this.getCircles()}
        </Layer>
      </Stage>
    );
  }
}

export default Animation;
