/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Keyboard
} from 'react-native'

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
          value={this.state.text}
          placeholder="Type here to translate!"
          onChange={(evt) => this.setState({ text: evt.nativeEvent.text })}
          onChangeText={(text) => setTimeout(() => {this.setState({ text: text })})}
          onEndEditing={(evt) => this.setState({ text: evt.nativeEvent.text })} />
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
