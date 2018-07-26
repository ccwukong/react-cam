import React, { Component } from 'react';
import './style.css';

class Camera extends Component {
  constructor(props) {
    super(props);
    navigator.mediaDevices
      .getUserMedia({
        audio: false,
        video: {
          width: { ideal: this.props.width },
          height: { ideal: this.props.height },
          facingMode: 'environment',
        },
      })
      .then(this.success)
      .catch(this.error);
    this.state = {
      camWidth: null,
      camHeight: null,
    }
  }
  success = stream => {
    const video = this.refs.cam;
    const CompatibleURL = window.URL || window.webkitURL;
    video.src = CompatibleURL.createObjectURL(stream);
    video.play();
  };

  error = error => {
    console.log('Failed: ', error.name, error.message);
  };
  
  capture = () => {
    const canvas = this.refs.canvas;
    const video = this.refs.cam;
    const context = canvas.getContext("2d");
    context.drawImage(video, 0, 0);
    this.props.capture(canvas.toDataURL("image/jpeg"));
  }

  componentDidMount(){
    const video = this.refs.cam;
    video.addEventListener("playing", () => {
      this.setState({
        camWidth: video.videoWidth,
        camHeight: video.videoHeight,
      });
    });
  }

  render() {
    return (
      <div>
        <video
            id="video"
            autoPlay
            ref="cam"
        />
        <div className="camera-focus" />
        <div
            className="camera-btn-outer flexbox"
            style={{ justifyContent: 'center', alignItems: 'center', bottom: 10 }}
          >
          <input type="button" onClick={this.capture} id="camera-btn" />
        </div>
        <canvas id="canvas" width={this.state.camWidth} height={this.state.camHeight} ref="canvas" style={{ display: 'none' }}></canvas>
      </div>
    );
  }
}

export default Camera;