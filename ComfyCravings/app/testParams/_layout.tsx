import { View, Text } from 'react-native'
import { Tabs } from 'expo-router';
import React from 'react'

const _layout = () => {
  return (
    <Tabs>
        <Tabs.Screen
            name='[id]'
            options={{
                headerShown: false,
            }}
        />
    </Tabs>
  )
}

export default _layout