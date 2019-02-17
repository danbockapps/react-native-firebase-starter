import React from 'react'
import { NavigationScreenProp } from 'react-navigation'
import activities from '../../data/activities.json'
import RegisterTemplate from './RegisterTemplate'

interface RegisterActivitiesProps {
  navigation: NavigationScreenProp<any, any>
}

export default class RegisterActivities extends React.Component<RegisterActivitiesProps> {
  public render() {
    return (
      <RegisterTemplate
        headline='Activities'
        onPrevButtonPress={() => this.props.navigation.navigate('Login')}
        onNextButtonPress={() => this.props.navigation.navigate('RegisterGroups')}
        description='What do you like to do?'
        listItems={activities}
      />
    )
  }
}
