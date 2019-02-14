import React from 'react'
import { Alert } from 'react-native'
import firebase from 'react-native-firebase'
import { NavigationScreenProp } from 'react-navigation'
import Auth from '../shared/Auth'

interface SignUpProps {
  navigation: NavigationScreenProp<any, any>
}

interface SignUpState {
  email: string
  password: string
  errorMessage: string | null
}

export default class SignUp extends React.Component<SignUpProps, SignUpState> {
  public render() {
    return (
      <Auth
        navigation={this.props.navigation}
        buttonText='Sign Up'
        onButtonPress={this.handleSignUp}
        linkText='Already have an account? Login'
        linkRoute='Login'
      />
    )
  }

  private handleSignUp = (email: string, password: string) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('Main'))
      .catch(error => Alert.alert('There was an error.', error.message))
  }
}
