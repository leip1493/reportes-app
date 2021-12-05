import * as React from "react"
import { StyleProp, StyleSheet, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { color, typography } from "../../theme"
import { Text } from "../text/text"
import { flatten } from "ramda"
import { Avatar } from "./avatar"
import { RefreshButton } from "./refresh-button"

export interface TopBarProps {
  onPressElement: any
}

/**
 * Describe your component here
 */
export const TopBar = observer(function TopBar(props: TopBarProps) {
  const { onPressElement } = props

  return (
    <View style={styles.container}>
      <Avatar />
      <RefreshButton onPressElement={onPressElement} />
    </View>
  )
})
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    left: 0,
    paddingHorizontal: 10,
    position: "absolute",
    top: 40,
    width: "100%",
    zIndex: 1,
  },
})
