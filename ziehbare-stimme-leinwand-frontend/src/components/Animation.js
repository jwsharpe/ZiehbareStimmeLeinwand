import React, { Component } from "react";
import Konva from "konva";
import { render } from "react-dom";
import { Stage, Layer, Circle } from "react-konva";
// import {useSprings, animated} from 'react-spring'

class Animation extends Component {

  getRandomBlue = () => {
    let r = Math.floor(Math.random() * 100);
    let g = Math.floor(Math.random() * 55);
    let b = Math.floor(Math.random() * 255 + 50);
    return `rgb( ${g}, ${r}, ${b})`;
  };

  getRandomLightBlue = () => {
    let r = Math.floor(Math.random() * 100 );
    let g = Math.floor(Math.random() * 35 );
    let b = (Math.random() * ((260 - 215) + 1)) + 215
    return `rgb( ${g}, ${g}, ${b})`;
  };

  getRandomGreen = () => {
    let r = Math.floor(Math.random() * 100 );
    let g = Math.floor(Math.random() * 55 );
    let b = Math.floor(Math.random() * 255 + 50);
    return `rgb( ${g}, ${b}, ${r})`;
  };

  getRandomPink = () => {
    let r = (Math.random() * ((255 - 255) + 1)) + 255
    let g = (Math.random() * ((135 - 124) + 1)) + 124
    let b = (Math.random() * ((135 - 124) + 1)) + 124
    return `rgb( ${255}, ${128}, ${128})`;
  };

  getRandomRed = () => {
    let r = Math.floor(Math.random() * 100 );
    let g = Math.floor(Math.random() * 45 );
    let b = Math.floor(Math.random() * 255 + 50);
    return `rgb( ${225}, ${g}, ${g})`;
  };

  getRandomYellow = () => {
    let r = (Math.random() * ((265 - 240) + 1)) + 240
    let g = (Math.random() * ((265 - 240) + 1)) + 240
    let b = (Math.random() * ((85 - 73) + 1)) + 73
    return `rgb( ${r}, ${g}, ${b})`;
  };

  getRandomAqua = () => {
    let r = Math.floor(Math.random() * 100 );
    let g = Math.floor(Math.random() * 55 );
    let b = Math.floor(Math.random() * 255 + 50);
    return `rgb( ${b}, ${255}, ${b})`;
  };

  getRandomPurple = () => {
    let r = (Math.random() * ((100 - 65) + 1)) + 65
    let g = (Math.random() * ((45 - 35) + 1)) + 35
    let b = (Math.random() * ((145 - 130) + 1)) + 130
    return `rgb( ${r}, ${g}, ${b})`;
  };

  getRandomColor = () => {
    let r = Math.floor(Math.random() * 55 + 15);
    let g = Math.floor(Math.random() * 55 + 150);
    let b = Math.floor(Math.random() * 55 + 150);
    return `rgb(${r},${g},${b})`;
  };

  getRandomWhite = () => {
    let r = (Math.random() * ((260 - 245) + 1)) + 245
 
    return `rgb(${r},${r},${r})`;
  };

  getRandomOrange = () => {
    let r = (Math.random() * ((230 - 215) + 1)) + 215
    let g = (Math.random() * ((180 - 165) + 1)) + 165
    let b = (Math.random() * ((65 - 55) + 1)) + 55
    return `rgb(${255},${155},${52})`;
  };

  getRandomBlack = () => {
    let r = (Math.random() * ((5 - 0) + 1)) + 0
    
    return `rgb(${r},${r},${r})`;
  };

  //

  getCircles = () => {

      let changeColorWithVoice

        if (this.props.voiceCommand === "zero") {
            changeColorWithVoice = this.getRandomGreen()
        }else if (this.props.voiceCommand === "one") {
            changeColorWithVoice = this.getRandomColor()
        }else if (this.props.voiceCommand === "two") {
            changeColorWithVoice = this.getRandomWhite()
        }else if (this.props.voiceCommand === "three") {
            changeColorWithVoice = this.getRandomRed()
        }else if (this.props.voiceCommand === "four") {
            changeColorWithVoice = this.getRandomPink()
        }else if (this.props.voiceCommand === "five") {
            changeColorWithVoice = this.getRandomYellow()
        }else if (this.props.voiceCommand === "six") {
            changeColorWithVoice = this.getRandomAqua()
        }else if (this.props.voiceCommand === "seven") {
            changeColorWithVoice = this.getRandomPurple()
        }else if (this.props.voiceCommand === "eight") {
            changeColorWithVoice = this.getRandomBlack()
        }else if (this.props.voiceCommand === "nine") {
            changeColorWithVoice = this.getRandomOrange()
        }else  {
            changeColorWithVoice = this.getRandomLightBlue()
        }
     
    return [...Array(235)].map((ele, i) => (
      <Circle
        key={i}
        x={Math.random() * window.innerWidth * 2 - window.innerWidth / 2}
        y={Math.random() * window.innerHeight * 2 - window.innerHeight / 2}
        radius={Math.floor(Math.random() * 150)}
        fill={changeColorWithVoice}
        // opacity={Math.random() * 0.1}
        ref={node => {
          this.circle = node;
        }}
      />
    ));
  };

  getWhiteCircles = () => {
    return [...Array(160)].map((ele, i) => (
      <Circle
        key={i}
        x={Math.random() * window.innerWidth * 2 - window.innerWidth / 2}
        y={Math.random() * window.innerHeight * 2 - window.innerHeight / 2}
        radius={Math.floor(Math.random() * 280)}
        fill={this.props.darkMode ? this.getRandomBlack() : this.getRandomWhite()}
        opacity={Math.random() * 0.6}
        ref={node => {
          this.whiteCircle = node;
        }}
      />
    ));
  };
  getRandomCircles = () => {

    let changeColorWithVoice2

    if (this.props.voiceCommand === "one") {
        changeColorWithVoice2 = this.getRandomGreen()
    }else if (this.props.voiceCommand === "three") {
        changeColorWithVoice2 = this.getRandomWhite()
    }else if (this.props.voiceCommand === "five") {
        changeColorWithVoice2 = this.getRandomLightBlue()
    }else if (this.props.voiceCommand === "four") {
        changeColorWithVoice2 = this.getRandomPink()
    }else if (this.props.voiceCommand === "seven") {
        changeColorWithVoice2 = this.getRandomYellow()
    }else if (this.props.voiceCommand === "six") {
        changeColorWithVoice2 = this.getRandomRed()
    }else if (this.props.voiceCommand === "two") {
        changeColorWithVoice2 = this.getRandomPurple()
    }else if (this.props.voiceCommand === "eight") {
        changeColorWithVoice2 = this.getRandomBlack()
    }else if (this.props.voiceCommand === "nine") {
        changeColorWithVoice2 = this.getRandomOrange()
    }else  {
        changeColorWithVoice2 = this.getRandomRed()
    }

    return [...Array(200)].map((ele, i) => (
      <Circle
        key={i}
        x={Math.random() * window.innerWidth * 2 - window.innerWidth / 2}
        y={Math.random() * window.innerHeight * 2 - window.innerHeight / 2}
        radius={Math.floor(Math.random() * 100)}
        fill={changeColorWithVoice2}
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
            (Math.sin(frame.time / period + random) + 0.6) / 1.5 + .7
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
          {this.getCircles()}
          {this.getRandomCircles()}
          {this.getWhiteCircles()}
        </Layer>
      </Stage>
    );
  }
}

export default Animation;
