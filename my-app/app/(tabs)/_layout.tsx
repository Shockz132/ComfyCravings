import { View, Text, Image, ImageBackground } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import FeatherIcons from 'react-native-vector-icons/Feather'
import React from 'react'
import { Tabs } from 'expo-router'

const TabIcon = ({ focused, icon } : any) => {
    if (focused) {
        return (
            <>
                <ImageBackground className="min-w-min bg-blue-300 rounded-full">
                    <View className="min-w-12 min-h-12 items-center flex-1 justify-center">
                        { icon }
                    </View>
                </ImageBackground>
            </>
        )
    }

    return (
        <>
            <ImageBackground className="min-w-min">
                <View className="min-w-12 min-h-12 items-center flex-1 justify-center">
                    { icon }
                </View>
            </ImageBackground>
        </>
    )
}

const _layout = () => {
    const HomeIcon = <FeatherIcons name="home" size={30} color="#000000" />;
    const AlertTriangleIcon = <FeatherIcons name="alert-triangle" size={30} color="#000000" />;

    return (
        <SafeAreaProvider>
            <Tabs
                screenOptions={{
                    tabBarShowLabel: true,
                    tabBarItemStyle: {
                        width: '100%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    },
                    tabBarStyle: {
                        backgroundColor:'#0f0D23',
                        borderRadius: 50,
                        marginHorizontal: 20,
                        marginBottom: 36,
                        height: 52,
                        position: 'absolute',
                        overflow: 'hidden',
                        borderWidth: 1,
                        borderColor: '#0f0D23'
                    }
                }}  
            >
                <Tabs.Screen 
                    name='index'
                    options={{
                        title: 'Home',
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <TabIcon 
                                focused={focused}
                                icon={HomeIcon}    
                            />
                        )
                    }}
                />
                <Tabs.Screen 
                    name='test'
                    options={{
                        title: 'test route',
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <TabIcon 
                                focused={focused}
                                icon={AlertTriangleIcon}    
                            />
                        )
                    }}
                />
                <Tabs.Screen
                    name='login'
                    options={{
                        title: 'Login',
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <TabIcon
                                focused={focused}
                                icon={AlertTriangleIcon}
                            />
                        )
                    }}
                />
                <Tabs.Screen
                    name='signup'
                    options={{
                        title: 'Sign Up',
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <TabIcon
                                focused={focused}
                                icon={AlertTriangleIcon}
                            />
                        )
                    }}
                />
            </Tabs>
        </SafeAreaProvider>
  )
}

export default _layout