import { Text, View } from "react-native";
import { Link } from 'expo-router'
import './globals.css'

export default function Index() {

  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-5xl text-primary">kill me now!</Text>
      <Link href='/test' className="underline text-blue-500">commit suicide!</Link>
      <Link href='/testParams/yourmom' className="underline text-blue-500">your mom!</Link>
    </View>
  );
}
