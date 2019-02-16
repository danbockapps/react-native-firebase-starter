import React from 'react'
import { Image, View } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import { NavigationScreenProp } from 'react-navigation'
import { authStyles } from '../styles/Theme'

interface AuthProps {
  navigation: NavigationScreenProp<any, any>
  buttonText: string
  onButtonPress: (email: string, password: string) => void
  linkText: string
  linkRoute: string
}

interface AuthState {
  email: string
  password: string
}

export default class Auth extends React.Component<AuthProps, AuthState> {
  public state = { email: '', password: '' }

  public render() {
    return (
      <View style={authStyles.container}>
        <View style={authStyles.logo}>
          <Image source={require('../assets/LogoForAuthScreens.png')} />
        </View>

        <View style={authStyles.horizView}>
          <View style={authStyles.emptyView} />
          <View style={authStyles.vertView}>
            <TextInput
              style={authStyles.textInput}
              label='Email'
              onChangeText={email => this.setState({ email })}
              value={this.state.email}
            />
            <TextInput
              style={authStyles.textInput}
              secureTextEntry
              label='Password'
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
            />
            <Button mode='contained' onPress={() => this.props.onButtonPress(this.state.email, this.state.password)}>
              {this.props.buttonText}
            </Button>
          </View>
          <View style={authStyles.emptyView} />
        </View>

        <View style={authStyles.bottomLink}>
          <Button onPress={() => this.props.navigation.navigate(this.props.linkRoute)}>
            {this.props.linkText}
          </Button>
        </View>
      </View>
    )
  }
}
