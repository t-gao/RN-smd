/**
 * SmartDominance Main scene
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

var Api = require("./Api"); //FIXME
var SessionManager = require("./SessionManager");
import LoginScene from './LoginScene';

const drawerStyles = {
  drawer: {
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 0,
  }
}

import Drawer from 'react-native-drawer';
import MyMainView from './MainTabLayout';
import MyControlPanel from './ControlPanel';

let counter = 0;
export default class MainScene extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      drawerType: 'overlay',
      openDrawerOffset:100,
      closedDrawerOffset:0,
      panOpenMask: .1,
      panCloseMask: .9,
      captureGestures: 'closed',
      relativeDrag: false,
      panThreshold: .25,
      tweenHandlerOn: false,
      tweenDuration: 350,
      tweenEasing: 'linear',
      disabled: false,
      tweenHandlerPreset: null,
      acceptDoubleTap: false,
      acceptTap: true,
      acceptPan: true,
      tapToClose: false,
      negotiatePan: false,
      rightSide: false,
    };
    this.onLogout = this.onLogout.bind(this);
  }

  componentDidMount() {
    SessionManager.getSessionAsync()
        .then((session) => {
            if (session !== null && session !== undefined && session.length > 0) {
                this.getUserInfo(session);
            } else {
                this.onLogout();
            }
        })
        .catch((err) => {
            this.onLogout();
        });
  }

  getUserInfo(token) {
    Api.getCurrentUserInfo(token, (user) => {
      this.setState({curUser: user});
    });
  }

  setDrawerType(type){
    this.setState({
      drawerType: type
    })
  }

  noopChange(){
    this.setState({
      changeVal: Math.random()
    })
  }

  openDrawer(){
    this.drawer.open()
    console.log("OPEN");
  }

  closeDrawer(){
    this.drawer.close()
    console.log("CLOSE");
  }

  setStateFrag(frag) {
    this.setState(frag);
  }

  gotoSecurityCenter() {
    console.log("gotoSecurityCenter called");//todo
  }

  gotoSettings() {
    console.log("gotoSettings called");//todo
  }

  // FIXME: remove this
  onLogout() {

    SessionManager.clearSession();

    const { navigator } = this.props;

    if (navigator) {

      navigator.replace({
          name: 'LoginScene',
          component: LoginScene,
      })

    }
  }

  render() {
    // var _clsDrawer = this.closeDrawer;//.bind(this);

    var controlPanel = <MyControlPanel
      closeDrawer={() => this.drawer.close()}
      gotoSecurityCenter = {() => {this.gotoSecurityCenter()}}
      gotoSettings = {() => {this.gotoSettings()}}
      logout = {() => {this.onLogout()}}
      user = {this.state.curUser}
     />
    return (
      <Drawer
        ref={c => this.drawer = c}
        type={this.state.drawerType}
        animation={this.state.animation}
        openDrawerOffset={this.state.openDrawerOffset}
        closedDrawerOffset={this.state.closedDrawerOffset}
        panOpenMask={this.state.panOpenMask}
        panCloseMask={this.state.panCloseMask}
        relativeDrag={this.state.relativeDrag}
        panThreshold={this.state.panThreshold}
        content={controlPanel}
        styles={drawerStyles}
        disabled={this.state.disabled}
        tweenDuration={this.state.tweenDuration}
        tweenEasing={this.state.tweenEasing}
        acceptDoubleTap={this.state.acceptDoubleTap}
        acceptTap={this.state.acceptTap}
        acceptPan={this.state.acceptPan}
        captureGestures={this.state.captureGestures}
        tapToClose={this.state.tapToClose}
        negotiatePan={this.state.negotiatePan}
        changeVal={this.state.changeVal}
        side={this.state.rightSide ? 'right' : 'left'}
        >
        <MyMainView
          logout={this.onLogout}
          openDrawer={() => this.drawer.open()} />
      </Drawer>
    );
  }
}