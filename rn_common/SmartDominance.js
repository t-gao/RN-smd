/**
 * SmartDominance main entrance view
 */

import React, { Component } from 'react';
import { Navigator } from 'react-native';

import Splash from './splash'

export default class SmartDominance extends Component {
  render() {
    let defaultName = 'Splash';
    let defaultComponent = Splash;
    return (
        <Navigator
          initialRoute={{ name: defaultName, component: defaultComponent }}
          configureScene={(route) => {
            return Navigator.SceneConfigs.VerticalDownSwipeJump;
          }}
          renderScene={this.navigatorRenderScene}
        />
    );
  }

  navigatorRenderScene(route, navigator) {
    let Component = route.component;
    return <Component {...route.params} navigator={navigator} />
  }
}


