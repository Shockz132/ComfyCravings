import { ThemeProvider } from "react-native-rapi-ui"
import { Stack } from "expo-router"


export default function RootLayout() {
  return (
    <ThemeProvider theme="light">
      <Stack >
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="testParams/[id]"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </ThemeProvider>
  ) 
}
