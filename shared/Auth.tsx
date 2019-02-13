import React from "react";
import { View, Text } from "react-native";
import Theme from "../styles/Theme";
import { Headline, TextInput, Button } from "react-native-paper";
import { NavigationScreenProp } from "react-navigation";

interface AuthProps {
  navigation: NavigationScreenProp<any, any>
  buttonText: string
  onButtonPress: () => void
  linkText: string
  linkRoute: string
}

interface AuthState {
  email: string
  password: string
  errorMessage: string | null
}

export default class Auth extends React.Component<AuthProps, AuthState> {
  state = { email: '', password: '', errorMessage: null }

  render() {
    return (
      <View style={Theme.authStyles.container}>
        <View style={Theme.authStyles.logo}>
          <Headline style={{ color: Theme.authStyles.headline.color }}>BeSpree</Headline>
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
              label="Email"
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
            <Button mode="contained" onPress={this.props.onButtonPress}>
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