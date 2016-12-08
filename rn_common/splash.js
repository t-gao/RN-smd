/**
 * SmartDominance Login scene
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import LoginScene from './LoginScene';

export default class SplashScene extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <View style = {styles.container}>
                <Text style = {styles.title}>
                    Smart Dominance
                </Text>
            </View>
        );
    }

    componentDidMount() {
        setTimeout(() => {this.gotoNext()}, 1500)
        // setTimeout(function() {
        //    this.gotoNext();
        // }, 1500);
    }

    gotoNext() {
        const { navigator } = this.props;

        if (navigator) {
            navigator.replace({
                name: 'LoginScene',
                component: LoginScene,
            })
        }
    }
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
    fontSize: 36,
    textAlign: 'center',
    color: '#c39d9d',
  },
});