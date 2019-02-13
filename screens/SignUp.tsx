import React from 'react';
import { Text, View } from 'react-native';
import firebase from 'react-native-firebase';
import { Button, Headline, TextInput } from 'react-native-paper';
import { NavigationScreenProp } from 'react-navigation';
import Theme from '../styles/Theme';

interface SignUpProps {
  navigation: NavigationScreenProp<any, any>
}

interface SignUpState {
  email: string;
  password: string;
  errorMessage: string | null;
}

export default class SignUp extends React.Component<SignUpProps, SignUpState> {
  state = { email: '', password: '', errorMessage: null }
  handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
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
            <Button mode="contained" onPress={this.handleSignUp}>
              Sign Up
            </Button>
          </View>
          <View style={Theme.authStyles.emptyView} />
        </View>
        <View style={Theme.authStyles.bottomLink}>
          <Button onPress={() => this.props.navigation.navigate('Login')}>
            Don't have an account? Login
          </Button>
        </View>
      </View>
    )
  }
}