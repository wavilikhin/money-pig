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

export const LoginScreen = () => {
  const [login, setLogin] = useState<string>('');
  const [loginInputIsFocused, setLoginInputIsFocused] =
    useState<boolean>(false);

  const [passwordInputIsFocused, setPasswordInputIsFocused] =
    useState<boolean>(false);
  const [password, setPassword] = useState<string>('');

  const [loginError, setLoginError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');

  const logUser = () => {
    Alert.alert(login, password, [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);
  };

  return (
    <KeyboardAvoidingView
      enabled={true}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../assets/images/pig-logo.png')}
        ></Image>

        <View style={styles.wrapper}>
          <Text style={styles.header}>Sign in</Text>

          <View style={styles.inputWrapper}>
            <Text
              style={[
                styles.inputLabel,
                loginInputIsFocused ? styles.inputLabelFocused : null,
              ]}
            >
              Login
            </Text>

            <TextInput
              onChangeText={setLogin}
              onFocus={() => {
                setLoginInputIsFocused(true);
              }}
              style={styles.input}
              placeholder='Login'
              keyboardType='default'
              textContentType='username'
              autoCompleteType='email'
            ></TextInput>

            <Text style={styles.inputError}>{loginError}</Text>
          </View>

          <View style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>Password</Text>

            <TextInput
              onChangeText={setPassword}
              style={styles.input}
              textContentType='password'
              autoCompleteType='password'
              secureTextEntry={true}
            ></TextInput>

            <Text style={styles.inputError}>{passwordError}</Text>
          </View>

          <Text style={styles.link}>i dont have an account yet</Text>

          <Button
            onPress={logUser}
            style={styles.button}
            containerStyle={{
              overflow: 'hidden',
              borderRadius: 4,
            }}
          >
            Sign in
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

  inputWrapper: {
    position: 'relative',
  },

  inputLabel: {
    position: 'absolute',
    zIndex: 2,
    top: 15,
    left: 12,
    fontSize: 16,
    color: '#A4A5A6',
  },

  inputLabelFocused: {
    top: -23,
    left: 5,
    fontSize: 14,
  },

  input: {
    width: '100%',
    fontSize: 16,
    paddingVertical: 15,
    paddingHorizontal: 12,
    backgroundColor: '#393D40',
    color: '#F4F4F4',
    borderRadius: 5,
    marginBottom: 55,
  },

  inputError: {
    position: 'absolute',
    color: '#EE2424',
    top: 52,
    left: 5,
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
