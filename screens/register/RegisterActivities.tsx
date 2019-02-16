import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Headline, Text } from 'react-native-paper'
import { NavigationScreenProp } from 'react-navigation'
import activities from '../../data/activities.json'
import TwoColumnList from '../../shared/TwoColumnList'

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

        <TwoColumnList items={activities} />
      </View>
    )
  }
}

const styles = StyleSheet.create({

})
