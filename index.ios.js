/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Tabs from './tabs.js';

class Project extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Tabs></Tabs>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  }
});

AppRegistry.registerComponent('Project', () => Project);
