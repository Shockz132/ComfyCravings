import { View, Text, Image, ImageBackground } from 'react-native'
import { themeColor } from 'react-native-rapi-ui';
import FeatherIcons from 'react-native-vector-icons/Feather'
import React from 'react'
import { Tabs } from 'expo-router'
import { ThemeProvider } from 'react-native-rapi-ui'

const TabIcon = ({ focused, icon } : any) => {

    if (focused) {
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
    const HomeIcon = <FeatherIcons name="home" size={30} color={themeColor.black400} />;
    const AlertTriangleIcon = <FeatherIcons name="alert-triangle" size={30} color={themeColor.black400} />;

    return (
        <ThemeProvider theme='dark'>
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
                                focused={focused}
                                icon={<FeatherIcons name="home" size={30} color={iconColor} />}
                            />
                        }
                    }}
                />
                <Tabs.Screen 
                    name='test'
                    options={{
                        title: 'test route',
                        headerShown: false,
                        tabBarIcon: ({ focused }) => {
                            const iconColor = focused ? themeColor.primary400 : themeColor.black400;
                            return <TabIcon 
                                    focused={focused}
                                    icon={<FeatherIcons name="alert-triangle" size={30} color={iconColor} />}
                            />
                        }
                    }}
                />
            </Tabs>
        </ThemeProvider>
  )
}

export default _layout