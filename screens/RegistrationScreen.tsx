import * as React from 'react';
import { useState } from 'react';
import {
  KeyboardAvoidingView,
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  Platform,
  Alert,
} from 'react-native';
import Button from 'react-native-button';

export const RegistrationScreen = () => {
  const [login, setLogin] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [repeatedPassword, setRepeatedPassword] = useState<string>('');

  const registerUser = () => {
    Alert.alert(login, email, [
      {
        text: password,
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: repeatedPassword, onPress: () => console.log('OK Pressed') },
    ]);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../assets/images/pig-logo.png')}
        ></Image>

        <View style={styles.wrapper}>
          <Text style={styles.header}>Sign up</Text>

          <TextInput
            onChangeText={setLogin}
            style={styles.input}
            placeholder='Login'
            placeholderTextColor='#A4A5A6'
            keyboardType='default'
            textContentType='username'
          ></TextInput>

          <TextInput
            onChangeText={setEmail}
            style={styles.input}
            placeholder='Email'
            placeholderTextColor='#A4A5A6'
            keyboardType='email-address'
            textContentType='emailAddress'
            autoCompleteType='email'
          ></TextInput>

          <TextInput
            onChangeText={setPassword}
            style={styles.input}
            placeholder='Password'
            placeholderTextColor='#A4A5A6'
            textContentType='password'
            autoCompleteType='password'
            secureTextEntry={true}
          ></TextInput>

          <TextInput
            onChangeText={setRepeatedPassword}
            style={styles.input}
            placeholder='Repeat password'
            placeholderTextColor='#A4A5A6'
            textContentType='password'
            autoCompleteType='password'
            secureTextEntry={true}
          ></TextInput>

          <Text style={styles.link}>i already have an account</Text>

          <Button
            onPress={registerUser}
            style={styles.button}
            containerStyle={{
              overflow: 'hidden',
              borderRadius: 4,
            }}
          >
            Register
          </Button>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
    width: '100%',
    backgroundColor: '#23272B',
    paddingTop: 85,
    paddingHorizontal: 33,
    paddingBottom: 60,
  },

  wrapper: {
    width: '100%',
  },

  logo: {
    width: 68,
    height: 71,
  },

  header: {
    fontSize: 41,
    marginBottom: 60,
    color: '#F4F4F4',
  },

  input: {
    width: '100%',
    fontSize: 16,
    paddingVertical: 19,
    paddingHorizontal: 12,
    backgroundColor: '#393D40',
    color: '#F4F4F4',
    borderRadius: 5,
    marginBottom: 35,
  },

  link: {
    textDecorationLine: 'underline',
    color: '#F4F4F4',
    marginBottom: 50,
  },

  button: {
    width: '100%',
    fontSize: 16,
    textAlign: 'center',
    paddingVertical: 19,
    color: '#393D40',
    backgroundColor: '#F4F4F4',
    borderRadius: 5,
  },
});
