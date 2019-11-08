import React from 'react';


class Canvas extends React.Component {

     
    componentDidUpdate() {
        this.circles()
    }

    
    circles(){
        let x = 200
        let y = 200
        let radius = 40

        const canvas = this.refs.canvas;
        const c = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;

        c.beginPath()
        c.arc(x, y, radius, 0, Math.PI * 2, false)
        c.fillRect(0, 0, width, height);
        c.fillStyle = 'rgba(2,5,255,.7)'
        c.strokeStyle = "blue"
        c.stroke()
    }
    
render() {
    return <canvas width={window.innerWidth} height={window.innerHeight} ref="canvas"></canvas>;
    }
}

export default Canvas;