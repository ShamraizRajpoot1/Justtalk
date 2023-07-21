// Black.js
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Animated,
  Easing,
} from 'react-native';
import React, {useEffect, useRef} from 'react';

const Black = ({navigation}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,

      useNativeDriver: true,
    }).start();

    const navigateTimeout = setTimeout(() => {
      navigation.replace('Splash'); // Use replace instead of navigate to avoid stack accumulation
    }, 2000);

    return () => clearTimeout(navigateTimeout);
  }, [fadeAnim, navigation]);

  return (
    <>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <SafeAreaView
        style={{height: '100%', width: '100%', backgroundColor: '#000'}}
      />
    </>
  );
};

export default Black;
