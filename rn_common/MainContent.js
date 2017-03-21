/**
 * SmartDominance Main content
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

// var SessionManager = require("./SessionManager");
// import LoginScene from './LoginScene';

export default class MainContent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        // this.onLogout = this.onLogout.bind(this);
    }

    render() {
        return(
            <View style = {styles.container}>
                <Text style = {styles.title}>
                    MAIN SCENE
                </Text>
                <TouchableHighlight
                    style={styles.clickableButton}
                    onPress={this.props.logout}
                    underlayColor={'#d8d8d8'}
                >
                    <Text style = {styles.buttonText}>退出登录</Text>
                </TouchableHighlight>
            </View>
        );
    }

    // FIXME: remove this
    // onLogout() {

    //     SessionManager.clearSession();

    //     const { navigator } = this.props;

    //     if (navigator) {

    //         navigator.replace({
    //             name: 'LoginScene',
    //             component: LoginScene,
    //         })

    //     }
    // }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d8d8d8',
  },
  title: {
    fontSize: 50,
    textAlign: 'center',
    color: '#c39d9d',
  },
  clickableButton: {
    marginTop: 40,
    alignSelf: 'center',
    justifyContent: 'flex-end',
  },
  buttonText: {
    height: 44,
    fontSize: 16,
    textAlign: 'center',
    color: '#ffffff',
    alignSelf: 'stretch',
  }
});