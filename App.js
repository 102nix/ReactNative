import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { Header } from './components/Header'
import { Todo } from './components/Todo'
import Navigator from './navigate'

export default function App () {
  return (
    <SafeAreaView style={styles.main}>
      {/* <Header /> */}
      <Navigator />
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  }
})

