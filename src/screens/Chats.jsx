import React, {useEffect, useCallback, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  StyleSheet,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {GiftedChat, Bubble, InputToolbar, Send} from 'react-native-gifted-chat';

const Chats = ({navigation}) => {
  const route = useRoute();
  const {image, title} = route.params;
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer hfeiuhfsjlfdhgjfsdjkfjsdkfhdsklfnjdsjfjdshfjkdshfkldsbfdsj',
        createdAt: new Date(),
        user: {
          _id: 2,
        },
      },
    ]);
  }, []);

  const onSend = useCallback((newMessages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, newMessages),
    );
  }, []);

  const renderCustomSend = props => {
    return (
      <Send {...props}>
        <View style={{height: '100%',width:50,backgroundColor: '#F6CD5B', alignItems:'center', justifyContent: 'center' ,borderRadius: 50,}}>
        <Image
          source={require('../Assets/send.png')}
          style={{borderRadius: 50,height: '60%', width: '60%'}}
        />
        </View>
      </Send>
    );
  };
  const renderBubble = (props, user) => {
    const { currentMessage } = props;
    const isCurrentUser = currentMessage.user._id === user._id;
  
    return (
      <View style={{ flexDirection: 'row' }}>
        {!isCurrentUser && currentMessage.user.avatar && ( // Check if the user avatar exists
          <View style={{ marginRight: 8 }}>
            <Image
              source={{ uri: currentMessage.user.avatar }}
              style={styles.avatar}
            />
          </View>
        )}
  
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            backgroundColor: isCurrentUser ? '#FFE7A3' : '#FFFFFF',
            borderRadius: 15,
            marginLeft: 0,
            marginRight: 0,
            padding: 10,
          }}
        >
          {currentMessage.image && (
            <Image
              source={{ uri: currentMessage.image }}
              style={styles.imageInBubble}
            />
          )}
          {currentMessage.text && (
            <Text
              style={{
                color: '#111820',
                flexWrap: 'wrap',
              }}
            >
              {currentMessage.text}
            </Text>
          )}
        </View>
  
        {isCurrentUser && (
          <View style={{ marginLeft: 8 }}>
            <Image source={user.avatar} style={styles.avatar} />
          </View>
        )}
      </View>
    );
  };
  
  const user = {
    _id: 1,
    avatar: require('../Assets/homeparty.png'),
  };
  return (
    <>
      <StatusBar backgroundColor="#F6CD5B" barStyle="dark-content" />
      <View style={{flex: 1}}>
        <View style={styles.header}>
          <TouchableOpacity
            style={{marginLeft: '8%'}}
            onPress={() => {
              navigation.navigate('Home');
            }}>
            <Image source={require('../Assets/back.png')} />
          </TouchableOpacity>
          <Image source={image} style={{marginLeft: '5%'}} />
          <View style={styles.headertitle}>
            <Text style={styles.boldtext}>{title}</Text>
            <Text style={styles.text}>136 members</Text>
          </View>
        </View>
        <GiftedChat
          messages={messages}
          onSend={onSend}
          user={{
            _id: 1, // Replace 1 with the current user's _id
            name: 'Your Name', // Replace with the current user's name
            avatar: require('../Assets/homeparty.png'), // Replace with the actual avatar image source
          }}
          renderBubble={props => renderBubble(props, user)}
          renderInputToolbar={props => (
            <InputToolbar
              {...props}
              containerStyle={{backgroundColor: '#363333',}}
            />
          )}
          renderSend={renderCustomSend}
          alwaysShowSend
        />
      </View>
    </>
  );
};

export default Chats;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#F6CD5B',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#F6CD5B',
    alignItems: 'center',
  },
  headertitle: {flexDirection: 'column', marginLeft: 5},
  boldtext: {
    color: '#111820',
    fontFamily: 'Oxygen',
    fontWeight: 'bold',
    fontSize: 16,
  },
  text: {
    fontSize: 12,
    fontFamily: 'Roboto',
    color: '#111820',
    marginTop: 2,
  },
  imageInBubble: {
    backgroundColor: '#FFE7A3',
    width: 200,
    height: 100,
    borderRadius: 10,
    
  },
  avatar: {
   
    top: 0,
    right: 0,
    borderRadius: 20,
  },
});
