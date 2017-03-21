import React, { Component } from 'react';
import {
  SwitchIOS,
  View,
  Text
} from 'react-native';

import styles from './styles';
import Button from './Button';

export default class ControlPanel extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  //   // this.clsDrawer = this.clsDrawer.bind(this);
  //   // this.clsDrawer = this.props.closeDrawer();
  // }

  render() {
    return (
      <View style={styles.controlPanel}>
        <Text style={styles.controlPanelWelcome}>
          Control Panel
        </Text>
        <Button
          onPress={() => {console.log("Close Drawer Button onPress"); this.props.closeDrawer();}}
          text="Close Drawer"
        />
      </View>
    )
  }

  // clsDrawer() {
  //   console.log("clsDrawer clicked");
  // }
}
