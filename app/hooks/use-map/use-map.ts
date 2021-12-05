import { useState, useRef, useCallback } from "react"
import MapView from "react-native-maps"

const DEVIATION = 0.0002

export function useMap() {
  const mapRef = useRef<MapView>(null)

  const [selectedMarker, setSelectedMarker] = useState(null)

  const handleNavigateToPoint = useCallback(
    (id, lat, long) => {
      console.log({ id, lat, long })
      console.log(mapRef)
      if (mapRef) {
        console.log("MUEVETE!")
        mapRef.current.animateCamera(
          {
            center: {
              latitude: lat - DEVIATION,
              longitude: long,
            },
            zoom: 18.5,
          },
          { duration: 500 },
        )
      }
      setSelectedMarker(id)
    },
    [mapRef],
  )

  const handelResetInitialPosition = useCallback(() => {
    if (mapRef) {
      mapRef.current.animateToRegion(
        {
          latitude: 41.3995345,
          longitude: 2.1909796,
          latitudeDelta: 0.003,
          longitudeDelta: 0.003,
        },
        500,
      )
      setSelectedMarker(null)
    }
  }, [mapRef])

  return {
    mapRef,
    selectedMarker,
    handleNavigateToPoint,
    handelResetInitialPosition,
  }
}
