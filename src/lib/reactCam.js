import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

class Camera extends Component {
  constructor(props) {
    super(props);

    const { width, height, front } = this.props;
    navigator.mediaDevices
      .getUserMedia({
        audio: false,
        video: {
          width: { ideal: width },
          height: { ideal: height },
          facingMode: front ? 'user' : 'environment',
        },
      })
      .then(this.success)
      .catch(this.error);
  }

  success = stream => {
    const video = this.refs.cam;
    video.srcObject = stream;
    video.play();
  };

  error = err => {
    const { onError } = this.props;

    if (onError) {
      onError(err);
    } else {
      console.log(err);
    }
  };

  capture = () => {
    const { capture } = this.props;
    const canvas = this.refs.canvas;
    const video = this.refs.cam;
    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0);
    capture(canvas.toDataURL('image/jpeg'));
  };

  render() {
    const defaultColor = '#2acef5';
    const { btnColor, width, height, focusWidth, focusHeight } = this.props;

    return (
      <div className="camera-container">
        <video
          id="video"
          width={width}
          height={height}
          autoPlay
          playsInline
          ref="cam"
        />
        {this.props.showFocus ? (
          <div
            className="camera-focus"
            style={{
              borderColor: btnColor || defaultColor,
              width: focusWidth || '80%',
              height: focusHeight || '50%',
            }}
          />
        ) : null}
        <canvas
          id="canvas"
          width={width}
          height={height}
          ref="canvas"
          style={{ display: 'none' }}
        />
      </div>
    );
  }
}

Camera.propTypes = {
  front: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  capture: PropTypes.func.isRequired,
  showFocus: PropTypes.bool,
  btnColor: PropTypes.string,
  focusWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  focusHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onError: PropTypes.func,
};

export default Camera;
