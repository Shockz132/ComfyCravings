import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const yourmom = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>{ id }</Text>
    </View>
  )
}

export default yourmom

const styles = StyleSheet.create({})