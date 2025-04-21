import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import React from 'react'

const test = () => {
  return (
    <SafeAreaView>
      <Text>test</Text>
    </SafeAreaView>
  )
}

export default test

const styles = StyleSheet.create({})