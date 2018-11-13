/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

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
