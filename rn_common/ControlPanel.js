import React, { Component } from 'react';
import {
  SwitchIOS,
  View,
  Text,
  Image,
  TouchableHighlight
} from 'react-native';

import styles from './styles';
import Button from './Button';

export default class ControlPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.clsDrawer = this.clsDrawer.bind(this);
    // this.clsDrawer = this.props.closeDrawer();

    this.selectAvatar = this.selectAvatar.bind(this);
  }

  selectAvatar() {
    console.log("ControlPanel Avatar onPress");
    //fixme: not working
  }

  _getUserName() {
    return 'Jian Gao';//todo
  }

  _getUserEmail() {
    return 'gaojian000@gmail.com';//todo
  }

  render() {
    return (
      <View style={styles.controlPanel}>
        <View style = {styles.controlPanelHeader}>
           <TouchableHighlight style={styles.controlPanelAvatar}
                onPress={this.selectAvatar}
            >
              <Image source={require('./img/default_avatar.png')} style={styles.controlPanelAvatarImg} />
            </TouchableHighlight>
            <Text style={styles.controlPanelName}>
              {this._getUserName()}
            </Text>
            <Text style={styles.controlPanelEmail}>
              {this._getUserEmail()}
            </Text>
        </View>
        <View style = {styles.controlPanelBottom}>
          <TouchableHighlight style = {styles.controlPanelRowTouchable} onPress = {() => {this.props.gotoSecurityCenter();}} >
            <View style = {styles.controlPanelRow}>
              <Image source={require('./img/icon_basic.png')} style={styles.controlPanelRowIcon} />
              <Text style={styles.controlPanelRowText}>
                Security Center
              </Text>
            </View>
          </TouchableHighlight>
          <Button
            onPress={() => {console.log("Close Drawer Button onPress"); this.props.closeDrawer();}}
            text="Close Drawer"
          />
        </View>
      </View>
    )
  }

  // clsDrawer() {
  //   console.log("clsDrawer clicked");
  // }
}
