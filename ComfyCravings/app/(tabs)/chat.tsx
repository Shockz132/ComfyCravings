import { useEffect, useState, useCallback } from 'react'
import { StyleSheet } from 'react-native'
import { Layout, Section, Text, TextInput, Button } from 'react-native-rapi-ui'
import { GiftedChat } from 'react-native-gifted-chat'
import React from 'react'

interface Message {
  user: string;
  content: string;
  _id?: string; // Optional ID for GiftedChat compatibility
  createdAt?: Date; // Optional timestamp
}

const AIChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    setMessages([
      { user: 'Joy', content: 'Hello there!' },
      { user: 'Joy', content: 'How can I help you today?' },
    ]);
  }, []);

  const testAIReply = () => {
    setTimeout(() => {
      setMessages((prevMessages) => [...prevMessages, { user: 'Joy', content: "I'm sorry to hear that you're experiencing these challenges. Since you've improved fatigue through increased water intake and reduced caffeine, you're on the right track. Depression and persistent sadness can sometimes be linked to nutritional factors. Have you noticed any changes since making those adjustments to your water and caffeine intake? Perhaps incorporating foods rich in omega-3 fatty acids and complex carbohydrates could offer some relief. How have you been feeling in general, and are there any specific dietary changes you've considered to help with these symptoms?" }]);
    }, 3000);
  }

  const handleSend = useCallback(() => {
    if (inputText.trim() !== '') {
      const newMessage: Message = {
        user: 'You',
        content: inputText.trim(),
      };
      setMessages((previousMessages) => [...previousMessages, newMessage]);
      testAIReply()
      setInputText('');
    }
  }, [inputText, setMessages]);

  const formatMessagesForGiftedChat = useCallback(() => {
    return messages
      .slice()
      .reverse() // GiftedChat expects messages in reverse chronological order
      .map((msg, index) => ({
        _id: index, // Simple unique ID for GiftedChat
        text: msg.content,
        createdAt: new Date(), // You might want to handle timestamps properly
        user: {
          _id: msg.user === 'You' ? 1 : 2, // Assign different IDs for user and AI
          name: msg.user,
        },
      }));
  }, [messages]);

  return (
    <Layout className="flex-1">
      <Section className="flex-1">
        <Text size="h3" fontWeight="bold" className="mb-4 mt-2 text-center">Chat with Joy AI!</Text>
        <GiftedChat
          messages={formatMessagesForGiftedChat()}
          onSend={(newMessages) => {
            if (newMessages && newMessages.length > 0) {
              handleSend(); // Our handleSend function already updates the messages state
            }
          }}
          user={{
            _id: 1, // Your user ID
          }}
          renderInputToolbar={(props) => (
            <Section className="flex-row items-center p-2 mt-2 border-t border-gray-200 min-w-max">
              <Text>
                <TextInput
                  className="rounded-md min-w-[80vw]"
                  placeholder="Type your message..."
                  value={inputText}
                  onChangeText={setInputText}
                  multiline
                />
                <Button 
                  text="Send"
                  size="md"
                  status="primary"
                  onPress={handleSend}
                  className="rounded-md ml-2"/>
              </Text>
              
            </Section>
          )}
          renderSend={() => null} // We are using our custom input toolbar with a send button
        />
      </Section>
    </Layout>
  );
};

export default AIChat

const styles = StyleSheet.create({})