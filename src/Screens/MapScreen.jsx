import React from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Header } from "../Components/Header";

export const MapScreen = ({ route }) => {
  const { latitude, longitude } = route.params.item;
  return (
    <View>
      <Header title="Maps" />
      <View style={styles.container}>
        <MapView style={styles.map} initialRegion= { { latitude: latitude, longitude: longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421, } }>
            <Marker coordinate={{ latitude: latitude, longitude: longitude }} title="travel photo" />
        </MapView>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
