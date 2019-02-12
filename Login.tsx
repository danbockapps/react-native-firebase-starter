import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'react-native-firebase';
import { Button, Headline, TextInput } from 'react-native-paper';
import { NavigationScreenProp } from 'react-navigation';

interface LoginProps {
  navigation: NavigationScreenProp<any, any>
}

interface LoginState {
  email: string;
  password: string
  errorMessage: string | null
}

export default class Login extends React.Component<LoginProps, LoginState> {
  state = { email: '', password: '', errorMessage: null }

  handleLogin = () => {
    const { email, password } = this.state
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('Main'))
      .catch(error => this.setState({ errorMessage: error.message }))
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Headline style={{ color: '#aabbff' }}>BeSpree</Headline>
        </View>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}

        <View style={styles.horizView}>
          <View style={styles.emptyView} />
          <View style={styles.vertView}>
            <TextInput
              style={styles.textInput}
              label="Login"
              onChangeText={email => this.setState({ email })}
              value={this.state.email}
            />
            <TextInput
              style={styles.textInput}
              secureTextEntry
              label="Password"
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
            />
            <Button mode="contained" onPress={this.handleLogin}>
              Login
            </Button>
          </View>
          <View style={styles.emptyView} />
        </View>
        <View style={styles.bottomLink}>
          <Button onPress={() => this.props.navigation.navigate('SignUp')}>
            Don't have an account? Sign Up
          </Button>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  horizView: {
    flex: 1,
    flexDirection: 'row'
  },
  emptyView: {
    flex: 1
  },
  vertView: {
    flex: 7,
    flexDirection: 'column'
  },
  textInput: {
    marginBottom: 10,
  },
  bottomLink: {
    flex: 1
  }
})