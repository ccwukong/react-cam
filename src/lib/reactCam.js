import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
          facingMode: this.props.front ? 'user' : 'environment',
        },
      })
      .then(this.success)
      .catch(this.error);
    this.state = {
      camWidth: null,
      camHeight: null,
    };
  }
  success = stream => {
    const video = this.refs.cam;
    video.srcObject = stream;
    video.play();
  };

  error = err => {
    console.log(err);
  };

  capture = () => {
    const canvas = this.refs.canvas;
    const video = this.refs.cam;
    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0);
    this.props.capture(canvas.toDataURL('image/jpeg'));
  };

  componentDidMount() {
    const video = this.refs.cam;
    video.addEventListener('playing', () => {
      this.setState({
        camWidth: video.videoWidth,
        camHeight: video.videoHeight,
      });
    });
  }

  render() {
    const defaultColor = '#2acef5';
    return (
      <div>
        <video id="video" autoPlay playsInline ref="cam" />
        {this.props.showFocus ? (
          <div
            className="camera-focus"
            style={{
              borderColor: this.props.btnColor
                ? this.props.btnColor
                : defaultColor,
            }}
          />
        ) : null}
        <div
          className="camera-btn-outer flexbox"
          style={{
            background: this.props.btnColor
              ? this.props.btnColor
              : defaultColor,
          }}
        >
          <input
            type="button"
            onClick={this.capture}
            id="camera-btn"
            style={{
              background: this.props.btnColor
                ? this.props.btnColor
                : defaultColor,
            }}
          />
        </div>
        <canvas
          id="canvas"
          width={this.state.camWidth}
          height={this.state.camHeight}
          ref="canvas"
          style={{ display: 'none' }}
        />
      </div>
    );
  }
}

Camera.propTypes = {
  front: PropTypes.bool,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  capture: PropTypes.func.isRequired,
  showFocus: PropTypes.bool,
  btnColor: PropTypes.string,
};

export default Camera;
