import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase, { RNFirebase } from 'react-native-firebase';
import { Button } from 'react-native-paper';
import { NavigationScreenProp } from 'react-navigation';

interface MainProps {
  navigation: NavigationScreenProp<any, any>
}

interface MainState {
  currentUser: RNFirebase.User|null
}

export default class Main extends React.Component<MainProps, MainState> {
  state: MainState = { currentUser: null }
  
  componentDidMount() {
    const currentUser = firebase.auth().currentUser;
    this.setState({ currentUser })
  }

  logout() {
    firebase.auth().signOut().then(
      () => this.props.navigation.navigate('Login')
    ).catch(
      (error) => console.log(`Error: ${error}`)
    )
  }

  render() {
    const { currentUser } = this.state
    return (
      <View style={styles.container}>
        <Text>
          Hi {currentUser && currentUser.email}!
        </Text>
        <Button mode="contained" onPress={this.logout}>Logout</Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})