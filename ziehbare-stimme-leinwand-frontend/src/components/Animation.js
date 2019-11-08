import React, { Component } from 'react';
import Canvas  from "./Canvas.js";

 class Animation extends Component {

    // componentDidMount() {
    //     this.rAF = requestAnimationFrame(this.updateAnimationState);
    // }
      
    // componentWillUnmount() {
    //     if(this.state.opacity < 0){
    //     cancelAnimationFrame(this.rAF);
    //     }
    // }
      
    // updateAnimationState = () => {

    //     this.rAF = requestAnimationFrame(this.updateAnimationState);
    // }
    
    // component lifecycle______________________________________________________________________________________________



      
      render() {
        return <Canvas  />
      }
}

export default Animation;