# react-native-art-hcdwave
A concise water wave animation process view writed by React Native Art.

<img src="https://github.com/Jvaeyhcd/react-native-art-wave/blob/master/gif/ios.gif?raw=true" width="375"/>
<img src="https://github.com/Jvaeyhcd/react-native-art-wave/blob/master/gif/android.gif?raw=true" width="375"/>
![Example 2](https://github.com/Jvaeyhcd/react-native-art-wave/blob/master/gif/android.gif?raw=true)

## Install
``` bash
npm i react-native-art-hcdwave
```

## Run Example

``` bash
yarn
yarn start
yarn run-ios            
yarn run-android        
```

## Dependency

### Android

Don't need any dependency. Android incloud the ART library.

### iOS

1. Right click on the project -> Add Files to `Your Project Name` -> Select `Project path`/node_modules/react-native/Libraries/ART/ART.xcodeproj.
2. Add `libART.a` to 'Link Binary With Libraries'.

## Example
``` javascript
import React, {Component} from 'react';
import {
  StyleSheet, 
  View
} from 'react-native';

import { HcdWaveView } from './src/components/HcdWaveView'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HcdWaveView
          surfaceWidth = {230} 
          surfaceHeigth ={230}
          powerPercent = {76}
          type="dc"
          style = {{backgroundColor:'#FF7800'}}></HcdWaveView>
        <HcdWaveView
          surfaceWidth = {230} 
          surfaceHeigth ={230}
          powerPercent = {76}
          type="ac"
          style = {{backgroundColor:'#FF7800'}}></HcdWaveView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#18A4FD',
  }
});
```

