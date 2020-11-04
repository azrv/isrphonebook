import { StatusBar } from 'expo-status-bar'
import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import { SearchBar } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default Search = () => {
  return (
    <View style={headerStyles.headerContainer}>
      <View style={headerStyles.searchContainer}>
        <Icon name="search" style={headerStyles.searchIcon} />
        <TextInput
          style={headerStyles.searchText}
          placeholder="Start your search"
          placeholderTextColor="#6c6c6c"
        />
      </View>
    </View>
  )
};

const headerStyles = StyleSheet.create({
  headerContainer: {
    marginTop: 25,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: '#f3f3f3',
    borderRadius: 40,
    height: 50,
  },
  searchContainer: {
    paddingLeft: 30,
    paddingRight: 30,
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchText: {
    justifyContent: 'center',
    //backgroundColor: 'cyan',
    flex: 1,
    fontSize: 16,
    color: '#6c6c6c',
    //marginRight:15,
    height: 60,
  },
  searchIcon: {
    justifyContent: 'center',
    //backgroundColor: 'red',
    fontSize: 18,
    color: '#6c6c6c',
    marginRight:5,
  }
});
