import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PercentageCircle from 'react-native-percentage-circle';
import * as Progress from 'react-native-progress';

export default class MyLoginPinView extends Component {
    constructor(props) {
        super(props);
        this.state = {curPin: "fake pin"};//fixme
    }

    render() {
        return (
            <View style = {styles.container} >
                <View style = {styles.circle_container} >
                    <PercentageCircle style = {styles.circle}
                            radius={100} bgcolor="#fff" borderWidth={2} percent={100} color={"#34495e"}>
                        <View>
                            <Text style={styles.pinLable}>当前pin码</Text>
                        </View>
                        <View>
                            <Text style={styles.pin}>{this.state.curPin}</Text>
                        </View>
                    </PercentageCircle>
                    <Progress.CircleSnail style = {styles.progress_circle}
                        size = {200}
                        thickness = {8}
                        spinDuration = {1000}
                        color={[
                        '#F44336',
                        '#2196F3',
                        '#009688',
                        ]}
                    />
                </View>
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
  circle_container: {
    marginTop: 30,
  },
  circle: {
    position:'absolute',
    top:0,
  },
  progress_circle: {
    position:'absolute',
    top:0,
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

