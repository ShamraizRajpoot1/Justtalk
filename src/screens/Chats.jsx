import {View, Text, TouchableOpacity, Image, StatusBar, TextInput,Keyboard,} from 'react-native';
import React, {useEffect,useState} from 'react';

const Chats = ({navigation}) => {
  const [isSingleLine, setIsSingleLine] = useState(true);

  const handleTextLayout = event => {
    const {lines} = event.nativeEvent;
    setIsSingleLine(lines.length === 1);
  };

  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow',
      () => setIsKeyboardOpen(true)
    );

    const keyboardDidHideListener = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide',
      () => setIsKeyboardOpen(false)
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <>
      <StatusBar backgroundColor="#F6CD5B" barStyle="dark-content" />
      <View style={{width: '100%', height: '100%'}}>
        <View
          style={{
            backgroundColor: '#F6CD5B',
            flexDirection: 'row',
            height: 68,
            borderBottomWidth: 1,
            borderBottomColor: '#F6CD5B',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{marginLeft: 30}}
            onPress={() => {
              navigation.navigate('Home');
            }}>
            <Image source={require('../Assets/back.png')} />
          </TouchableOpacity>
          <Image
            source={require('../Assets/homeparty.png')}
            style={{marginLeft: 15}}
          />
          <View style={{flexDirection: 'column', marginLeft: 5}}>
            <Text
              style={{
                color: '#111820',
                fontFamily: 'Oxygen',
                fontWeight: 'bold',
                fontSize: 16,
              }}>
              House Party
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontFamily: 'Roboto',
                color: '#111820',
                marginTop: 2,
              }}>
              136 members
            </Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', marginRight: 75.5, marginTop: 20}}>
          <View
            style={{
              position: 'relative',
              backgroundColor: '#FFFFFF',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 24,
              marginLeft: 18,
              paddingHorizontal: 10,
              height: isSingleLine ? 48 : 'auto',
            }}>
            <Image
              source={require('../Assets/homeparty.png')}
              style={{position: 'absolute', top: -5, left: -5}}
            />
            <Text
              style={{
                marginTop: 16,
                alignSelf: 'center',
                textAlign: 'auto',
                fontFamily: 'Roboto',
                fontSize: 14,
                color: '#111820',
                marginBottom: 16,
                marginLeft: 55,
              }}
              onTextLayout={handleTextLayout}>
              Lorem ipsum dolor sit amet.
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', marginRight: 75.5, marginTop: 26}}>
          <View
            style={{
              position: 'relative',
              backgroundColor: '#FFFFFF',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 24,
              marginLeft: 18,
              paddingHorizontal: 10,
              height: isSingleLine ? 48 : 'auto',
            }}>
            <Image
              source={require('../Assets/homeparty.png')}
              style={{position: 'absolute', top: -5, left: -5}}
            />
            <Text
              style={{
                marginTop: 16,
                alignSelf: 'center',
                textAlign: 'auto',
                fontFamily: 'Roboto',
                fontSize: 14,
                color: '#111820',
                marginBottom: 16,
                marginLeft: 55,
              }}
              onTextLayout={handleTextLayout}>
              Lorem ipsum.
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', marginRight: 75.5, marginTop: 26}}>
          <View
            style={{
              position: 'relative',
              backgroundColor: '#FFFFFF',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 24,
              marginLeft: 18,
              paddingHorizontal: 10,
              height: isSingleLine ? 48 : 'auto',
            }}>
            <Image
              source={require('../Assets/homeparty.png')}
              style={{position: 'absolute', top: -5, left: -5}}
            />
            <Text
              style={{
                marginTop: 16,
                alignSelf: 'center',
                textAlign: 'auto',
                fontFamily: 'Roboto',
                fontSize: 14,
                color: '#111820',
                marginBottom: 16,
                marginLeft: 55,
              }}
              onTextLayout={handleTextLayout}>
              Lorem ipsum .
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'flex-end',
            marginRight: 14,
            marginTop: 26,
          }}>
          <View
            style={{
              position: 'relative',
              backgroundColor: '#FFE7A3',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 24,
              marginLeft: 18,
              paddingHorizontal: 10,
              height: isSingleLine ? 48 : 'auto',
            }}>
            <Image
              source={require('../Assets/homeparty.png')}
              style={{position: 'absolute', top: -5, right: -8}}
            />
            <Text
              style={{
                marginTop: 16,
                alignSelf: 'center',
                textAlign: 'auto',
                fontFamily: 'Roboto',
                fontSize: 14,
                color: '#111820',
                marginBottom: 16,
                marginRight: 55,
              }}
              onTextLayout={handleTextLayout}>
              Lorem ipsum...
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', marginRight: 75.5, marginTop: 26}}>
          <View
            style={{
              position: 'relative',
              backgroundColor: '#FFFFFF',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 24,
              marginLeft: 18,
              paddingHorizontal: 10,
              height: isSingleLine ? 48 : 'auto',
            }}>
            <Image
              source={require('../Assets/homeparty.png')}
              style={{position: 'absolute', top: -5, left: -5}}
            />
            <Text
              style={{
                marginTop: 16,
                alignSelf: 'center',
                textAlign: 'auto',
                fontFamily: 'Roboto',
                fontSize: 14,
                color: '#111820',
                marginBottom: 16,
                marginLeft: 55,
              }}
              onTextLayout={handleTextLayout}>
              Lorem ipsum dolor sit amet....
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'flex-end',
            marginRight: 14,
            marginTop: 26,
          }}>
          <View
            style={{
              position: 'relative',
              backgroundColor: '#FFE7A3',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 24,
              marginLeft: 18,
              paddingHorizontal: 10,
              height: isSingleLine ? 48 : 'auto',
            }}>
            <Image
              source={require('../Assets/homeparty.png')}
              style={{position: 'absolute', top: -5, right: -8}}
            />
            <Text
              style={{
                marginTop: 16,
                alignSelf: 'center',
                textAlign: 'auto',
                fontFamily: 'Roboto',
                fontSize: 14,
                color: '#111820',
                marginBottom: 16,
                marginRight: 55,
              }}
              onTextLayout={handleTextLayout}>
              Lorem ipsum...
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', marginRight: 75.5, marginTop: 26}}>
          <View
            style={{
              position: 'relative',
              backgroundColor: '#FFFFFF',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 24,
              marginLeft: 18,
              paddingHorizontal: 10,
              height: isSingleLine ? 48 : 'auto',
            }}>
            <Image
              source={require('../Assets/homeparty.png')}
              style={{position: 'absolute', top: -5, left: -5}}
            />
            <Text
              style={{
                marginTop: 16,
                alignSelf: 'center',
                textAlign: 'auto',
                fontFamily: 'Roboto',
                fontSize: 14,
                color: '#111820',
                marginBottom: 16,
                marginLeft: 55,
              }}
              onTextLayout={handleTextLayout}>
              Lorem ipsum dolor sit amet. Ut rerum odit a beatae fugiat id acc
              antium provident. Aut aperiam iu re et modi consequatur 33 invent
              ore voluptas.
            </Text>
          </View>
        </View>
        <View style={{position: 'absolute', bottom: 0,marginBottom: isKeyboardOpen ? 0 : 25, alignSelf: 'center'}}>
          <TouchableOpacity
            style={{
              width: 335,
              justifyContent: 'center',
              borderRadius: 28,
              backgroundColor: '#363333',
              height: 50,
            }}>
            <View
              style={{justifyContent: 'space-between', flexDirection: 'row'}}>
              
              <TextInput
                       
                        style={{color: '#FFFFFF', marginLeft: 23, opacity: 0.5}}
                        placeholder="Type your message here..."
                        placeholderTextColor={"#FFFFFF"}
                        autoCapitalize="none"
                        
                      />
                <View style={{width:50, height: 50,borderRadius: 100,alignItems:'center',justifyContent:'center', backgroundColor: '#F6CD5B'}}>
                <Image
                  source={require('../Assets/send.png')}
                 
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Chats;
