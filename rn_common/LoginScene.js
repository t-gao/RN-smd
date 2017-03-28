/**
 * SmartDominance Login scene
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  TextInput,
  TouchableHighlight
} from 'react-native';

// var Api = require("./Api"); //FIXME
var Api = require("./mock/MockApi");

import MainScene from './MainScene';

export default class LoginScene extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onLoginPress = this.onLoginPress.bind(this);
    }
  
    render() {

        return (
            <View style = {styles.container}>
                <Text style = {styles.title}>
                    Smart Dominance
                </Text>
                <View style = {styles.actions}>
                    <View style = {styles.action}>
                        <Text style = {styles.label}>
                            username / email / mobile
                        </Text>
                        <TextInput
                          style = {styles.input}
                          blurOnSubmit={true}
                          returnKeyType = {'next'}
                          autoCapitalize = {'none'}
                          autoCorrect = {false}
                          onChangeText = {(un) => this.setState({username: un})}
                        />
                    </View>
                    <View style = {[styles.action, styles.actionNoFirst]}>
                        <Text style = {styles.label}>
                            password
                        </Text>
                        <TextInput
                          style = {styles.input}
                          secureTextEntry = {true}
                          returnKeyType = {'go'}
                          autoCapitalize = {'none'}
                          autoCorrect = {false}
                          onChangeText = {(pw) => this.setState({password: pw})}
                        />
                    </View>
                    <View style = {[styles.action, styles.actionPaddingTop]}>
                        <TouchableHighlight
                          style={styles.actionRight}
                          onPress={this.onForgetPwPress}
                          underlayColor={'#d8d8d8'}
                        >
                          <Text style = {[styles.actionRight, styles.label, styles.btnText, styles.btnTextRight]}>忘记密码</Text>
                        </TouchableHighlight>
                    </View>
                    <TouchableHighlight
                      style = {styles.actionButton}
                      onPress={this.onLoginPress}
                      underlayColor = {'#9d2525'}
                    >
                        <Text style = {styles.actionButtonText} >Login</Text>
                    </TouchableHighlight>
                </View>
                <View style = {styles.bottomButtons}>
                    <TouchableHighlight style = {styles.bottomButton} onPress={this.switchToCn}
                          underlayColor={'#e0e0e0'}>
                        <Text style = {[styles.btnText, styles.bottomButtonText]}>简体中文</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style = {styles.bottomButton} onPress={this.switchToEn}
                          underlayColor={'#e0e0e0'}>
                        <Text style = {[styles.btnText, styles.bottomButtonText]}>English(US)</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }

    onForgetPwPress() {
      //todo
        //console.log('onForgetPwPress');
    }

    onLoginPress() {
        var un = this.state.username;
        var pw = this.state.password;
        if (un == undefined || un == null || un === '') {
            Alert.alert('please input your username!');
            return;
        }
        if (pw == undefined || pw == null || pw === '') {
            Alert.alert('please input your password!');
            return;
        }

        Api.login(un, pw, (result, msg) => {
            if (result) {
                console.log("login success");
                const { navigator } = this.props;

                if (navigator) {

                    navigator.replace({
                        name: 'MainScene',
                        component: MainScene,
                    })

                }
            } else {
                console.log("login failure, msg: " + msg);
                // Alert.alert(msg);FIXME
            }
        });
    }

    switchToCn() {
        //todo
    }

    switchToEn() {
        //todo
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#d8d8d8',
  },
  title: {
    marginTop: 60,
    fontSize: 36,
    textAlign: 'center',
    color: '#c39d9d',
  },
  actions: {
    alignSelf: 'stretch',
    marginLeft: 50,
    marginRight: 50,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  action: {
    alignSelf: 'stretch',
  },
  actionNoFirst: {
    marginTop:30,
  },
  actionPaddingTop: {
    marginTop:14,
  },
  actionButton: {
    height: 44,
    alignItems: 'center',
    backgroundColor: '#8d4545',
    alignSelf: 'stretch',
    marginTop:50,
  },
  actionRight: {
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
  },
  actionButtonText: {
    height: 44,
    fontSize: 16,
    textAlign: 'center',
    color: '#ffffff',
    alignSelf: 'stretch',
  },
  btnText: {
      padding: 10,
  },
  btnTextRight: {
    textAlign: 'right',
  },
  label: {
    alignSelf: 'stretch',
    fontSize: 16,
    textAlign: 'left',
    color: '#333333',
  },
  input: {
    alignSelf: 'stretch',
    marginTop: 15,
    fontSize: 14,
    textAlign: 'left',
    color: '#c39d9d',
    borderWidth: 2,
    borderColor: '#9f9f9f',
    height: 40,
    paddingLeft: 10,
  },
  bottomButtons: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    marginLeft: 55,
    marginRight: 55,
    marginBottom: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomButton: {
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
  },
  bottomButtonText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#333333',
  },
});