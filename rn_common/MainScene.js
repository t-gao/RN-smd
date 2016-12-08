/**
 * SmartDominance Main scene
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class SplashScene extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <View style = {styles.container}>
                <Text style = {styles.title}>
                    MAIN SCENE
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
    fontSize: 50,
    textAlign: 'center',
    color: '#c39d9d',
  },
});