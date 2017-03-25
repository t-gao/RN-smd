import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

export default class MainTitleBar extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {};
    //     this.openDrawer = this.openDrawer.bind(this);
    // }

    render() {
        return <View style={styles.container}>
                  <TouchableHighlight style = {styles.burg}
                      onPress={() => {console.log("Titlebar Open Drawer Button onPress"); this.props.openDrawer();}}
                  >
                    <Image source={require('./img/title_burg_1.png')} style={{width: 44, height: 44}} />
                  </TouchableHighlight>

                  <TouchableHighlight style = {styles.avatar}
                      onPress={() => {this.selectAvatar()}}
                  >
                    <Image source={require('./img/default_avatar.png')} style={{width: 44, height: 44}} />
                  </TouchableHighlight>

                  <Text style = {styles.name} >塘泥</Text>
               </View>
    }

    selectAvatar = () => {
      console.log("Titlebar Avatar onPress");
    }

    // openDrawer() {
    //     //todo
    // }
}

const styles = StyleSheet.create({
  container: {
    height:44,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#cccccc',
  },
  burg: {
    width: 44,
    height: 44,
  },
  avatar: {
    width: 44,
    height: 44,
  },
  name: {
    fontSize: 18,
    color: '#c39d9d',
  }
});