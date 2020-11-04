import { StatusBar } from 'expo-status-bar'
import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image } from 'react-native'

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
          <Header />
          <Slider items={[
            {
              image: 'https://cdn.discordapp.com/attachments/755795252224196770/772873076257456128/download.jpeg',
              title: 'Title1'
            },
            {
              image: 'https://im.kommersant.ru/Issues.photo/CORP/2019/12/12/KMO_163712_00083_1_t241_060345.jpg',
              title: 'Title2'
            }
          ]} />
          <StatusBar />
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 30,
  },

});

export default App;
