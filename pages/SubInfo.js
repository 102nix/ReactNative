import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export const SubInfo = ({ route }) => {

  const { containerSubInfo, textSubInfo } = styles
  return (
    <View style={containerSubInfo}>
      <Image
        style={{
          resizeMode: "contain",
          height: 200,
          width: 260
        }}
        source={route.params.src} 
      />
      <Text style={textSubInfo}>Продукт: {route.params.name}</Text>
      <Text style={textSubInfo}>{route.params.comments}</Text>
      <Text style={textSubInfo}>{route.params.product}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  containerSubInfo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textSubInfo: {
    fontSize: 21,
    fontFamily: 'Italic',
    padding: 10
  }
})