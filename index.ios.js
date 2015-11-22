/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React, {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import StartGame from './app/components/start-game';

const AwesomeProject = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Hello Player!
        </Text>
        <StartGame />
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 50
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginVertical: 50
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
