/**
 * SmartDominance Login scene
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

//import { SessionManager } from './SessionManager'
var SessionManager = require("./SessionManager");
import LoginScene from './LoginScene';
import MainScene from './MainScene';

export default class SplashScene extends Component {
    constructor(props) {
        super(props);
        this.state = {app_name: "Smart Dominance"};
    }

    render() {
        let appName = this.state.app_name;
        return(
            <View style = {styles.container}>
                <Text style = {styles.title}>{appName}</Text>
            </View>
        );
    }

    componentDidMount() {
        // this.setState({app_name: SessionManager.getSession()});//getSession()返回的是Promise！
        SessionManager.getSessionAsync()
        .then((val) => {
            //this.setState({app_name: val});
        })
        .catch((err) => {
            //this.setState({app_name: "err"});
        });
        setTimeout(() => {this.gotoNext()}, 1500)
        // setTimeout(function() {
        //    this.gotoNext();
        // }, 1500);
    }

    gotoNext() {

        const { navigator } = this.props;

        if (navigator) {
            SessionManager.getSessionAsync()
            .then((session) => {
                if (session !== null && session !== undefined && session.length > 0) {
                    navigator.replace({
                        name: 'MainScene',
                        component: MainScene,
                    })
                } else {
                    navigator.replace({
                        name: 'LoginScene',
                        component: LoginScene,
                    })
                }
            })
            .catch((err) => {
                navigator.replace({
                    name: 'LoginScene',
                    component: LoginScene,
                })
            });

            //FIXME: isLoggedIn 有问题！
            // if (SessionManager.isLoggedIn()) {
            //     navigator.replace({
            //         name: 'MainScene',
            //         component: MainScene,
            //     })
            // } else {
            //     navigator.replace({
            //         name: 'LoginScene',
            //         component: LoginScene,
            //     })
            // }
            
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