/**
 * SmartDominance main entrance view
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight
} from 'react-native';

import LoginScene from './LoginScene';

export default class SmartDominance extends Component {
  render() {
    return (
        <Navigator
          initialRoute={{index: 0}}
          renderScene={this.navigatorRenderScene}
          style={{flex: 1}}
        />
    );
  }

  navigatorRenderScene(route, navigator) {
      switch (route.index) {
          case 0:
            return <LoginScene/>;
          case 1:
            return <Text main screen/>;
      }
  }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 36,
        textAlign: 'center',
        color: '#c39d9d',
    },
});

