import { Layout, Section, Text, TopNav, Avatar } from "react-native-rapi-ui";
import FeatherIcons from 'react-native-vector-icons/Feather'
import { themeColor } from "react-native-rapi-ui";
import '../globals.css'

export default function Index() {

  return (
    <Layout>
      <Text className="border-b-2 border-gray-200">
        <Section className="p-2 mt-2">
          <Avatar 
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1144/1144760.png' }}
            size="md"
            shape="round"
          />
        </Section>
        
      </Text>
      <Section className="p-5 flex-1 justify-start">
        <Section className="p-5 items-center">
          <Text size='h1' className="mb-3">Welcome back!</Text>
          <Text size='h2'>Current Nutritional Plan:</Text>
          <Text>Insert the LLM proposed diet plan</Text>
        </Section>
      </Section>
      
    </Layout>
  );
}
