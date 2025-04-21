import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Link } from 'expo-router'
import '../globals.css'

export default function Index() {

  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <Text>
        <Text className="text-5xl text-primary">test header</Text>
        <Text className="text-5xl text-red-500">!</Text>
      </Text>
      <Link href='/testParams/yourmom' className="underline text-blue-500">test link!</Link>
    </SafeAreaView>
  );
}
