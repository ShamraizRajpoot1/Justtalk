import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React, {useRef, useState, useEffect} from 'react';

const Login = ({navigation}) => {
  const passwordInputRef = useRef(null);
  const [isChecked, setIsChecked] = useState(true);
  const [showPassword, setShowPassword] = useState(true);

  const [showView, setShowView] = useState(false);
  const [show2View, set2ShowView] = useState(false);

  useEffect(() => {
    const delay = 500;
    const timer = setTimeout(() => {
      setShowView(true);
    }, delay);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const delay = 1000;
    const timer = setTimeout(() => {
      set2ShowView(true);
    }, delay);
    return () => clearTimeout(timer);
  }, []);
  const toggleCheckbox = () => {
    setIsChecked(prevChecked => !prevChecked);
  };
  const toggleShowPassword = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  };

  return (
    <>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          keyboardShouldPersistTaps="handled">
          <View
            style={{
              flexDirection: 'column',
              height: '100%',
              width: '100%',
              backgroundColor: '#FFFFFF',
            }}>
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../Assets/login.png')}
                style={{
                  marginTop: 56,
                  width: 234,
                  height: 101.58,
                }}
              />

              <Text
                style={{
                  color: '#111820',
                  fontFamily: 'Oxygen',
                  fontSize: 24,
                  fontWeight: 'bold',
                  marginTop: 35,
                }}>
                Welcome to Login!
              </Text>
            </View>
            {showView ? (
              <View
                style={{
                  width: 124,
                  height: 0,
                  borderColor: '#F6CD5B',
                  borderBottomWidth: 3,
                  marginLeft: 100,
                }}
              />
            ) : null}
            {show2View ? (
              <View>
                <View>
                  <View
                    style={{
                      marginTop: 25,
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
                        color: '#222222', // Text color
                        fontFamily: 'Roboto', // Font family
                        fontSize: 15, // Font size
                        fontWeight: 'normal', // Font weight
                      }}
                      placeholder="johndoe@email.com"
                      placeholderTextColor="#222222"
                      keyboardType="email-address"
                      autoCapitalize="none"
                      autoCompleteType="email"
                    />
                  </View>
                  <View
                    onTouchStart={() => passwordInputRef.current.focus()}
                    style={{
                      marginTop: 25,
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
                      Password:
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <TextInput
                        ref={passwordInputRef}
                        style={{
                          borderWidth: 0,
                          marginLeft: 13,
                          color: '#222222',
                          fontFamily: 'Roboto',
                          fontSize: 15,
                          fontWeight: 'normal',
                        }}
                        placeholder="Enter your password"
                        placeholderTextColor="#222222"
                        secureTextEntry={showPassword}
                        autoCapitalize="none"
                        autoCompleteType="password"
                      />
                      <TouchableOpacity
                        onPress={toggleShowPassword}
                        style={{marginRight: 15}}>
                        <Image source={require('../Assets/eye.png')} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    marginLeft: 20,
                    marginTop: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity onPress={toggleCheckbox}>
                      <View
                        style={{
                          width: 14,
                          height: 14,
                          borderWidth: 2,
                          borderRadius: 100,
                          borderColor: isChecked ? '#F6CD5B' : '#222222',
                          backgroundColor: isChecked ? '#F6CD5B' : null,
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        {isChecked && (
                          <Image
                            source={require('../Assets/tick.png')}
                            style={{
                              width: 6,
                              height: 4,
                              borderRadius: 100,
                              backgroundColor: '#F6CD5B',
                            }}
                          />
                        )}
                      </View>
                    </TouchableOpacity>
                    <Text
                      style={{
                        fontFamily: 'Roboto',
                        fontSize: 12,
                        color: '#000000',
                        marginLeft: 6,
                      }}>
                      Remember me
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Forget');
                    }}>
                    <Text
                      style={{
                        fontFamily: 'Roboto',
                        fontWeight: 'bold',
                        fontSize: 12,
                        color: '#111820',
                        marginRight: 20,
                      }}>
                      Forgot Password?
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={{alignItems: 'center', marginTop: 29}}>
                  <TouchableOpacity onPress={() => {
                      navigation.navigate('Home');
                    }}
                    style={{
                      width: 275,
                      height: 48,
                      backgroundColor: '#363333',
                      borderRadius: 24,
                      alignItems: 'center',
                      justifyContent: 'center',
                      elevation: 3,
                      borderColor: '#B7B7B780',
                    }}>
                    <Text
                      style={{
                        fontFamily: 'Roboto',
                        fontWeight: 'bold',
                        fontSize: 15,
                        color: '#FFFFFF',
                      }}>
                      LOG IN
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={{alignItems: 'center', marginTop: 157}}>
                  <Text
                    style={{
                      color: '#222222',
                      fontFamily: 'Roboto',
                      fontSize: 15,
                      height: 18,
                    }}>
                    Don't have an account?
                  </Text>
                  <TouchableOpacity
                    style={{
                      width: 275,
                      height: 48,
                      backgroundColor: '#EEEEEE',
                      borderRadius: 24,
                      alignItems: 'center',
                      marginTop: 10,
                      justifyContent: 'center',
                    }}
                    onPress={() => {
                      navigation.navigate('SignUp');
                    }}>
                    <Text
                      style={{
                        fontFamily: 'Roboto',
                        fontWeight: 'bold',
                        fontSize: 15,
                        color: '#222222',
                      }}>
                      CREATE AN ACCOUNT
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            ) : null}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Login;
