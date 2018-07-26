import React from 'react';
import ReactDOM from 'react-dom';
import { Camera } from './lib';

const App = () => (
  <div style={{ width: 640, margin: "15px auto" }}>
    <h1>Hello React</h1>
    <Camera
      showFocus={true}
      front={false}
      capture={()=>{}}
      width={1920}
      height={1440} />
  </div>
);
ReactDOM.render(<App />, document.getElementById("root"));