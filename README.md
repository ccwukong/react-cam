# react-cam
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

| Prop name  | Default | Description |
| ------------- | ------------- | ------------- |
| showFocus  | false  | show/hide the blue focus box, basically useless... |
| front  | false  | true: front camera, false: rear camera |
| capture  | None  | A function to handle base64 string image |
| width  | 480  | Camera pixel width |
| height  | 320  | Camera pixel height |
| btnColor  | '#2acef5'  | Set color of the capture button |

## example

```javascript
import React, {Component} from 'react';
import { Camera } from 'react-cam';

...

class ContainerComponent extends Component{
  ...

  capture = (imgSrc) => {
    // imgSrc is base64 string
  }

  render(){
    return (
      //Recommended resolution for web cams and phone cameras 1920 x 1440
      <Camera
        showFocus={true} //show/hide focus box, basically useless...
        front={false} // true: front camera, false: rear camera
        capture={this.capture}
        width={1920} 
        height={1440}
        btnColor="#000"
        />
    )
  }
}

```