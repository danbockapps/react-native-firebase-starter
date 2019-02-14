import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import firebase, { RNFirebase } from 'react-native-firebase'
import { Button } from 'react-native-paper'
import { NavigationScreenProp } from 'react-navigation'

interface MainProps {
  navigation: NavigationScreenProp<any, any>
}

interface MainState {
  currentUser: RNFirebase.User|null
}

export default class Main extends React.Component<MainProps, MainState> {
  public state: MainState = { currentUser: null }

  public componentDidMount() {
    const currentUser = firebase.auth().currentUser
    this.setState({ currentUser })
  }

  public render() {
    const { currentUser } = this.state
    return (
      <View style={styles.container}>
        <Text>
          Hi {currentUser && currentUser.email}!
        </Text>
        <Button mode='contained' onPress={this.logout}>Logout</Button>
      </View>
    )
  }

  private logout() {
    firebase.auth().signOut().then(
      () => this.props.navigation.navigate('Login'),
    ).catch(
      (error) => console.log(`Error: ${error}`),
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
})
