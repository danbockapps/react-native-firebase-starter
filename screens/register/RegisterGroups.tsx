import React from 'react'
import { NavigationScreenProp } from 'react-navigation'
import groups from '../../data/groups.json'
import RegisterTemplate from './RegisterTemplate'

interface RegisterGroupsProps {
  navigation: NavigationScreenProp<any, any>
}

export default class RegisterGroups extends React.Component<RegisterGroupsProps> {
  public render() {
    return (
      <RegisterTemplate
        headline='Groups'
        onPrevButtonPress={() => this.props.navigation.navigate('RegisterActivities')}
        onNextButtonPress={() => this.props.navigation.navigate('SignUp')}
        description='Help us find your people.'
        listItems={groups}
      />
    )
  }
}
