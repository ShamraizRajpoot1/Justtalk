import {useRoute} from '@react-navigation/native';
import React, {useState, useEffect, useRef} from 'react';
import SendIcon from '../../../Assets/icons/send.png';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  FlatList,
  Dimensions,
  Alert,
} from 'react-native';
import {Icon} from 'react-native-elements';

export default function Chats({navigation}) {
  const route = useRoute();
  const {image, title} = route.params;
  const [chatUser] = useState({
    name: 'Robert Henry',
    profile_image: 'https://randomuser.me/api/portraits/men/0.jpg',
    last_seen: 'online',
  });

  const [currentUser] = useState({
    name: 'John Doe',
  });

  const [messages, setMessages] = useState([
    {sender: 'John Doe', message: 'Hey there!', time: '6:01 PM'},
    {
      sender: 'Robert Henry',
      message: 'Hello, how are you doing?',
      time: '6:02 PM',
    },
    {
      sender: 'John Doe',
      message: 'I am good, how about you?',
      time: '6:02 PM',
    },
    {
      sender: 'John Doe',
      message: `😊😇`,
      time: '6:02 PM',
    },

    {
      sender: 'Robert Henry',
      message: `Can't wait to meet you.`,
      time: '6:03 PM',
    },
    {
      sender: 'John Doe',
      message: `That's great, when are you coming?`,
      time: '6:03 PM',
    },
    {
      sender: 'Robert Henry',
      message: `This weekend.`,
      time: '6:03 PM',
    },
    {
      sender: 'Ali',
      message: `This weekend.`,
      time: '6:03 PM',
    },
    {
      sender: 'Robert Henry',
      message: `Around 4 to 6 PM.`,
      time: '6:04 PM',
    },
    {
      sender: 'John Doe',
      message: `Great, don't forget to bring me some mangoes.`,
      time: '6:05 PM',
    },
    {
      sender: 'Robert Henry',
      message: `Sure!`,
      time: '6:05 PM',
    },
  ]);

  const [inputMessage, setInputMessage] = useState('');

  function getTime(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

  function sendMessage() {
    if (inputMessage === '') {
      return setInputMessage('');
    }
    let t = getTime(new Date());
    setMessages([
      ...messages,
      {
        sender: currentUser.name,
        message: inputMessage,
        time: t,
      },
    ]);
    setInputMessage('');
  }

  

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={{marginLeft: '8%'}}
            onPress={() => {
              navigation.navigate('Home');
            }}>
            <Image source={require('../../../Assets/icons/back.png')} />
          </TouchableOpacity>
          <Image source={image} style={{marginLeft: '5%'}} />
          <View style={styles.headertitle}>
            <Text style={styles.boldtext}>{title}</Text>
            <Text style={styles.text}>136 members</Text>
          </View>
        </View>
        <FlatList
          style={{backgroundColor: '#f2f2ff'}}
          inverted={true}
          data={JSON.parse(JSON.stringify(messages)).reverse()}
          renderItem={({item}) => (
            <TouchableWithoutFeedback>
              <View
                style={{
                  marginTop: 6,
                  flexDirection: 'row',
                  justifyContent:
                    item.sender === currentUser.name
                      ? 'flex-end'
                      : 'flex-start',
                }}>
                <View
                  style={[
                    styles.smscontainer,
                    {
                      backgroundColor:
                        item.sender === currentUser.name
                          ? '#FFE7A3'
                          : '#FFFFFF',
                      alignSelf:
                        item.sender === currentUser.name
                          ? 'flex-end'
                          : 'flex-start',
                    },
                  ]}>
                  {item.sender !== currentUser.name && (
                    <Image
                      style={styles.profileimg}
                      source={{uri: chatUser.profile_image}}
                    />
                  )}
                  <Text
                    style={[
                      styles.smstext,
                      {
                        color:
                          item.sender === currentUser.name
                            ? '#111820'
                            : '#000000',
                      },
                    ]}>
                    {item.message}
                  </Text>
                  {item.sender === currentUser.name && (
                    <Image
                      style={styles.profileimg}
                      source={{uri: chatUser.profile_image}}
                    />
                  )}
                </View>
              </View>
            </TouchableWithoutFeedback>
          )}
        />

        <View style={{paddingVertical: 10}}>
          <View style={styles.messageInputView}>
            <TextInput
              defaultValue={inputMessage}
              style={styles.messageInput}
              placeholder="Type your message here..."
              placeholderTextColor="rgba(255, 255, 255, 0.5)"
              onChangeText={text => setInputMessage(text)}
              onSubmitEditing={() => {
                sendMessage();
              }}
            />

            <TouchableOpacity onPress={sendMessage} style={styles.send}>
              <Image source={SendIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  headerLeft: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  userProfileImage: {height: '100%', aspectRatio: 1, borderRadius: 100},
  container: {
    flex: 1,
    backgroundColor: '#f2f2ff',
  },
  messageInputView: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 14,
    backgroundColor: '#363333',
    borderRadius: 25,
  },
  messageInput: {
    height: 40,
    flex: 1,
    paddingHorizontal: 20,
    color: '#FFFFFF',
  },
  messageSendView: {
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  send: {
    width: '10%',
    backgroundColor: '#F6CD5B',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  profileimg: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignSelf: 'flex-start',
  },
  header: {
    backgroundColor: '#F6CD5B',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#F6CD5B',
    alignItems: 'center',
  },
  smstext: {
    fontSize: 16,
    padding: 10,
    maxWidth: Dimensions.get('screen').width * 0.6,
  },
  smscontainer: {
    maxWidth: Dimensions.get('screen').width * 0.8,
    marginHorizontal: 10,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
