import React from 'react'
import { StyleSheet } from 'react-native'
import { Surface } from 'react-native-paper'

export default class Selectable extends React.Component {
  public render() {
    return (
      <Surface style={styles.surface}>
        {this.props.children}
      </Surface>
    )
  }
}

const styles = StyleSheet.create({
  surface: {
    alignItems: 'center',
    aspectRatio: 1,
    elevation: 2,
    justifyContent: 'center',
    margin: '5%',
    width: '40%',
  },
})
