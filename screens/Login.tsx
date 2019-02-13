import React from 'react';
import firebase from 'react-native-firebase';
import { NavigationScreenProp } from 'react-navigation';
import Auth from '../shared/Auth';

interface LoginProps {
  navigation: NavigationScreenProp<any, any>
}

interface LoginState {
  email: string;
  password: string
  errorMessage: string | null
}

export default class Login extends React.Component<LoginProps, LoginState> {
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
      <Auth
        navigation = {this.props.navigation}
        buttonText = "Login"
        onButtonPress = {this.handleLogin}
        linkText = "Don't have an account? Sign up"
        linkRoute = "SignUp"
      />
    )
  }
}