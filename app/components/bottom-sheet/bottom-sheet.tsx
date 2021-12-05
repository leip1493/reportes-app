/* eslint-disable react-native/no-color-literals */
import * as React from "react"
import { Dimensions, StyleProp, StyleSheet, TextStyle, View, ViewStyle } from "react-native"
import ScrollBottomSheet from "react-native-scroll-bottom-sheet"
import { observer } from "mobx-react-lite"
import { color, typography } from "../../theme"
import { Text } from "../text/text"
import { flatten } from "ramda"
import { MARKERS_DATA } from "../../screens/map/mapMarkers"
import { ListItem } from "../list-item/list-item"
const CONTAINER: ViewStyle = {
  justifyContent: "center",
}

const TEXT: TextStyle = {
  fontFamily: typography.primary,
  fontSize: 14,
  color: color.primary,
}

export interface BottomSheetProps {
  /**
   * An optional style override useful for padding & margin.
   */ onPressElement: any
}

const windowHeight = Dimensions.get("window").height

/**
 * Describe your component here
 */
export const BottomSheet = observer(function BottomSheet(props: BottomSheetProps) {
  const { onPressElement } = props
  // const styles = flatten([CONTAINER, style])

  return (
    <ScrollBottomSheet
      componentType="FlatList"
      snapPoints={[100, "50%", windowHeight - 200]}
      initialSnapIndex={1}
      renderHandle={() => (
        <View style={styles.header}>
          <View style={styles.panelHandle} />
        </View>
      )}
      data={MARKERS_DATA}
      keyExtractor={(i) => i.id}
      renderItem={({ item }) => <ListItem item={item} onPressElement={onPressElement} />}
      contentContainerStyle={styles.contentContainerStyle}
    />
  )
})

const styles = StyleSheet.create({
  contentContainerStyle: {
    backgroundColor: "white",
    flex: 1,
  },
  header: {
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 20,
  },
  panelHandle: {
    backgroundColor: "#E1E1E1",
    borderRadius: 17,
    height: 4,
    width: 41,
  },
})
