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
} from 'react-native';
import React, {useState, useEffect} from 'react';

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
            style={{marginTop: 30}}
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
        />
      </View>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity
          style={styles.forgetbtn}
          onPress={handleSendPasswordReset}>
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
          title2 = "to your email"
          
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
    height: 68,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  headertext: {
    color: 'black',
    marginTop: 25,
    marginLeft: 70,
    fontWeight: 'bold',
    fontSize: 18,
  },
  text: {
    color: 'black',
    marginTop: 30,
    fontWeight: 'bold',
    fontSize: 24,
  },
  texts: {color: 'black', fontWeight: 'bold', fontSize: 24},
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
    fontSize: 12,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 0,
    marginLeft: 13,
    color: '#222222',
    fontFamily: 'Roboto',
    fontSize: 15,
    fontWeight: 'normal',
  },
  forgetbtn: {
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    width: 275,
    height: 48,
    borderRadius: 24,
    elevation: 3,
    borderColor: '#B7B7B780',
    marginTop: 30,
  },
  btntext: {
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontSize: 15,
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
    elevation:9 
  },
  popupbody: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  popupheader: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    color: '#222222',
  },
  popuptext: {
    fontSize: 16,
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
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  button: {
    borderRadius: 24,
    backgroundColor: '#363333',
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.5,
  },
  imgview: {
    flex:1,
    alignItems: 'center',
    justifyContent:'center'
  },
  image :{
    resizeMode: 'stretch'
  }
  
});
