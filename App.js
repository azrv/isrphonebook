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
              image: 'https://im.kommersant.ru/Issues.photo/CORP/2019/12/12/KMO_163712_00083_1_t241_060345.jpg',
              title: 'Israel Government'
            },
            {
              image: 'https://www.shebaonline.ru/wp-content/uploads/2017/02/heart-center.jpg',
              title: 'Hospital'
            },
            {
              image: 'https://images.adsttc.com/media/images/51d4/84a8/b3fc/4bea/e100/01d6/large_jpg/Portada.jpg?1372882078',
              title: 'Office Building'
            },
            {
              image: 'https://images.adsttc.com/media/images/5e4c/1025/6ee6/7e0b/9d00/0877/large_jpg/feature_-_Main_hall_1.jpg?1582043123',
              title: 'Cafeteria'
            },
          ]} />
          <StatusBar />
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 0,
  },

});

export default App;
