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

const SignUp = ({navigation}) => {
  const passwordInputRef = useRef(null);
  const [isChecked, setIsChecked] = useState(true);
  const [showPassword, setShowPassword] = useState(true);

  const toggleCheckbox = () => {
    setIsChecked(prevChecked => !prevChecked);
  };
  const toggleShowPassword = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  };
  const handleSignUp = () => {
    navigation.navigate('Home');
  };
  return (
    <>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
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
                Welcome to SignUp!
              </Text>
            </View>

            <View
              style={{
                width: 124,
                height: 0,
                borderColor: '#F6CD5B',
                borderBottomWidth: 3,
                marginLeft: 91.5,
              }}
            />

            <View>
              <View>
                <View
                  style={{
                    marginTop: 25,
                    marginHorizontal: 20,
                    backgroundColor: '#F7F7F7',
                    borderRadius: 12,
                    height: 60,
                  }}>
                  <Text
                    style={{
                      marginLeft: 15,
                      marginTop: 6,
                      color: '#444444',
                      fontFamily: 'Roboto',
                      fontSize: 12,
                      fontWeight: 'bold',
                    }}>
                    Username
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <TextInput
                      style={{
                        borderWidth: 0,
                        marginLeft: 13,
                        color: '#222222',
                        fontFamily: 'Roboto',
                        fontSize: 15,
                        fontWeight: 'normal',
                        marginTop: -3,
                      }}
                      placeholder="johndoe"
                      placeholderTextColor="#222222"
                      autoCapitalize="none"
                      
                    />
                    <Image
                      source={require('../Assets/checkc.png')}
                      style={{marginRight: 15}}
                    />
                  </View>
                </View>
                <View
                  onTouchStart={() => passwordInputRef.current.focus()}
                  style={{
                    marginTop: 20,
                    marginHorizontal: 20,
                    backgroundColor: '#F7F7F7',
                    borderRadius: 12,
                    height: 60,
                  }}>
                  <Text
                    style={{
                      marginLeft: 15,
                      marginTop: 6,
                      color: '#444444',
                      fontFamily: 'Roboto',
                      fontSize: 12,
                      fontWeight: 'bold',
                    }}>
                    Password
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
                        marginTop: -3,
                        width: '80%',
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
                <View
                  onTouchStart={() => passwordInputRef.current.focus()}
                  style={{
                    marginTop: 20,
                    marginHorizontal: 20,
                    backgroundColor: '#F7F7F7',
                    borderRadius: 12,
                    height: 60,
                  }}>
                  <Text
                    style={{
                      marginLeft: 15,
                      marginTop: 6,
                      color: '#444444',
                      fontFamily: 'Roboto',
                      fontSize: 12,
                      fontWeight: 'bold',
                    }}>
                    Comfirm Password
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
                        marginTop: -3,
                        width: '80%',
                      }}
                      placeholder="Enter Comfirm Password"
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
                    Accept
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Roboto',
                      fontSize: 12,
                      color: '#000000',
                      marginLeft: 6,
                      fontWeight: 'bold',
                    }}>
                    T&C,
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Roboto',
                      fontSize: 12,
                      color: '#000000',
                      marginLeft: 6,
                      fontWeight: 'bold',
                    }}>
                    Privacy Policy
                  </Text>
                </View>
              </View>
              <View style={{alignItems: 'center', marginTop: 29}}>
                <TouchableOpacity
                  onPress={handleSignUp}
                  style={{
                    width: 275,
                    height: 48,
                    backgroundColor: '#363333',
                    borderRadius: 24,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Roboto',
                      fontWeight: 'bold',
                      fontSize: 15,
                      color: '#FFFFFF',
                    }}>
                    SIGNUP
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{alignItems: 'center', marginTop: 86}}>
                <Text
                  style={{
                    color: '#222222',
                    fontFamily: 'Roboto',
                    fontSize: 15,
                    height: 18,
                  }}>
                  Already have an account?
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
                    navigation.navigate('Login');
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Roboto',
                      fontWeight: 'bold',
                      fontSize: 15,
                      color: '#222222',
                    }}>
                    LOGIN
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default SignUp;
