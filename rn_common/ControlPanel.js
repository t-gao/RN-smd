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
    let user = this.props.user;
    if (user != undefined) {
      let name = user.name;
      if (name != undefined) {
        return name.firstName + ' ' + name.lastName;//'Jian Gao';
      }
    }
  }

  _getUserEmail() {
    // return 'gaojian000@gmail.com';//todo
    return '';
  }

  render() {
    return (
      <View style={styles.controlPanel}>
        <View style = {styles.controlPanelHeader}>
           <TouchableHighlight style={styles.controlPanelAvatar}
                onPress={this.selectAvatar}
                underlayColor = {'#00000000'}
            >
              <Image source={require('./img/icon_photo.png')} style={styles.controlPanelAvatarImg} />
            </TouchableHighlight>
            <Text style={styles.controlPanelName}>
              {this._getUserName()}
            </Text>
            <Text style={styles.controlPanelEmail}>
              {this._getUserEmail()}
            </Text>
        </View>

        <View style = {styles.controlPanelMenu}>
          <TouchableHighlight underlayColor={'#d8d8d8'} style = {styles.controlPanelRowTouchable} onPress = {() => {this.props.gotoSecurityCenter();}} >
            <View style = {styles.controlPanelRow}>
              <Image source={require('./img/icon_account.png')} style={styles.controlPanelRowIcon} />
              <Text style={styles.controlPanelRowText}>
                Security Center
              </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight underlayColor={'#d8d8d8'} style = {styles.controlPanelRowTouchable} onPress = {() => {this.props.gotoSettings();}} >
            <View style = {styles.controlPanelRow}>
              <Image source={require('./img/icon_settings.png')} style={styles.controlPanelRowIcon} />
              <Text style={styles.controlPanelRowText}>
                Settings
              </Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style = {styles.controlPanelBottom}>
          <View style = {styles.horrizontalDivider}/>
          <TouchableHighlight underlayColor={'#d8d8d8'} style = {styles.controlPanelRowTouchable} onPress = {() => {this.props.logout();}} >
            <View style = {styles.controlPanelRow}>
              <Image source={require('./img/icon_logout.png')} style={styles.controlPanelRowIcon} />
              <Text style={styles.controlPanelRowText}>
                Logout
              </Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    )
  }

}
