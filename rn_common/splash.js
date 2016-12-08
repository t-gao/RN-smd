/**
 * SmartDominance Login scene
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class SplashScene extends Component {
    render() {
        return(
            <View style = {styles.container}>
                <Text style = {styles.title}>
                    Smart Dominance
                </Text>
            </View>
        );
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