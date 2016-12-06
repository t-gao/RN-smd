/**
 * SmartDominance Login scene
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight
} from 'react-native';

export default class LoginScene extends Component {
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
                        <TextInput style = {styles.input} blurOnSubmit={true}/>
                    </View>
                    <View style = {[styles.action, styles.actionNoFirst]}>
                        <Text style = {styles.label}>
                            password
                        </Text>
                        <TextInput style = {styles.input}/>
                    </View>
                    <TouchableHighlight style = {styles.actionButton} onPress={this.onLoginPress}>
                        <Text style = {styles.actionButtonText} >Login</Text>
                    </TouchableHighlight>
                </View>
                <View style = {styles.bottomButtons}>
                    <Text style = {styles.bottomButton}>简体中文</Text>
                    <Text style = {styles.bottomButton}>English(US)</Text>
                </View>
            </View>
        );
    }

    onLoginPress() {
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
  actionButton: {
    height: 44,
    backgroundColor: '#8d4545',
    alignSelf: 'stretch',
    marginTop:50,
  },
  actionButtonText: {
    height: 44,
    fontSize: 16,
    textAlign: 'center',
    color: '#ffffff',
    alignSelf: 'stretch',
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
  },
  bottomButtons: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    marginLeft: 60,
    marginRight: 60,
    marginBottom: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomButton: {
    fontSize: 18,
    textAlign: 'center',
    color: '#333333',
  },
});