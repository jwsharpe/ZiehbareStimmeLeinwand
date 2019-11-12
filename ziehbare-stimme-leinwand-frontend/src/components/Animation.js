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

  getRandomOrange = () => {
    let r = Math.random() * (230 - 215 + 1) + 215;
    let g = Math.random() * (180 - 165 + 1) + 165;
    let b = Math.random() * (65 - 55 + 1) + 55;
    return `rgb(${r},${g},${b})`;
  };

  //

  getCircles = () => {
    let changeColorWithVoice;

    if (this.props.voiceCommand === "zero") {
      changeColorWithVoice = this.getRandomGreen();
    } else if (this.props.voiceCommand === "one") {
      changeColorWithVoice = this.getRandomColor();
    } else if (this.props.voiceCommand === "two") {
      changeColorWithVoice = this.getRandomWhite();
    } else if (this.props.voiceCommand === "three") {
      changeColorWithVoice = this.getRandomRed();
    } else if (this.props.voiceCommand === "four") {
      changeColorWithVoice = this.getRandomPink();
    } else if (this.props.voiceCommand === "five") {
      changeColorWithVoice = this.getRandomYellow();
    } else if (this.props.voiceCommand === "six") {
      changeColorWithVoice = this.getRandomAqua();
    } else if (this.props.voiceCommand === "seven") {
      changeColorWithVoice = this.getRandomPurple();
    } else if (this.props.voiceCommand === "eight") {
      changeColorWithVoice = this.getRandomLightBlue();
    } else if (this.props.voiceCommand === "nine") {
      changeColorWithVoice = this.getRandomOrange();
    } else {
      changeColorWithVoice = this.getRandomBlue();
    }

    return [...Array(135)].map((ele, i) => (
      <Circle
        key={i}
        x={Math.random() * window.innerWidth * 2 - window.innerWidth / 2}
        y={Math.random() * window.innerHeight * 2 - window.innerHeight / 2}
        radius={Math.floor(Math.random() * 200)}
        fill={changeColorWithVoice}
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
