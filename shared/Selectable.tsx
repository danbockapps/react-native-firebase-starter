import React from 'react'
import { StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'
import { Surface } from 'react-native-paper'
import { color } from '../styles/Theme'

interface SelectableProps {

}

interface SelectableState {
  selected: boolean
}

export default class Selectable extends React.Component<SelectableProps, SelectableState> {
  constructor(props: SelectableProps) {
    super(props)
    this.state = { selected: false }
  }

  public render() {
    return (
      <TouchableWithoutFeedback onPress={this.onPress}>
        <Surface style={this.getSurfaceStyle()}>
          <Text style={{color: this.getTextColor()}}>
            {this.props.children}
          </Text>
        </Surface>
      </TouchableWithoutFeedback>
    )
  }

  private getSurfaceStyle() {
    if (this.state.selected) {
      return { ...styles.selected, ...styles.surface }
    } else {
      return styles.surface
    }
  }

  private getTextColor() {
    if (this.state.selected) {
      return 'white'
    } else {
      return 'black'
    }
  }

  private onPress = () => {
    this.setState({ selected: !this.state.selected })
  }
}

const styles = StyleSheet.create({
  selected: {
    backgroundColor: color.beSpreeTeal,
  },
  surface: {
    alignItems: 'center',
    aspectRatio: 1,
    elevation: 2,
    justifyContent: 'center',
    margin: '5%',
    width: '40%',
  },
})
