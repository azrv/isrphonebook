import { StatusBar } from 'expo-status-bar'
import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native'

import Header from './components/Header'
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
      <SafeAreaView>
        <View style={styles.wrapper}>
          <Header></Header>
          <Slider></Slider>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
  },

});

export default App;
