import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  Animated,
  Platform,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {BoxShadow} from 'react-native-shadow';

const Forget = ({navigation}) => {
  const [slideAnimation] = useState(new Animated.Value(0));
  const [showLastView, setShowLastView] = useState(false);
  const handleSendPasswordReset = () => {
    setShowLastView(true);
  };

  useEffect(() => {
    if (showLastView) {
      Animated.spring(slideAnimation, {
        toValue: 1,
        useNativeDriver: true,
        duration: 300,
      }).start();
    }
  }, [showLastView, slideAnimation]);

  return (
    <SafeAreaView
      style={{backgroundColor: '#ffffff', width: '100%', height: '100%'}}>
      <View
        style={{
          flexDirection: 'row',
          height: 68,
          borderBottomWidth: 1,
          borderBottomColor: '#EEEEEE',
        }}>
        <TouchableOpacity
          style={{marginLeft: 30}}
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Image
            source={require('../Assets/back.png')}
            style={{marginTop: 30}}
          />
        </TouchableOpacity>

        <Text
          style={{
            color: 'black',
            marginTop: 25,
            marginLeft: 70,
            fontWeight: 'bold',
            fontSize: 18,
          }}>
          Reset Your Password
        </Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <Text
          style={{
            color: 'black',
            marginTop: 30,
            fontWeight: 'bold',
            fontSize: 24,
          }}>
          Enter your email to reset
        </Text>
        <Text style={{color: 'black', fontWeight: 'bold', fontSize: 24}}>
          your password
        </Text>
      </View>
      <View
        style={{
          marginTop: 30,
          marginHorizontal: 20,
          backgroundColor: '#F7F7F7',
          borderRadius: 12,
        }}>
        <Text
          style={{
            marginLeft: 15,
            marginTop: 8,
            color: '#444444',
            fontFamily: 'Roboto',
            fontSize: 12,
            fontWeight: 'bold',
          }}>
          Email:
        </Text>
        <TextInput
          style={{
            borderWidth: 0,
            marginLeft: 13,
            color: '#222222',
            fontFamily: 'Roboto',
            fontSize: 15,
            fontWeight: 'normal',
          }}
          placeholder="johndoe@email.com"
          placeholderTextColor="#222222"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCompleteType="email"
        />
      </View>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#000',
            alignItems: 'center',
            justifyContent: 'center',
            width: 275,
            height: 48,
            borderRadius: 24,
            elevation: 3,
            borderColor: '#B7B7B780',
            marginTop: 30,
          }}
          onPress={handleSendPasswordReset}>
          <Text
            style={{
              color: '#FFFFFF',
              fontFamily: 'Roboto',
              fontSize: 15,
              fontWeight: 'bold',
            }}>
            SEND PASSWORD RESET LINK
          </Text>
        </TouchableOpacity>
      </View>
      {showLastView && (
        <Animated.View
          style={{
            alignItems: 'center',
            width: '100%',
            height: 362,
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
            backgroundColor: '#ffffff',
            marginTop: 75,
            shadowOffset: {
              width:5,
              height: 25,
            },
            transform: [
              {
                translateY: slideAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [362, 0],
                  extrapolate: 'clamp',
                }),
              },
            ],

            ...Platform.select({
              ios: {
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 25},
                shadowOpacity: 1,
                shadowRadius: 99,
              },
              android: {
                elevation: 9,
              },
            }),
          }}>
          <Image
            source={require('../Assets/checkc2.png')}
            style={{height: 56, width: 56, marginTop: 50}}
          />
          <Text
            style={{
              marginTop: 50,
              fontSize: 24,
              fontWeight: 'bold',
              fontFamily: 'Roboto',
              color: '#222222',
            }}>
            Password reset link sent
          </Text>
          <Text
            style={{
              fontSize: 24,
              fontWeight: 'bold',
              fontFamily: 'Roboto',
              color: '#222222',
            }}>
            to your email
          </Text>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Login');
            }}
            style={{
              width: 275,
              height: 48,
              borderRadius: 24,
              marginTop: 50,
              backgroundColor: '#363333',
              elevation: 3,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontFamily: 'Roboto',
                fontWeight: 'bold',
                fontSize: 15,
                color: '#FFFFFF',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              CONTINUE
            </Text>
          </TouchableOpacity>
        </Animated.View>
      )}
    </SafeAreaView>
  );
};

export default Forget;
