import React from 'react';
import {
  View,
} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import styles from './styles';

const Map = ({
  latitude,
  longitude,
  title
}) => {
  return (
    <View style={styles.mapViewContainer}>
      <MapView
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={styles.mapView}
        //scrollEnabled={false}
      >
      <MapView.Marker
        coordinate={{
          latitude: latitude,
          longitude: longitude,
        }}
        title={title}
      />
      </MapView>
    </View>
  )
};

Map.defaultProps = {
  latitude: 37.78825,
  longitude: -122.4324,
  title: 'Untitled',
}

export default Map;
