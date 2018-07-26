#react-cam
HTML5 Web/Mobile camera for ReactJS

#Installation

## NPM
```console 
npm install react-cam
```

## Yarn
```console
yarn add react-cam
```


#How to use it?
```javascript
import React, {Component} from 'react';
import { Camera } from 'react-cam';

...

class ContainerComponent extends Component{
  ...

  render(){
    return (
      //Recommended resolution for web cams and phone cameras 1920 x 1440
      <Camera
        width={1920} 
        height={1440}
        />
    )
  }
}

```