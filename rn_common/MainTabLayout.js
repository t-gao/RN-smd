import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { TabViewAnimated, TabBar } from 'react-native-tab-view';
import TitleBar from './MainTitleBar';
import InternalStaffView from './MainContent';//todo
import MyLoginPinView from './MyLoginPinView';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  statusBar: {
    height: 20,
  },
  title: {
    height: 44,
  },
  tabContainer: {
    flex: 1,
    backgroundColor: '#00ff00',
  },
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class MainTabLayout extends Component {
  state = {
    index: 0,
    routes: [
      { key: '1', title: '我的登录码' },
      { key: '2', title: '内部会员' },
    ],
  };

  _handleChangeTab = (index) => {
    this.setState({ index });
  };

  _renderHeader = (props) => {
    return <TabBar {...props} />;
  };

  _renderScene = ({ route }) => {
    switch (route.key) {
    case '1':
      return <MyLoginPinView />;
    case '2':
      return <InternalStaffView logout={this.props.logout} />;
    default:
      return null;
    }
  };

  render() {
    return (
      <View style={styles.container} >
        <View style = {styles.statusBar} />
        <TitleBar style={styles.title} openDrawer={this.props.openDrawer} />
        <TabViewAnimated style={styles.tabContainer}
            navigationState={this.state}
            renderScene={this._renderScene}
            renderHeader={this._renderHeader}
            onRequestChangeTab={this._handleChangeTab}
        />
      </View>
    );
  }
}
