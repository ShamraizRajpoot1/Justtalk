import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Animated,
  Easing,
  StatusBar,
} from 'react-native';

const Splash = ({navigation}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [showView, setShowView] = useState(false);
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);
  useEffect(() => {
    const delay = 300;
    const timer = setTimeout(() => {
      setShowView(true);
    }, delay);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 500);
  }, []);


  return (
    <>
    {showView ? (
      <StatusBar backgroundColor="#F6CD5B" barStyle="#ffffff" />) : null}
      <View style={{height: '100%', width: '100%', backgroundColor: '#F6CD5B'}}>
        <Animated.View style={[styles.container, {opacity: fadeAnim}]}>
          <Image
            source={require('../Assets/logo.png')}
            style={styles.backgroundImage}
          />
        </Animated.View>
      </View>
    </>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
