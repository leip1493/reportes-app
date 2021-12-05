/* eslint-disable react-native/no-color-literals */
import * as React from "react"
import { ColorValue, StyleProp, StyleSheet, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { color, typography } from "../../theme"
import Animated from "react-native-reanimated"
import { Marker } from "react-native-maps"
import { useMarkerAnimation } from "../../hooks/use-marker-animation/use-marker-animation"

export interface CustomMarkerProps {
  id: any
  selectedMarker: any
  color: ColorValue
  latitude: number
  longitude: number
  style?: StyleProp<ViewStyle>
}

/**
 * Describe your component here
 */
export const CustomMarker = observer(function CustomMarker(props: CustomMarkerProps) {
  const { id, selectedMarker, latitude, longitude, color } = props
  // const styles = flatten([CONTAINER, style])

  const scale = useMarkerAnimation({ id, selectedMarker })

  return (
    <Marker
      coordinate={{
        latitude: latitude,
        longitude: longitude,
      }}
    >
      <View style={styles.markerWrapper}>
        <Animated.View
          style={[
            styles.marker,
            {
              backgroundColor: color,
              transform: [{ scale: scale }],
            },
          ]}
        ></Animated.View>
      </View>
    </Marker>
  )
})

const styles = StyleSheet.create({
  marker: {
    borderColor: "white",
    borderRadius: 20,
    borderWidth: 2,
    height: 22,
    width: 22,
  },
  markerWrapper: {
    alignItems: "center",
    height: 50,
    justifyContent: "center",
    width: 50,
  },
})
