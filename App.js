import { StatusBar } from 'expo-status-bar'
import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import Search from './components/Search'
import Slider from './components/Slider'


class App extends Component {
  state = {
    i: 0
  }

  onPress = () => {
    this.setState({ i: this.state.i + 1 })
  }

  render() {
    return (
      <Search></Search>
    )
  }
}

const styles = StyleSheet.create({
  helloText: {
    marginTop: 15,
  }

});

export default App;
