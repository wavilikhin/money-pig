import * as React from 'react';
import { View, Text, TextInput, StyleSheet, Image } from 'react-native';
import Button from 'react-native-button';

export const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/images/pig-logo.png')}
      ></Image>

      <View style={styles.wrapper}>
        <Text style={styles.header}>Sign in</Text>

        <TextInput style={styles.input} placeholder='Login'></TextInput>
        <TextInput style={styles.input} placeholder='Password'></TextInput>

        <Text style={styles.link}>i dont have an account yet</Text>

        <Button
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
    paddingBottom: 95,
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
    marginBottom: 23,
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
