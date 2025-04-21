import { StyleSheet } from 'react-native'
import { Layout, Section, Text } from 'react-native-rapi-ui'
import React from 'react'

const AIChat = () => {
  const [chatMessages, setChatMessages] : any = React.useState([]);
  const handleSendMessage = ({message} : any) => {
    setChatMessages([...chatMessages, message]);
  }
  

  return (
    <Layout className="flex-1 justify-center items-center">
      <Section>
        {
          chatMessages.map((msg : string, index : number) => <Text key={index}>{msg}</Text>)
        }
        <Text size="h3">chat</Text>
      </Section>
    </Layout>
  )
}

export default AIChat

const styles = StyleSheet.create({})