import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PercentageCircle from 'react-native-percentage-circle';

export default class MyLoginPinView extends Component {
    constructor(props) {
        super(props);
        this.state = {curPin: "fake pin"};//fixme
    }

    render() {
        return (
            <View style = {styles.container} >
                <PercentageCircle style = {styles.circle}
                         radius={100} bgcolor="#fff" borderWidth={4} percent={100} color={"#34495e"}>
                    <View>
                        <Text style={styles.pinLable}>当前pin码</Text>
                    </View>
                    <View>
                        <Text style={styles.pin}>{this.state.curPin}</Text>
                    </View>
                </PercentageCircle>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#d8d8d8',
  },
  circle: {
    marginTop: 30,
  },
  pinLable: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
    color: '#000000',
  },
  pin: {
    fontSize: 24,
    textAlign: 'center',
    color: '#c39d9d',
  },
});

