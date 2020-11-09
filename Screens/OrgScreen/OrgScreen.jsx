import React from 'react';
import ScreenWrapper from '../Components/ScreenWrapper';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

const { width, height } = Dimensions.get("window");

const OrgScreen = () => {
  return (
    <ScreenWrapper>
      <View style={orgScreenStyles.screenContainer}>

        <View style={orgScreenStyles.content}>
          <Image
            style={orgScreenStyles.orgImage}
            source={{
              uri: 'https://images.adsttc.com/media/images/5e4c/1025/6ee6/7e0b/9d00/0877/large_jpg/feature_-_Main_hall_1.jpg?1582043123'
            }}
          />
          <View style={orgScreenStyles.orgTitleContainer}>
            <Text style={orgScreenStyles.orgTitle}>The Croissant Cafe</Text>
          </View>

          <View style={orgScreenStyles.orgDescriptionContainer}>
            <Text style={orgScreenStyles.orgDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
            </Text>
          </View>

          <View style={orgScreenStyles.separator} />

          <View style={orgScreenStyles.phoneContainer}>
            <Icon name="phone" style={orgScreenStyles.phoneIcon} />
            <Text style={orgScreenStyles.phoneText}>
              +7-(916)-109-92-37
            </Text>
          </View>

        </View>

      </View>
    </ScreenWrapper>
  )
};

const orgScreenStyles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    paddingTop:20,
    paddingLeft:30,
    paddingRight:30,
    paddingBottom:20,
    backgroundColor: 'white',
  },
  content: {
    flex:1,
  },
  orgImage: {
    height: height * 0.24,
    borderRadius: 15,
  },
  orgTitleContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  orgTitle: {
    fontWeight: '600',
    color: '#333',
    fontSize: 26,
  },
  orgDescriptionContainer: {
    marginTop: 10,
  },
  orgDescription: {
    fontSize: 14,
  },
  separator: {
    height: 1,
    marginTop: 10,
    backgroundColor: '#ddd',
  },
  phoneContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  phoneIcon: {
    fontSize:24,
  },
  phoneText: {
    marginLeft: 20,
    fontSize: 18,
  },
});

export default OrgScreen;
