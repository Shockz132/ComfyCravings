import { Text, View } from "react-native";
import { Link } from 'expo-router'
import '../globals.css'

export default function Index() {

  return (
    <View className="flex-1 justify-center items-center">
      <Text>
        <Text className="text-5xl text-primary">kill me now</Text>
        <Text className="text-5xl text-red-500">!</Text>
      </Text>
      <Link href='/testParams/yourmom' className="underline text-blue-500">your mom!</Link>
    </View>
  );
}
