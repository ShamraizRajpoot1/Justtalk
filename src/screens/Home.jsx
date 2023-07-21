import {View, Text, Animated} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, TouchableOpacity, Image, StatusBar} from 'react-native';

const Home = ({navigation}) => {
  // const homeparty =() => {
  //   navigation.navigate('Home');
  //   showPartyView()
  // }

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
  return (
    <>
      <StatusBar backgroundColor="#F6CD5B" barStyle="dark-content" />
      <SafeAreaView
        style={{backgroundColor: '#FFFFFF', width: '100%', height: '100%'}}>
        <View
          style={{
            backgroundColor: '#F6CD5B',
            height: 66,
            borderBottomWidth: 1,
            borderBottomColor: '#ACAA7E59',
            justifyContent: 'center',
            elevation: 2,
          }}>
          <Image
            source={require('../Assets/homelogo.png')}
            style={{marginLeft: 21}}
          />
        </View>
        <View style={{alignItems: 'center', marginTop: 41.5}}>
          <Text
            style={{
              color: '#111820',
              fontWeight: 'bold',
              fontFamily: 'Oxygen',
              fontSize: 24,
            }}>
            These Chatrooms, You Bet!
          </Text>
          <Text
            style={{
              marginTop: 12,
              color: '#111820',
              fontWeight: 'bold',
              fontFamily: 'Oxygen',
              fontSize: 18,
            }}>
            Join Any Room Now
          </Text>
        </View>
        <View style={{alignItems: 'center', marginTop: 63}}>
          <Image source={require('../Assets/Ellipse.png')} />
          <Image
            style={{zIndex: -1, marginTop: -200}}
            source={require('../Assets/homeslogo.png')}
          />
          <View style={{zIndex: 5, marginTop: -226}}>
            <TouchableOpacity onPress={Party}>
              <Image source={require('../Assets/homeparty.png')} />
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: 'Oxygen',
                  fontWeight: 'bold',
                  color: '#111820',
                  marginTop: -6,
                  marginLeft: 3,
                }}>
                Home Party
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{zIndex: 6, marginTop: -30, marginLeft: 225}}>
            <TouchableOpacity onPress={Kitty}>
              <Image
                style={{zIndex: 5}}
                source={require('../Assets/kittychat.png')}
              />
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: 'Oxygen',
                  fontWeight: 'bold',
                  color: '#111820',
                  marginTop: -6,
                  marginLeft: 3,
                }}>
                Kitty Chats
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{zIndex: 5, marginTop: -75, marginRight: 210}}>
            <TouchableOpacity onPress={Friends}>
              <Image source={require('../Assets/friendsquad.png')} />
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: 'Oxygen',
                  fontWeight: 'bold',
                  color: '#111820',
                  marginTop: -6,
                }}>
                Friends Squad
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{zIndex: 6, marginTop: 40, marginLeft: 260}}>
            <TouchableOpacity onPress={Food}>
              <Image source={require('../Assets/foodclub.png')} />
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: 'Oxygen',
                  fontWeight: 'bold',
                  color: '#111820',
                  marginTop: -6,
                  marginLeft: 3,
                }}>
                Food Club
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{zIndex: 5, marginTop: -80, marginRight: 255}}>
            <TouchableOpacity onPress={PineApple}>
              <Image source={require('../Assets/pineapple.png')} />
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: 'Oxygen',
                  fontWeight: 'bold',
                  color: '#111820',
                  marginTop: -6,
                  marginRight: 4,
                }}>
                Pineapple Party
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{zIndex: 5, marginTop: 30, marginRight: 120}}>
            <TouchableOpacity>
              <Image source={require('../Assets/raveroom.png')} />
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: 'Oxygen',
                  fontWeight: 'bold',
                  color: '#111820',
                  marginTop: -6,
                }}>
                Rave Room
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{zIndex: 5, marginTop: -75, marginLeft: 140}}>
            <TouchableOpacity onPress={Birthday}>
              <Image source={require('../Assets/birthday.png')} />
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: 'Oxygen',
                  fontWeight: 'bold',
                  color: '#111820',
                  marginTop: -6,
                }}>
                Birthday Party
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {showPartyView && (
          <Animated.View
            style={{
              alignItems: 'center',
              width: '100%',
              height: 375,
              borderTopLeftRadius: 50,
              borderTopRightRadius: 50,
              backgroundColor: '#ffffff',
              marginTop: -190,
              zIndex: 99,
              justifyContent: 'flex-end',
              transform: [
                {
                  translateY: slideAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [375, 0],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            }}>
            <Image
              source={require('../Assets/partypic.png')}
              style={{resizeMode: 'stretch', width: '100%'}}
            />
            <Text
              style={{
                marginTop: 34,
                fontSize: 22,
                fontWeight: 'bold',
                fontFamily: 'Roboto',
                color: '#111820',
              }}>
              House Party
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Roboto',
                color: '#111820',
                marginTop: 10,
              }}>
              136 members joined the room
            </Text>

            <TouchableOpacity
              
              onPress={() => {
                navigation.navigate('Chats');
                setShowPartyView(false);
              }}
              style={{
                width: 275,
                height: 48,
                borderRadius: 24,
                marginTop: 37,
                backgroundColor: '#F6CD5B',
                elevation: 3,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontFamily: 'Roboto',
                  fontWeight: 'bold',
                  fontSize: 15,
                  color: '#363333',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                START TALK
              </Text>
            </TouchableOpacity>
          </Animated.View>
        )}

        {showKittyView && (
          <Animated.View
            style={{
              alignItems: 'center',
              width: '100%',
              height: 375,
              borderTopLeftRadius: 50,
              borderTopRightRadius: 50,
              backgroundColor: '#ffffff',
              marginTop: -190,
              zIndex: 99,
              justifyContent: 'flex-end',
              transform: [
                {
                  translateY: slideAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [375, 0],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            }}>
            <Image
              source={require('../Assets/kittychats.png')}
              style={{resizeMode: 'stretch', width: '100%'}}
            />
            <Text
              style={{
                marginTop: 34,
                fontSize: 22,
                fontWeight: 'bold',
                fontFamily: 'Roboto',
                color: '#111820',
              }}>
              Kitty Chats
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Roboto',
                color: '#111820',
                marginTop: 10,
              }}>
              136 members joined the room
            </Text>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Chats');
                setShowKittyView(false);
              }}
              style={{
                width: 275,
                height: 48,
                borderRadius: 24,
                marginTop: 37,
                backgroundColor: '#F6CD5B',
                elevation: 3,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontFamily: 'Roboto',
                  fontWeight: 'bold',
                  fontSize: 15,
                  color: '#363333',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                START TALK
              </Text>
            </TouchableOpacity>
          </Animated.View>
        )}
        {showFriendView && (
          <Animated.View
            style={{
              alignItems: 'center',
              width: '100%',
              height: 375,
              borderTopLeftRadius: 50,
              borderTopRightRadius: 50,
              backgroundColor: '#ffffff',
              marginTop: -190,
              zIndex: 99,
              justifyContent: 'flex-end',
              transform: [
                {
                  translateY: slideAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [375, 0],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            }}>
            <Image
              source={require('../Assets/squads.png')}
              style={{resizeMode: 'stretch', width: '100%'}}
            />
            <Text
              style={{
                marginTop: 34,
                fontSize: 22,
                fontWeight: 'bold',
                fontFamily: 'Roboto',
                color: '#111820',
              }}>
              Friends Squad
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Roboto',
                color: '#111820',
                marginTop: 10,
              }}>
              136 members joined the room
            </Text>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Chats');
                setShowFriendView(false);
              }}
              style={{
                width: 275,
                height: 48,
                borderRadius: 24,
                marginTop: 37,
                backgroundColor: '#F6CD5B',
                elevation: 3,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontFamily: 'Roboto',
                  fontWeight: 'bold',
                  fontSize: 15,
                  color: '#363333',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                START TALK
              </Text>
            </TouchableOpacity>
          </Animated.View>
        )}

        {showPineAppleView && (
          <Animated.View
            style={{
              alignItems: 'center',
              width: '100%',
              height: 375,
              borderTopLeftRadius: 50,
              borderTopRightRadius: 50,
              backgroundColor: '#ffffff',
              marginTop: -190,
              zIndex: 99,
              justifyContent: 'flex-end',
              transform: [
                {
                  translateY: slideAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [375, 0],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            }}>
            <Image
              source={require('../Assets/party.png')}
              style={{resizeMode: 'stretch', width: '100%'}}
            />
            <Text
              style={{
                marginTop: 34,
                fontSize: 22,
                fontWeight: 'bold',
                fontFamily: 'Roboto',
                color: '#111820',
              }}>
              PineApple Party
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Roboto',
                color: '#111820',
                marginTop: 10,
              }}>
              136 members joined the room
            </Text>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Chats');
                setShowPineAppleView(false);
              }}
              style={{
                width: 275,
                height: 48,
                borderRadius: 24,
                marginTop: 37,
                backgroundColor: '#F6CD5B',
                elevation: 3,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontFamily: 'Roboto',
                  fontWeight: 'bold',
                  fontSize: 15,
                  color: '#363333',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                START TALK
              </Text>
            </TouchableOpacity>
          </Animated.View>
        )}

        {showBirthdayView && (
          <Animated.View
            style={{
              alignItems: 'center',
              width: '100%',
              height: 375,
              borderTopLeftRadius: 50,
              borderTopRightRadius: 50,
              backgroundColor: '#ffffff',
              marginTop: -190,
              zIndex: 99,
              justifyContent: 'flex-end',
              transform: [
                {
                  translateY: slideAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [375, 0],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            }}>
            <Image
              source={require('../Assets/birthdayp.png')}
              style={{resizeMode: 'stretch', width: '100%'}}
            />
            <Text
              style={{
                marginTop: 34,
                fontSize: 22,
                fontWeight: 'bold',
                fontFamily: 'Roboto',
                color: '#111820',
              }}>
              Birthday Party
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Roboto',
                color: '#111820',
                marginTop: 10,
              }}>
              136 members joined the room
            </Text>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Chats');
                setShowBirthdayView(false);
              }}
              style={{
                width: 275,
                height: 48,
                borderRadius: 24,
                marginTop: 37,
                backgroundColor: '#F6CD5B',
                elevation: 3,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontFamily: 'Roboto',
                  fontWeight: 'bold',
                  fontSize: 15,
                  color: '#363333',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                START TALK
              </Text>
            </TouchableOpacity>
          </Animated.View>
        )}

        {showFoodView && (
          <Animated.View
            style={{
              alignItems: 'center',
              width: '100%',
              height: 375,
              borderTopLeftRadius: 50,
              borderTopRightRadius: 50,
              backgroundColor: '#ffffff',
              marginTop: -190,
              zIndex: 99,
              justifyContent: 'flex-end',
              transform: [
                {
                  translateY: slideAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [375, 0],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            }}>
            <Image
              source={require('../Assets/food.png')}
              style={{resizeMode: 'stretch', width: '100%'}}
            />
            <Text
              style={{
                marginTop: 34,
                fontSize: 22,
                fontWeight: 'bold',
                fontFamily: 'Roboto',
                color: '#111820',
              }}>
              Food Club
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Roboto',
                color: '#111820',
                marginTop: 10,
              }}>
              136 members joined the room
            </Text>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Chats');
                setShowFoodView(false);
              }}
              style={{
                width: 275,
                height: 48,
                borderRadius: 24,
                marginTop: 37,
                backgroundColor: '#F6CD5B',
                elevation: 3,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontFamily: 'Roboto',
                  fontWeight: 'bold',
                  fontSize: 15,
                  color: '#363333',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                START TALK
              </Text>
            </TouchableOpacity>
          </Animated.View>
        )}
      </SafeAreaView>
    </>
  );
};

export default Home;
