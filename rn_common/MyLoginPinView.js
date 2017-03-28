import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import PercentageCircle from 'react-native-percentage-circle';
import * as Progress from 'react-native-progress';

export default class MyLoginPinView extends Component {
    constructor(props) {
        super(props);
        this.state = {curPin: "fake pin", showProgress: false, showLastPin: true, lastPin: 'fake last pin'};//fixme
    }

    _renderProgress() {
        if (this.state.showProgress) {
            return (
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
            );
        } else {
            return null;
        }
    }

    _getCircleRadius() {
        if (this.state.showProgress) {
            return 100 - 8;
        } else {
            return 100 - 8;//fixme
        }
    }

    _getCircleColor() {
        if (this.state.showProgress) {
            return "#00000000";
        } else {
            return "#34495e";
        }
    }

    _lastPin() {
        return this.state.lastPin;
    }

    _renderLastPinView() {
        if (this.state.showLastPin) {
            return (
                <View style = {styles.lastPin}>
                    <Text style = {styles.lastPinText} > {this._lastPin()} </Text>
                </View>
            );
        } else {
            return (
                <View style = {styles.lastPinHolder}>
                </View>
            );
        }

    }

    onRefreshPin() {
        //todo
    }

    onLoadLastPin() {
        //todo
    }

    render() {
        return (
            <View style = {styles.container} >
                <View style = {styles.top_container} >
                    <View style = {styles.circle_progress_container} >
                        <View style = {styles.circle_container} >
                            <PercentageCircle style = {styles.circle}
                                    radius={this._getCircleRadius()} bgcolor="#fff" borderWidth={2} percent={100} color={this._getCircleColor()}>
                                <View>
                                    <Text style={styles.pinLable}>当前pin码</Text>
                                </View>
                                <View>
                                    <Text style={styles.pin}>{this.state.curPin}</Text>
                                </View>
                            </PercentageCircle>
                        </View>
                    {this._renderProgress()}
                    </View>
                </View>
                
                <View style = {styles.bottom_container}>
                    <View style = {styles.lastPinContainer}>
                        {this._renderLastPinView()}
                    </View>
                    <View style = {styles.bottomBtnsContainer}>
                        <TouchableHighlight onPress={this.onRefreshPin}>
                            <Text >更换PIN码</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={this.onLoadLastPin}>
                            <Text >前个PIN码</Text>
                        </TouchableHighlight>
                    </View>
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
    alignItems: 'stretch',
    backgroundColor: '#d8d8d8',
  },
  top_container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle_progress_container: {
    marginTop: 30,
    width: 200,
    height: 200,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle_container: {
    position:'absolute',
    top:0,
    width: 200,
    height: 200,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
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

  bottom_container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    marginLeft: 40,
    marginRight: 40,
    marginTop: 50,
    backgroundColor: '#ff0000',
  },
  lastPinContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: 60,
    backgroundColor: '#0000ff',
  },
  lastPin: {
    height: 60,
    width: 80,
    backgroundColor: '#fff',
  },
  lastPinHolder: {
    height: 60,
    width: 80,
    backgroundColor: '#00000000',
  },
  lastPinText: {
    color: '#c39d9d',
  },
  bottomBtnsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 36,
    backgroundColor: '#000099',
  },
});

