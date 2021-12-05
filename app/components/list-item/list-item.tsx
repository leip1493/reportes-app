/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/sort-styles */
import * as React from "react"
import { Image, Pressable, StyleProp, StyleSheet, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { Text } from "../text/text"
import { TouchableOpacity } from "react-native-gesture-handler"

export interface ListItemProps {
  item: any
  onPressElement: (id: string, latitude: number, longitude: number) => void
}

/**
 * Describe your component here
 */
export const ListItem = observer(function ListItem(props: ListItemProps) {
  const { item, onPressElement } = props

  return (
    <TouchableOpacity
      onPress={() => onPressElement(item.id, item.latitude, item.longitude)}
      style={[styles.item, {}]}
    >
      <View style={[styles.logo, { backgroundColor: item.color }]}>
        <Image source={item.img} style={styles.logoImage} resizeMode="contain" />
      </View>
      <View>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.direction}>{item.direction}</Text>
      </View>
    </TouchableOpacity>
  )
})

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    padding: 20,
    alignItems: "center",
  },
  logo: {
    height: 32,
    width: 32,
    borderRadius: 50,
    marginRight: 19,
    alignItems: "center",
    justifyContent: "center",
  },
  logoImage: {
    height: "65%",
    width: "65%",
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    color: "#2F3136",
  },
  direction: {
    fontSize: 14,
    fontWeight: "400",
    color: "#989CA5",
  },
})
