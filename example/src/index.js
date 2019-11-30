import React, { Fragment, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Camera } from '../../src';

function capture(imgSrc) {
  console.log(imgSrc);
}

const App = () => {
  const cam = useRef(null);
  return (
    <Fragment>
      <Camera
        showFocus={false}
        front={false}
        capture={capture}
        ref={cam}
        width="80%"
        height="80%"
        focusWidth="30%"
        focusHeight="30%"
        btnColor="white"
      />
      <button onClick={img => cam.current.capture(img)}>Take image</button>
    </Fragment>
  );
};
ReactDOM.render(<App />, document.getElementById('root'));
