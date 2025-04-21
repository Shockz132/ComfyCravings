import { View, Text, Image, ImageBackground } from 'react-native'
import { themeColor } from 'react-native-rapi-ui';
import FeatherIcons from 'react-native-vector-icons/Feather'
import React from 'react'
import { Tabs } from 'expo-router'
import { ThemeProvider } from 'react-native-rapi-ui'

const TabIcon = ({ icon } : any) => {
    return (
        <>
            <ImageBackground>
                <View>
                    { icon }
                </View>
            </ImageBackground>
        </>
    )
}

const _layout = () => {

    return (
        <ThemeProvider theme='light'>
            <Tabs
                screenOptions={{
                    tabBarShowLabel: true,
                    tabBarItemStyle: {
                        width: '100%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }
                }}  
            >
                <Tabs.Screen 
                    name='index'
                    options={{
                        title: 'Home',
                        headerShown: false,
                        tabBarIcon: ({ focused }) => {
                            const iconColor = focused ? themeColor.primary400 : themeColor.black400;
                            return <TabIcon 
                                icon={<FeatherIcons name="home" size={30} color={iconColor} />}
                            />
                        }
                    }}
                />
                <Tabs.Screen 
                    name='chat'
                    options={{
                        title: 'Chat',
                        headerShown: false,
                        tabBarIcon: ({ focused }) => {
                            const iconColor = focused ? themeColor.primary400 : themeColor.black400;
                            return <TabIcon 
                                    icon={<FeatherIcons name="message-circle" size={30} color={iconColor} />}
                            />
                        }
                    }}
                />
            </Tabs>
        </ThemeProvider>
  )
}

export default _layout