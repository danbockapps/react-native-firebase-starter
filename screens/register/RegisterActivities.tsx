import React from 'react'
import { View } from 'react-native'
import { Button, Headline } from 'react-native-paper'
import { NavigationScreenProp } from 'react-navigation'

interface RegisterActivitiesProps {
  navigation: NavigationScreenProp<any, any>
}

export default class RegisterActivities extends React.Component<RegisterActivitiesProps> {
  public render() {
    return (
      <View>
        <Headline>Activities</Headline>
        <Button onPress={() => this.props.navigation.navigate('RegisterGroups')}>
          Go to groups
        </Button>
      </View>
    )
  }
}
