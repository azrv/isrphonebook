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
      <View style={orgScreenStyles.orgContainer}>
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
              281365, Israel, Tel-Aviv, Georgiuos st., 96
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
              Sunday: 10am-10pm{"\n"}
              Monday: 10am-10pm{"\n"}
              Tuesday: 10am-10pm{"\n"}
              Wednesday: 10am-10pm{"\n"}
              Thursday: 10am-10pm{"\n"}
              Friday: 10am-10pm{"\n"}
              Saturday: 10am-10pm{"\n"}
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
    </ScreenWrapper>
  )
};

const orgScreenStyles = StyleSheet.create({
  orgContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity:  0.12,
    shadowRadius: 20,
    elevation: 5,
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
  },
  orgDescription: {
    fontSize: 14,
  },
  requisitesContainer: {
    marginBottom: 20,
    marginTop: 20,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity:  0.12,
    shadowRadius: 20,
    elevation: 5,
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
    color: '#777',
    textAlign: 'right',
  },
  buttonsContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    marginBottom: 15,
    width: width*0.44,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    // borderWidth: 2,
    // borderColor: '#0F4C81',
    backgroundColor: '#0F4C81',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity:  0.5,
    shadowRadius: 10,
    height:70,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default OrgScreen;
