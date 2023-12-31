import {
  View,
  Text,
  Animated,
  StyleSheet,
  ScrollView,
  Modal,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import React, {useContext, useEffect, useState} from 'react';
import {SafeAreaView, TouchableOpacity, Image, StatusBar} from 'react-native';
import {AuthContext} from '../../../Navigation/AuthProvider';
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';
import { scale } from 'react-native-size-matters';
import { useRoute } from '@react-navigation/native';

const Home = ({ navigation, route }) => {
  
  const {user, logout} = useContext(AuthContext);
  const [showFoodView, setShowFoodView] = useState(false);
  const Food = () => {
    setShowFoodView(true);
  };

  useEffect(() => {
    if (showFoodView) {
      Animated.spring(slideAnimation, {
        toValue: 1,
        useNativeDriver: true,
        duration: 300,
      }).start();
    }
  }, [showFoodView, slideAnimation]);

  const [showBirthdayView, setShowBirthdayView] = useState(false);
  const Birthday = () => {
    setShowBirthdayView(true);
  };

  useEffect(() => {
    if (showBirthdayView) {
      Animated.spring(slideAnimation, {
        toValue: 1,
        useNativeDriver: true,
        duration: 300,
      }).start();
    }
  }, [showBirthdayView, slideAnimation]);

  const [showPineAppleView, setShowPineAppleView] = useState(false);
  const PineApple = () => {
    setShowPineAppleView(true);
  };

  useEffect(() => {
    if (showPineAppleView) {
      Animated.spring(slideAnimation, {
        toValue: 1,
        useNativeDriver: true,
        duration: 300,
      }).start();
    }
  }, [showPineAppleView, slideAnimation]);

  const [showFriendView, setShowFriendView] = useState(false);
  const Friends = () => {
    setShowFriendView(true);
  };

  useEffect(() => {
    if (showFriendView) {
      Animated.spring(slideAnimation, {
        toValue: 1,
        useNativeDriver: true,
        duration: 300,
      }).start();
    }
  }, [showFriendView, slideAnimation]);

  const [showKittyView, setShowKittyView] = useState(false);
  const Kitty = () => {
    setShowKittyView(true);
  };

  useEffect(() => {
    if (showKittyView) {
      Animated.spring(slideAnimation, {
        toValue: 1,
        useNativeDriver: true,
        duration: 300,
      }).start();
    }
  }, [showKittyView, slideAnimation]);

  const [slideAnimation] = useState(new Animated.Value(0));
  const [showPartyView, setShowPartyView] = useState(false);
  const Party = () => {
    setShowPartyView(true);
  };

  useEffect(() => {
    if (showPartyView) {
      Animated.spring(slideAnimation, {
        toValue: 1,
        useNativeDriver: true,
        duration: 300,
      }).start();
    }
  }, [showPartyView, slideAnimation]);
  const [showRaveView, setShowRaveView] = useState(false);
  const Rave = () => {
    setShowRaveView(true);
  };
  useEffect(() => {
    if (user && route.params && route.params.name) {
      firestore()
        .collection('Users')
        .doc(user.uid)
        .set({
          userId: user.uid,
          email: user.email,
          name: route.params.name,
        })
        .then(() => {
          console.log('User Registered');
        })
        .catch(error => {
          console.log('Something went wrong', error);
        });
    }
  }, [user, route.params]);
  useEffect(() => {
    if (showRaveView) {
      Animated.spring(slideAnimation, {
        toValue: 1,
        useNativeDriver: true,
        duration: 300,
      }).start();
    }
  }, [showRaveView, slideAnimation]);

  const MyModal = ({
    visible,
    onCloseModal,
    navigation,
    imageSource,
    title,
    popuptext,
    image,
    groupId
  }) => {
    const [fadeAnim] = useState(new Animated.Value(0));

    const handleModalOpen = () => {
      Animated.spring(fadeAnim, {
        toValue: 1,
        useNativeDriver: true,
        duration: 300,
      }).start();
    };

    const handleModalClose = () => {
      Animated.spring(fadeAnim, {
        toValue: 0,
        useNativeDriver: true,
        duration: 200,
      }).start(() => onCloseModal());
    };

    useEffect(() => {
      if (visible) {
        handleModalOpen();
      }
    }, [visible]);
    return (
      <Modal transparent visible={visible} onRequestClose={handleModalClose}>
        <TouchableOpacity
          style={styles.modalBackground}
          activeOpacity={1}
          onPress={handleModalClose}>
          <View style={styles.modalContainer}>
            <Animated.View style={[styles.popup, {opacity: fadeAnim}]}>
              <Image source={imageSource} style={styles.image} />
              <View style={styles.popupbody}>
                <Text style={styles.popupheader}>{title}</Text>
                <Text style={styles.popuptext}>{popuptext}</Text>
              </View>
              <View style={styles.buttonarea}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Chats', {image: image, title, groupId});
                    handleModalClose();
                  }}
                  style={styles.button}>
                  <Text style={styles.buttonText}>START TALK</Text>
                </TouchableOpacity>
              </View>
            </Animated.View>
          </View>
        </TouchableOpacity>
      </Modal>
    );
  };
  // const {user} = useContext(AuthContext);

  return (
    <>
      <StatusBar backgroundColor="#F6CD5B" barStyle="dark-content" />

      <View style={styles.container}>
        <View style={styles.header}>
        <TouchableOpacity style={{marginLeft: 20,}}
            onPress ={() => logout()}>
            <Image style={styles.headerback} source={require('../../../Assets/icons/back.png')} />
          </TouchableOpacity>
          <Image
            source={require('../../../Assets/icons/homelogo.png')}
            style={styles.headerimg}
          />
          
        </View>
        <View><Text></Text></View>
        <View style={styles.textbody}>
          <Text style={styles.boldtext}>These Chatrooms, You Bet!</Text>
          <Text style={styles.text}>Join Any Room Now</Text>
        </View>
        <View style={styles.body}>
          <Image source={require('../../../Assets/icons/Ellipse.png')} />
          <Image
            style={{zIndex: -1, marginTop: -200}}
            source={require('../../../Assets/icons/homeslogo.png')}
          />
          <View style={{zIndex: 5, marginTop: -226}}>
            <TouchableOpacity onPress={Party}>
              <Image source={require('../../../Assets/icons/homeparty.png')} />
              <Text style={styles.circletext}>Home Party</Text>
            </TouchableOpacity>
          </View>
          <View style={{zIndex: 5, marginTop: -30, marginLeft: 225}}>
            <TouchableOpacity onPress={Kitty}>
              <Image
                style={{zIndex: 6}}
                source={require('../../../Assets/icons/kittychatss.png')}
              />
              <Text style={styles.circletext}>Kitty Chats</Text>
            </TouchableOpacity>
          </View>

          <View style={{zIndex: 5, marginTop: -75, marginRight: 210}}>
            <TouchableOpacity onPress={Friends}>
              <Image
                source={require('../../../Assets/icons/friendsquad.png')}
              />
              <Text style={styles.circletext}>Friends Squad</Text>
            </TouchableOpacity>
          </View>
          <View style={{zIndex: 5, marginTop: 40, marginLeft: 260}}>
            <TouchableOpacity onPress={Food}>
              <Image source={require('../../../Assets/icons/foodclub.png')} />
              <Text style={styles.circletext}>Food Club</Text>
            </TouchableOpacity>
          </View>
          <View style={{zIndex: 5, marginTop: -80, marginRight: 255}}>
            <TouchableOpacity onPress={PineApple}>
              <Image source={require('../../../Assets/icons/pineapple.png')} />
              <Text style={styles.circletext}>Pineapple Party</Text>
            </TouchableOpacity>
          </View>
          <View style={{zIndex: 5, marginTop: 30, marginRight: 120}}>
            <TouchableOpacity onPress={Rave}>
              <Image source={require('../../../Assets/icons/raveroom.png')} />
              <Text style={styles.circletext}>Rave Room</Text>
            </TouchableOpacity>
          </View>
          <View style={{zIndex: 5, marginTop: -75, marginLeft: 140}}>
            <TouchableOpacity onPress={Birthday}>
              <Image source={require('../../../Assets/icons/birthday.png')} />
              <Text style={styles.circletext}>Birthday Party</Text>
            </TouchableOpacity>
          </View>
        </View>
        {showPartyView && (
          <MyModal
            visible={showPartyView}
            onCloseModal={() => setShowPartyView(false)}
            navigation={navigation}
            imageSource={require('../../../Assets/icons/partypic.png')}
            image={require('../../../Assets/icons/homeparty.png')}
            title="House Party"
            groupId= "55rI7HhE8bKU3pxCJEiI"
            popuptext="136 members joined the room"
          />
        )}

        {showKittyView && (
          <MyModal
            visible={showKittyView}
            onCloseModal={() => setShowKittyView(false)}
            navigation={navigation}
            imageSource={require('../../../Assets/icons/kittychats.png')}
            image={require('../../../Assets/icons/kittychatss.png')}
            groupId="8KbDhLgXzEuL2SQRixZw"
            title="Kitty Chats"
            popuptext="136 members joined the room"
          />
        )}
        {showFriendView && (
          <MyModal
            visible={showFriendView}
            onCloseModal={() => setShowFriendView(false)}
            navigation={navigation}
            imageSource={require('../../../Assets/icons/squads.png')}
            image={require('../../../Assets/icons/friendsquad.png')}
            groupId="BEmESmlJYXgchBx3EFLo"
            title="Friends Squad"
            popuptext="136 members joined the room"
          />
        )}

        {showPineAppleView && (
          <MyModal
            visible={showPineAppleView}
            onCloseModal={() => setShowPineAppleView(false)}
            navigation={navigation}
            imageSource={require('../../../Assets/icons/party.png')}
            image={require('../../../Assets/icons/pineapple.png')}
            groupId="ImI7Lfu15lk9HrouIlV5"
            title="Pineapple Party"
            popuptext="136 members joined the room"
          />
        )}

        {showBirthdayView && (
          <MyModal
            visible={showBirthdayView}
            onCloseModal={() => setShowBirthdayView(false)}
            navigation={navigation}
            imageSource={require('../../../Assets/icons/birthdayp.png')}
            image={require('../../../Assets/icons/birthday.png')}
            groupId="X6YJLf5VrEpbtCt8BoVR"
            title="Birthday Party"
            popuptext="136 members joined the room"
          />
        )}

        {showFoodView && (
          <MyModal
            visible={showFoodView}
            onCloseModal={() => setShowFoodView(false)}
            navigation={navigation}
            imageSource={require('../../../Assets/icons/food.png')}
            image={require('../../../Assets/icons/foodclub.png')}
            groupId="M2vydmymRE6c2N1Ew8vP"
            title="Food Club"
            popuptext="136 members joined the room"
          />
        )}
        {showRaveView && (
          <MyModal
            visible={showRaveView}
            onCloseModal={() => setShowRaveView(false)}
            navigation={navigation}
            imageSource={require('../../../Assets/icons/rave.png')}
            image={require('../../../Assets/icons/raveroom.png')}
            title="Rave Room"
            groupId="PNpaguzCg1uOjdJWxQLC"
            popuptext="136 members joined the room"
          />
        )}
      </View>
    </>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FFFFFF'},
  header: {
    flex: 1,
    backgroundColor: '#F6CD5B',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#F6CD5B',
    alignItems: 'center',
  },
  headerimg: {
    width: scale(100),
    height: scale(30),
    marginLeft: responsiveWidth(3),
  },
  headerback : {
    width: scale(10),
    height:scale(17)
  },
  modalBackground: {
    flex: 1,
    elevation: 9,
    justifyContent: 'flex-end', // Align the modal at the bottom
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end', // Center the popup vertically
    alignItems: 'center', // Center the popup horizontally
  },
  popup: {
    width: '100%', // Make the popup span the full width of the screen
    height: '50%', // Set the popup height to 50% of the screen height
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,

    justifyContent: 'center',
    alignItems: 'center',
  },
  textbody: {
    marginTop: 5,
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flex: 7,
    alignItems: 'center',
    marginTop: 15,
  },

  popupbody: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  popupheader: {
    fontSize: responsiveFontSize(3),
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    color: '#111820',
  },
  boldtext: {
    color: '#111820',
    fontWeight: 'bold',
    fontFamily: 'Oxygen',
    fontSize: responsiveFontSize(3),
  },
  text: {
    marginTop: 12,
    color: '#111820',
    fontWeight: 'bold',
    fontFamily: 'Oxygen',
    fontSize: responsiveFontSize(2.5),
  },
  image: {
    resizeMode: 'stretch',
    width: '100%',
    flex: 2,
  },
  popuptext: {
    fontSize: responsiveFontSize(2),
    fontFamily: 'Roboto',
    color: '#111820',
    marginTop: 5,
  },
  button: {
    borderRadius: 50,
    backgroundColor: '#F6CD5B',
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.5,
  },
  buttonarea: {
    flex: 1,
    width: '70%',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
    color: '#363333',
  },
  circletext: {
    fontSize: 12,
    fontFamily: 'Oxygen',
    fontWeight: 'bold',
    color: '#111820',
    marginTop: -6,
    marginLeft: 3,
  },
});
