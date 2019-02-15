import React from 'react'
import { Alert } from 'react-native'
import firebase, { RNFirebase } from 'react-native-firebase'
import { NavigationScreenProp } from 'react-navigation'
import Auth from '../shared/Auth'

interface LoginProps {
  navigation: NavigationScreenProp<any, any>
}

interface LoginState {
  email: string
  password: string
}

export default class Login extends React.Component<LoginProps, LoginState> {
  public render() {
    return (
      <Auth
        navigation={this.props.navigation}
        buttonText='Login'
        onButtonPress={this.handleLogin}
        linkText="Don't have an account? Sign up"
        linkRoute='SignUp'
      />
    )
  }

  private handleLogin = (email: string, password: string) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(
        (UserCredential: RNFirebase.UserCredential) => {
          if (UserCredential.user.emailVerified) {
            this.props.navigation.navigate('Main')
          } else {
            Alert.alert('Email address is not verified.')
          }
        },
      )
      .catch(error => Alert.alert('There was an error.', error.message))
  }
}
