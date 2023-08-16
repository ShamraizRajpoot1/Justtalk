import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  Animated,
  Modal,
  StyleSheet,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import { firebase } from '@react-native-firebase/firestore';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const Forget = ({navigation}) => {
  const [slideAnimation] = useState(new Animated.Value(0));
  const [showLastView, setShowLastView] = useState(false);
  const [emailValue, setEmailValue] = useState('');

  useEffect(() => {
    if (showLastView) {
      Animated.spring(slideAnimation, {
        toValue: 1,
        useNativeDriver: true,
        duration: 300,
      }).start();
    }
  }, [showLastView, slideAnimation]);
  const handleSendPasswordReset = async (email) => {
    try {
      const auth = firebase.auth();
      const userExists = await auth.fetchSignInMethodsForEmail(email);
      
      if (userExists.length === 0) {
        
        console.log('User does not exist.');
        Alert.alert('User does not exists');
        return;
      }
      
      await auth.sendPasswordResetEmail(email);
      setShowLastView(true); 
    } catch (error) {
      console.error('Error sending password reset email:', error);
      
    }
  };
  
  const MyModal = ({
    visible,
    onCloseModal,
    navigation,
    imageSource,
    title,
    title2,
    popuptext,
    image,
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
              <View style={styles.imgview}>
                <Image source={imageSource} style={styles.image} />
              </View>
              <View style={styles.popupbody}>
                <Text style={styles.popupheader}>{title}</Text>
                <Text style={styles.popupheader}>{title2}</Text>
              </View>
              <View style={styles.buttonarea}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Login');
                    handleModalClose();
                  }}
                  style={styles.button}>
                  <Text style={styles.buttonText}>Continue</Text>
                </TouchableOpacity>
              </View>
            </Animated.View>
          </View>
        </TouchableOpacity>
      </Modal>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={{marginLeft: 30}}
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Image
            source={require('../../../Assets/icons/back.png')}
            style={{}}
          />
        </TouchableOpacity>

        <Text style={styles.headertext}>Reset Your Password</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.text}>Enter your email to reset</Text>
        <Text style={styles.texts}>your password</Text>
      </View>
      <View style={styles.emailcontainer}>
        <Text style={styles.email}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="johndoe@email.com"
          placeholderTextColor="#222222"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCompleteType="email"
          onChangeText={text => setEmailValue(text)}
        />
      </View>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity
          style={styles.forgetbtn}
          onPress={() => handleSendPasswordReset(emailValue)}>
          <Text style={styles.btntext}>SEND PASSWORD RESET LINK</Text>
        </TouchableOpacity>
      </View>
      {showLastView && (
        <MyModal
          visible={showLastView}
          onCloseModal={() => setShowLastView(false)}
          navigation={navigation}
          imageSource={require('../../../Assets/icons/checkc2.png')}
          image={require('../../../Assets/icons/raveroom.png')}
          title="Password reset link sent "
          title2="to your email"
        />
      )}
    </View>
  );
};

export default Forget;

const styles = StyleSheet.create({
  container: {backgroundColor: '#ffffff', width: '100%', height: '100%'},
  header: {
    flexDirection: 'row',
    alignItems:'center',
    height: responsiveHeight(8),
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  headertext: {
    color: 'black',
    
    marginLeft: responsiveWidth(5),
    fontWeight: 'bold',
    fontSize: responsiveFontSize(1.5),
  },
  text: {
    color: 'black',
    marginTop: 30,
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2),
  },
  texts: {color: 'black', fontWeight: 'bold', fontSize: responsiveFontSize(2)},
  emailcontainer: {
    marginTop: 30,
    marginHorizontal: 20,
    backgroundColor: '#F7F7F7',
    borderRadius: 12,
  },
  email: {
    marginLeft: 15,
    marginTop: 8,
    color: '#444444',
    fontFamily: 'Roboto',
    fontSize: responsiveFontSize(1),
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 0,
    marginLeft: 13,
    color: '#222222',
    fontFamily: 'Roboto',
    fontSize: responsiveFontSize(1.3),
    fontWeight: 'normal',
  },
  forgetbtn: {
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    width: responsiveWidth(50),
    height: responsiveHeight(6),
    borderRadius: 50,
    elevation: 3,
    borderColor: '#B7B7B780',
    marginTop: 30,
  },
  btntext: {
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontSize: responsiveFontSize(1.3),
    fontWeight: 'bold',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'flex-end', // Align the modal at the bottom
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end', // Center the popup vertically
    alignItems: 'center',
  },
  popup: {
    width: '100%', // Make the popup span the full width of the screen
    height: '40%', // Set the popup height to 50% of the screen height
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 19,
  },
  popupbody: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  popupheader: {
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    color: '#222222',
  },
  popuptext: {
    fontSize: responsiveFontSize(1.4),
    fontFamily: 'Roboto',
    color: '#111820',
    marginTop: 5,
  },
  buttonarea: {
    flex: 1,
    width: '70%',
    justifyContent: 'center',
    
  },
  buttonText: {
    fontSize: responsiveFontSize(1.3),
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  button: {
    borderRadius: 50,
    backgroundColor: '#363333',
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.5,
  },
  imgview: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: responsiveHeight(6),
    width: responsiveHeight(6),
    resizeMode: 'stretch',
  },
});
