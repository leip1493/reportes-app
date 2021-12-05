/* eslint-disable react-native/no-color-literals */
import React from "react"
import { observer } from "mobx-react-lite"
import { Dimensions, StyleSheet, View, ViewStyle } from "react-native"
import { Screen, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps"
import { mapStyle } from "./mapStyle"
import { MARKERS_DATA } from "./mapMarkers"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
}

export const MapScreen = observer(function MapScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={ROOT} preset="scroll">
      <Text preset="header" text="" />
      <View style={styles.container}>
        <MapView
          customMapStyle={mapStyle}
          provider={PROVIDER_GOOGLE}
          style={styles.mapStyle}
          initialRegion={{
            latitude: 41.3995345,
            longitude: 2.1909796,
            latitudeDelta: 0.003,
            longitudeDelta: 0.003,
          }}
          mapType="standard"
        >
          {MARKERS_DATA.map((marker) => (
            <Marker
              key={marker.id}
              coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
            />
          ))}
        </MapView>
      </View>
    </Screen>
  )
})

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "black",
    flex: 1,
    justifyContent: "center",
  },
  mapStyle: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
  },
})
