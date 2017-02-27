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
  TextInput,
  View
} from 'react-native';

export default class ChineseTextInputIssue extends Component {
  constructor (props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  render () {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputField}
          placeholder="Type here to translate!"
          onBlur={(evt) => console.log('onBlur event:', evt.nativeEvent.text)}
          onChange={(evt) => console.log('onChange event:', evt.nativeEvent.text)}
          onChangeText={(text) => this.setState({ text })}
          onSubmitEditing={(evt) => console.log('onSubmitEditing event:', evt.nativeEvent.text)}
          onEndEditing={(evt) => console.log('onEndEditing event:', evt.nativeEvent.text)} />
        <Text style={styles.previewText}>
          {this.state.text}
        </Text>
        <TextInput style={styles.inputField} placeholder="Another to focus, meaningless" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  inputField: {
    margin: 30,
    height: 50
  },
  previewText: {
    padding: 10,
    fontSize: 42
  }
});

AppRegistry.registerComponent('ChineseTextInputIssue', () => ChineseTextInputIssue);
