import React from 'react';
import ReactDOM from 'react-dom';
import { Camera } from './lib';

function capture(imgSrc) {
  console.log(imgSrc);
}

const App = () => (
  <div style={{ width: 640, margin: '15px auto' }}>
    <h1>Hello React</h1>
    <Camera
      showFocus={true}
      front={false}
      capture={capture}
      width="80%"
      height="auto"
      focusWidth="200px"
      focusHeight="200px"
      btnColor="yellow"
    />
  </div>
);
ReactDOM.render(<App />, document.getElementById('root'));
