import React from 'react';
import ScreenWrapper from '../Components/ScreenWrapper';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

const { width, height } = Dimensions.get("window");

const OrgScreen = () => {
  return (
    <ScreenWrapper>
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

        <View style={orgScreenStyles.requisitesContainer}>
          <View style={orgScreenStyles.requisiteContainer}>
            <Text style={orgScreenStyles.requisiteTitle}>
              Phone Number
            </Text>
            <View style={orgScreenStyles.requisiteContentContainer}>
              <Text style={orgScreenStyles.requisiteContent}>
                +972-3-522-67-36
              </Text>
            </View>
          </View>

          <View style={orgScreenStyles.separator} />

          <View style={orgScreenStyles.requisiteContainer}>
            <Text style={orgScreenStyles.requisiteTitle}>
              Site
            </Text>
            <View style={orgScreenStyles.requisiteContentContainer}>
              <Text style={orgScreenStyles.requisiteContent}>
                lacroissanteri.shop
              </Text>
            </View>
          </View>

          <View style={orgScreenStyles.separator} />

          <View style={orgScreenStyles.requisiteContainer}>
            <Text style={orgScreenStyles.requisiteTitle}>
              Address
            </Text>
            <View style={orgScreenStyles.requisiteContentContainer}>
              <Text style={orgScreenStyles.requisiteContent}>
                Tel-Aviv, Georgiuos st., 96
              </Text>
            </View>
          </View>

          <View style={orgScreenStyles.separator} />

          <View style={orgScreenStyles.requisiteContainer}>
            <Text style={orgScreenStyles.requisiteTitle}>
              Hours
            </Text>
            <View style={orgScreenStyles.requisiteContentContainer}>
              <Text style={orgScreenStyles.requisiteContent}>
                10AM-10PM
              </Text>
            </View>
          </View>
        </View>

        <View style={orgScreenStyles.buttonsContainer}>
          <TouchableOpacity
            style={orgScreenStyles.button}
          >
            <Text style={orgScreenStyles.buttonText}>Suggest an edit</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={orgScreenStyles.button}
          >
            <Text style={orgScreenStyles.buttonText}>Build a route</Text>
          </TouchableOpacity>
        </View>

      </View>
    </ScreenWrapper>
  )
};

const orgScreenStyles = StyleSheet.create({
  orgScreenContainer: {
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
    height: 200,
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
    marginBottom: 20,
  },
  orgDescription: {
    fontSize: 14,
  },
  requisitesContainer: {
    marginBottom: 20,
  },
  separator: {
    height: 1,
    marginTop: 15,
    marginBottom:15,
    backgroundColor: '#ddd',
  },
  requisiteContainer: {
    flexDirection: 'row',
  },
  requisiteTitle: {
    fontSize:16,
    fontWeight: '500',
    width: 120,
    marginRight:20,
  },
  requisiteContentContainer: {
    flex:1,
    alignItems: 'flex-end',
  },
  requisiteContent: {
    color: '#777'
  },
  buttonsContainer: {
    paddingLeft:15,
    paddingRight: 15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    marginBottom: 15,
    width: width*0.35,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    // borderWidth: 2,
    // borderColor: '#0F4C81',
    backgroundColor: '#ddd',

  },
  buttonText: {
    color: '#444',
    fontSize: 14,
    fontWeight: '400',
  },
});

export default OrgScreen;
