import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase, { RNFirebase } from 'react-native-firebase';
import { Button } from 'react-native-paper';

interface MainProps {

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

  render() {
    const { currentUser } = this.state
    return (
      <View style={styles.container}>
        <Text>
          Hi {currentUser && currentUser.email}!
        </Text>
        <Button mode="contained">Logout</Button>
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