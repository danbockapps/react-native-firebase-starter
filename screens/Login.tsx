import React from 'react';
import { Text, View } from 'react-native';
import firebase from 'react-native-firebase';
import { Button, Headline, TextInput } from 'react-native-paper';
import { NavigationScreenProp } from 'react-navigation';
import Theme from '../styles/Theme';

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
      <View style={Theme.authStyles.container}>
        <View style={Theme.authStyles.logo}>
          <Headline style={{ color: '#aabbff' }}>BeSpree</Headline>
        </View>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}

        <View style={Theme.authStyles.horizView}>
          <View style={Theme.authStyles.emptyView} />
          <View style={Theme.authStyles.vertView}>
            <TextInput
              style={Theme.authStyles.textInput}
              label="Login"
              onChangeText={email => this.setState({ email })}
              value={this.state.email}
            />
            <TextInput
              style={Theme.authStyles.textInput}
              secureTextEntry
              label="Password"
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
            />
            <Button mode="contained" onPress={this.handleLogin}>
              Login
            </Button>
          </View>
          <View style={Theme.authStyles.emptyView} />
        </View>
        <View style={Theme.authStyles.bottomLink}>
          <Button onPress={() => this.props.navigation.navigate('SignUp')}>
            Don't have an account? Sign Up
          </Button>
        </View>
      </View>
    )
  }
}