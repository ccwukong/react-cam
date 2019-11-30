# react-cam

![npm](https://img.shields.io/npm/dw/react-cam.svg)

HTML5 Web/Mobile camera for ReactJS

# Installation

## NPM

```console
npm install react-cam
```

## Yarn

```console
yarn add react-cam
```

# How to use it?

## props

| Prop name   | Optional | Default   | Description                                                                    |
| ----------- | -------- | --------- | ------------------------------------------------------------------------------ |
| showFocus   | Yes      | false     | show/hide the blue focus box, basically useless...                             |
| front       | Yes      | false     | true: front camera, false: rear camera                                         |
| capture     | No       | None      | A function to handle base64 string image                                       |
| width       | No       | 480       | Camera pixel width, percentage or absolute value                               |
| height      | No       | 320       | Camera pixel height, percentage or absolute value                              |
| focusWidth  | Yes      | 80%       | Camera focus box width, percentage or absolute value                           |
| focusHeight | Yes      | 50%       | Camera focus box height, percentage or absolute value                          |
| btnColor    | Yes      | '#2acef5' | Set color of the capture button                                                |
| onError     | No       |           | Handles camera error, the error object will be passed as the function argument |

## example

```javascript
import React, { Fragment, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Camera } from 'react-cam';

function capture(imgSrc) {
  console.log(imgSrc);
}

const App = () => {
  const cam = useRef(null);
  return (
    <Fragment>
      <Camera
        showFocus={true}
        front={false}
        capture={capture}
        ref={cam}
        width="80%"
        height="auto"
        focusWidth="80%"
        focusHeight="60%"
        btnColor="white"
      />
      <button onClick={img => cam.current.capture(img)}>Take image</button>
    </Fragment>
  );
};
ReactDOM.render(<App />, document.getElementById('root'));
```
