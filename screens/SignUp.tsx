import React from 'react'
import { Alert } from 'react-native'
import firebase, { RNFirebase } from 'react-native-firebase'
import { NavigationScreenProp } from 'react-navigation'
import Auth from '../shared/Auth'

interface SignUpProps {
  navigation: NavigationScreenProp<any, any>
}

interface SignUpState {
  email: string
  password: string
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
    const auth: RNFirebase.auth.Auth = firebase.auth()

    const unsubscribe: () => void = auth.onAuthStateChanged(user => {
      if (user) {
        user.sendEmailVerification()
        Alert.alert('Please check your email for instructions to verify your account.')

        if (unsubscribe) {
          unsubscribe()
        }
      }
    })

    auth.createUserWithEmailAndPassword(email, password)
      .catch(error => Alert.alert('There was an error.', error.message))
  }
}
