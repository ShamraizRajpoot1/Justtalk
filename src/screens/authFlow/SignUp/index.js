import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
} from 'react-native';
import React, {useRef, useState, useEffect} from 'react';

const SignUp = ({navigation}) => {
  const passwordInputRef = useRef(null);
  const [isChecked, setIsChecked] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

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
  const toggle = {
    width: 14,
    height: 14,
    borderWidth: 2,
    borderRadius: 100,
    borderColor: isChecked ? '#F6CD5B' : '#222222',
    backgroundColor: isChecked ? '#F6CD5B' : null,
    alignItems: 'center',
    justifyContent: 'center',
  };
 

  return (
    <>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          keyboardShouldPersistTaps="handled">
          <View style={styles.top}>
            <View style={styles.image}>
              <Image source={require('../../../Assets/icons/login.png')} />
            </View>
            <View style={{flex: 2, justifyContent: 'flex-end'}}>
              <Text style={styles.text}>Welcome to Login!</Text>
            </View>
          </View>
          <View style={styles.line} />

          <View style={{flex: 2}}>
            <View style={styles.mid}>
              <View style={styles.email}>
                <Text style={styles.fieldtitle}>Username</Text>
                <TextInput
                  style={styles.input}
                  placeholder="johndoe"
                  placeholderTextColor="#222222"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCompleteType="email"
                />
              </View>
              <View
                onTouchStart={() => passwordInputRef.current.focus()}
                style={styles.password}>
                <Text style={styles.fieldtitle}>Password:</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <TextInput
                    ref={passwordInputRef}
                    style={styles.input}
                    placeholder="Enter your password"
                    placeholderTextColor="#222222"
                    secureTextEntry={showPassword}
                    autoCapitalize="none"
                    autoCompleteType="password"
                  />
                  <TouchableOpacity
                    onPress={toggleShowPassword}
                    style={{marginRight: 15}}>
                    <Image source={require('../../../Assets/icons/eye.png')} />
                  </TouchableOpacity>
                </View>
              </View>
              <View
                onTouchStart={() => passwordInputRef.current.focus()}
                style={styles.password}>
                <Text style={styles.fieldtitle}>Comfirm Password</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <TextInput
                    ref={passwordInputRef}
                    style={styles.input}
                    placeholder="Enter your password"
                    placeholderTextColor="#222222"
                    secureTextEntry={showPassword}
                    autoCapitalize="none"
                    autoCompleteType="password"
                  />
                  <TouchableOpacity
                    onPress={toggleShowPassword}
                    style={{marginRight: 15}}>
                    <Image source={require('../../../Assets/icons/eye.png')} />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.remrow}>
                <View style={styles.toggleview}>
                  <TouchableOpacity onPress={toggleCheckbox}>
                    <View style={toggle}>
                      {isChecked && (
                        <Image
                          source={require('../../../Assets/icons/tick.png')}
                          style={styles.toggleimg}
                        />
                      )}
                    </View>
                  </TouchableOpacity>

                  <Text style={styles.toggletext}>Accept </Text>
                  <Text style={styles.forget}> T&C,</Text>
                  <Text style={styles.forget}> Privacy Policy</Text>
                </View>
              </View>

              <View style={styles.button}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Home');
                  }}>
                  <Text style={styles.Logintext}>SIGNUP</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.end}>
              <Text style={styles.endtext}>Already have an account?</Text>
              <TouchableOpacity
                style={styles.bottombtn}
                onPress={() => {
                  navigation.navigate('Login');
                }}>
                <Text style={styles.btntext}>LOGIN</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  top: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  image: {
    flex: 3,
    justifyContent: 'flex-end',
  },
  text: {
    color: '#111820',
    fontFamily: 'Oxygen',
    fontSize: 24,
    fontWeight: 'bold',
  },
  line: {
    width: '33%',
    height: 0,
    borderColor: '#F6CD5B',
    borderBottomWidth: 3,
    marginLeft: '25%',
  },
  mid: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  email: {
    width: '90%',
    marginHorizontal: 20,
    backgroundColor: '#F7F7F7',
    borderRadius: 12,
  },
  password: {
    marginTop: 20,
    width: '90%',
    marginHorizontal: 20,
    backgroundColor: '#F7F7F7',
    borderRadius: 12,
  },
  input: {
    borderWidth: 0,
    marginLeft: 13,
    color: '#222222',
    fontFamily: 'Roboto',
    fontSize: 15,
    fontWeight: 'normal',
  },
  remrow: {
    width: '100%',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  toggleimg: {
    width: 6,
    height: 4,
    borderRadius: 100,
    backgroundColor: '#F6CD5B',
  },
  toggleview: {
    marginLeft: 20,
    flexDirection: 'row',
  },
  toggletext: {
    fontFamily: 'Roboto',
    fontSize: 12,
    color: '#000000',
    marginLeft: 6,
  },
  forget: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 12,
    color: '#111820',
    
  },
  fieldtitle: {
    marginLeft: 15,
    marginTop: 8,
    color: '#444444',
    fontFamily: 'Roboto',
    fontSize: 12,
    fontWeight: 'bold',
  },
  end: {flex: 1, alignItems: 'center', justifyContent: 'flex-end', bottom: 10},
  endtext: {
    color: '#222222',
    fontFamily: 'Roboto',
    fontSize: 15,
  },
  btntext: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 15,
    color: '#222222',
  },
  bottombtn: {
    width: '75%',
    height: '30%',
    backgroundColor: '#EEEEEE',
    borderRadius: 24,
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'center',
  },
  button: {
    width: '75%',
    height: '12%',
    backgroundColor: '#363333',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    borderColor: '#B7B7B780',
    marginTop: 29,
  },
  Logintext: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 15,
    color: '#FFFFFF',
  },
});
