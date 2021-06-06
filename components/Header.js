import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>Список дел</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  headerTitle: {
    color: 'white',
    fontSize: 17
  }
})