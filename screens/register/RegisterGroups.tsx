import React from 'react'
import { View } from 'react-native'
import { Button, Headline } from 'react-native-paper'
import { NavigationScreenProp } from 'react-navigation'

interface RegisterGroupsProps {
  navigation: NavigationScreenProp<any, any>
}

export default class RegisterGroups extends React.Component<RegisterGroupsProps> {
  public render() {
    return (
      <View>
        <Headline>Groups</Headline>
        <Button onPress={() => this.props.navigation.navigate('RegisterActivities')}>
          Go to activities
        </Button>
      </View>
    )
  }
}
