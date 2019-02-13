import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import firebase from 'react-native-firebase'
import { NavigationScreenProp } from 'react-navigation';

interface LoadingProps {
  navigation: NavigationScreenProp<any, any>
}

export default class Loading extends React.Component<LoadingProps> {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? 'Main' : 'Login')
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
        <ActivityIndicator size="large" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})