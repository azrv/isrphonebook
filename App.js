import { StatusBar } from 'expo-status-bar'
import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

class App extends Component {
  state = {
    i: 0
  }

  onPress = () => {
    this.setState({ i: this.state.i + 1 })
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <Text>Search</Text>
        </View>

        <View style={styles.container}>
          <TouchableOpacity
           style={styles.button}
           onPress={this.onPress}
          >
            <Text>Tap</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          <Text>You've tapped {this.state.i} times.</Text>
        </View>

        <StatusBar style="auto" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
  },
  container: {
    marginTop: 45,
    padding: 15,
    alignItems: "center",
    height: 65,
    backgroundColor: '#6c6c6c',
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#DDDDDD',
    padding: 5,
    width: 70,
    height: 40,
    textWeight: 'bold',
  },
});

export default App;
