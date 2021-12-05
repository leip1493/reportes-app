/* eslint-disable react-native/no-color-literals */
import React from "react"
import { StyleSheet, View, Image } from "react-native"

const UserImage = require("../../assets/user.png")

export function Avatar() {
  return (
    <View style={styles.container}>
      <Image source={UserImage} style={styles.image} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderColor: "white",
    borderRadius: 50,
    borderWidth: 4,
    height: 36,
    justifyContent: "center",
    width: 36,
  },
  image: {
    height: "100%",
    width: "100%",
  },
})
