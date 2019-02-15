import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import firebase from 'react-native-firebase'
import { NavigationScreenProp } from 'react-navigation'

interface LoadingProps {
  navigation: NavigationScreenProp<any, any>
}

export default class Loading extends React.Component<LoadingProps> {
  public componentDidMount() {
    const unsubscribe: () => void = firebase.auth().onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? 'Main' : 'Login')
      if (unsubscribe) {
        unsubscribe()
      }
    })
  }

  public render() {
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
        <ActivityIndicator size='large' />
      </View>
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
