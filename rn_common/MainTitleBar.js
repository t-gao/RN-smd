import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

export default class MainContent extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {};
    //     this.openDrawer = this.openDrawer.bind(this);
    // }

    render() {
        return <TouchableHighlight
                   onPress={() => {console.log("Titlebar Open Drawer Button onPress"); this.props.openDrawer();}}
                   underlayColor = {'#9d2525'}
               >
                   <Text style = {styles.title} >TITLE BAR</Text>
               </TouchableHighlight>
    }

    // openDrawer() {
    //     //todo
    // }
}

const styles = StyleSheet.create({
  title: {
    height: 60,
    fontSize: 36,
    textAlign: 'center',
    color: '#c39d9d',
  }
});