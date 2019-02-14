import React from 'react'
import { Text, View } from 'react-native'
import { Button, Headline, TextInput } from 'react-native-paper'
import { NavigationScreenProp } from 'react-navigation'
import Theme from '../styles/Theme'

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
  errorMessage: string | null
}

export default class Auth extends React.Component<AuthProps, AuthState> {
  public state = { email: '', password: '', errorMessage: null }

  public render() {
    return (
      <View style={Theme.authStyles.container}>
        <View style={Theme.authStyles.logo}>
          <Headline style={{ color: Theme.authStyles.headline.color }}>BeSpree</Headline>
        </View>

        <View style={Theme.authStyles.horizView}>
          <View style={Theme.authStyles.emptyView} />
          <View style={Theme.authStyles.vertView}>
            <TextInput
              style={Theme.authStyles.textInput}
              label='Email'
              onChangeText={email => this.setState({ email })}
              value={this.state.email}
            />
            <TextInput
              style={Theme.authStyles.textInput}
              secureTextEntry
              label='Password'
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
            />
            <Button mode='contained' onPress={() => this.props.onButtonPress(this.state.email, this.state.password)}>
              {this.props.buttonText}
            </Button>
          </View>
          <View style={Theme.authStyles.emptyView} />
        </View>

        <View style={Theme.authStyles.bottomLink}>
          <Button onPress={() => this.props.navigation.navigate(this.props.linkRoute)}>
            {this.props.linkText}
          </Button>
        </View>
      </View>
    )
  }
}
