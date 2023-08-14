import { useRoute } from '@react-navigation/native';
import React, { useState, useEffect, useContext } from 'react';
import { 
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
  Dimensions,
} from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import firestore from '@react-native-firebase/firestore';
import SendIcon from '../../../Assets/icons/send.png';
import { AuthContext } from '../../../Navigation/AuthProvider';

export default function Chats({ navigation }) {
  const {user, logout} = useContext(AuthContext);
  const route = useRoute();
  const { image, title, groupId } = route.params;
  const [chatUser] = useState({
    name: 'Robert Henry',
    profile_image: 'https://randomuser.me/api/portraits/men/0.jpg',
    last_seen: 'online',
  });
  const [userName, setUserName] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [unsubscribe, setUnsubscribe] = useState(null);
  const [groupMembers, setGroupMembers] = useState('')
  
  useEffect(() => {
    if (user) {
      setCurrentUser(user);
    }
  
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []);
  
  async function refresh(){
    // Set up an interval to refresh the screen every 2 seconds
    const intervalId = setInterval(() => {
      // Fetch data or perform any actions here
      // For example, you can fetch the messages again or update some state
    }, 2000); // 2000 milliseconds = 2 seconds

    return () => {
      // Clear the interval when the component unmounts
      clearInterval(intervalId);
    };
  }

  useEffect(() => {
    const unsubscribeRef = firestore()
      .collection('Groups')
      .doc(groupId)
      .collection('chats')
      .orderBy('timestamp', 'asc')
      .onSnapshot((querySnapshot) => {
        const messagesData = [];
        querySnapshot.forEach((doc) => {
          messagesData.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setMessages(messagesData);
      });

    setUnsubscribe(unsubscribeRef);

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [groupId]);

  

  function getTime(date) {
    var utcHours = date.getUTCHours();
    var utcMinutes = date.getUTCMinutes();
    var ampm = utcHours >= 12 ? 'PM' : 'AM';
    utcHours = utcHours % 12;
    utcHours = utcHours ? utcHours : 12;
    utcMinutes = utcMinutes < 10 ? '0' + utcMinutes : utcMinutes;
    var strUtcTime = utcHours + ':' + utcMinutes + ' ' + ampm;
    return strUtcTime;
  }
  useEffect(() => {
    const unsubscribe = firestore()
      .collection('Groups')
      .doc(groupId)
      .collection('chats')
      .orderBy('timestamp', 'asc')
      .onSnapshot((querySnapshot) => {
        const messagesData = [];
        querySnapshot.forEach((doc) => {
          messagesData.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setMessages(messagesData);
      });

    return () => {
      unsubscribe();
    };
  }, [groupId]);
  function sendMessage() {
    if (inputMessage === '') {
      return setInputMessage('');
    }

    const t = getTime(new Date());
   
    const newMessage = {
      sender: currentUser.uid, // Using the current user's ID
      message: inputMessage,
      time: t,
      timestamp: firestore.FieldValue.serverTimestamp(),
      
    };
    
  

    const groupId = route.params.groupId; // Replace with your method to get the group ID
    firestore()
      .collection('Groups')
      .doc(groupId)
      .collection('chats')
      .add(newMessage);

    setInputMessage('');
    countMembers()
  }
  async function getGroupName(groupId) {
    try {
      const groupDocRef = firestore().collection('Groups').doc(groupId);
      const groupDocSnapshot = await groupDocRef.get();

      if (groupDocSnapshot.exists) {
        const userName = groupDocSnapshot.get('Name');
        setUserName(userName);
        console.log('name' , userName)
      } else {
        console.log('Group document does not exist');
      }
    } catch (error) {
      console.error('Error fetching group name:', error);
    }
  }
  useEffect(() => {
    getGroupName(groupId);
  }, [groupId]);
  async function countMembers(){
    const groupId = route.params.groupId; // Replace with your method to get the group ID

    // Query the chats subcollection of the group document
    firestore()
      .collection('Groups')
      .doc(groupId)
      .collection('chats')
      .get()
      .then(querySnapshot => {
        // Create a set to store unique senders
        const uniqueSenders = new Set();
    
        // Iterate through the messages and add unique senders to the set
        querySnapshot.forEach(doc => {
          const sender = doc.data().sender;
          if (sender) {
            uniqueSenders.add(sender);
          }
        });
    
        // Get the count of unique senders
        const numberOfUniqueSenders = uniqueSenders.size;
        setGroupMembers(numberOfUniqueSenders);
        console.log('Number of unique senders:', numberOfUniqueSenders);
      })
      .catch(error => {
        console.error('Error getting unique sender count:', error);
      });
  }
  useEffect(() => {
    countMembers(groupId);
  }, [groupId]);
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={{marginLeft: responsiveWidth(5)}}
            onPress={() => {
              navigation.navigate('Home');
            }}>
            <Image source={require('../../../Assets/icons/back.png')} />
          </TouchableOpacity>
          <Image source={image} style={{marginLeft: 8}} />
          <View style={styles.headertitle}>
            <Text style={styles.boldtext}>{userName}</Text>
            <Text style={styles.text}>{groupMembers} members</Text>
          </View>
        </View>
        <FlatList
          style={{backgroundColor: '#f2f2ff'}}
          data={JSON.parse(JSON.stringify(messages)).reverse()}
        keyExtractor={(item) => item.id}
         
          renderItem={({item}) => (
            <TouchableWithoutFeedback>
              <View
                style={{
                  marginTop: 6,
                  flexDirection: 'row',
                  justifyContent:
                    item.sender === currentUser.uid
                      ? 'flex-end'
                      : 'flex-start',
                }}>
                <View
                  style={[
                    styles.smscontainer,
                    {
                      backgroundColor:
                        item.sender === currentUser.uid
                          ? '#FFE7A3'
                          : '#FFFFFF',
                      alignSelf:
                        item.sender === currentUser.uid
                          ? 'flex-end'
                          : 'flex-start',
                    },
                  ]}>
                  {item.sender !== currentUser.uid && (
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
                          item.sender === currentUser.uid
                            ? '#111820'
                            : '#000000',
                      },
                    ]}>
                    {item.message}
                  </Text>
                  {item.sender === currentUser.uid && (
                    <Image
                      style={styles.profileimg}
                      source={{uri: chatUser.profile_image}}
                    />
                  )}
                </View>
              </View>
            </TouchableWithoutFeedback>
          )}
          inverted
        />

        <View style={{paddingVertical: 10,}}>
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
  boldtext: {
    color: '#111820',
    fontSize : responsiveFontSize(2),
    fontWeight: 'bold',
    width: '100%'
  },
  text : {
    fontSize: responsiveFontSize(1.5),
    color:'#111820'
  },
  userProfileImage: {height: '100%', aspectRatio: 1, borderRadius: 100},
  container: {
    flex: 1,
    backgroundColor: '#f2f2ff',
  },
  messageInputView: {
    display: 'flex',
    height:70,
    flexDirection: 'row',
    marginHorizontal: 14,
    backgroundColor: '#363333',
    borderRadius: 100,
  },
  messageInput: {
    fontSize: responsiveFontSize(1.5),
    flex: 1,
    paddingHorizontal: 20,
    color: '#FFFFFF',
  },
  messageSendView: {

    justifyContent: 'center',
  },
  send: {
    width: 70,
    backgroundColor: '#F6CD5B',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
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
    fontSize: responsiveFontSize(2),
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
