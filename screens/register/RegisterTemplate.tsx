import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Headline, Text } from 'react-native-paper'
import TwoColumnList from '../../shared/TwoColumnList'
import { commonStyles } from '../../styles/Theme'

interface RegisterTemplateProps {
  headline: string
  onPrevButtonPress: () => any
  onNextButtonPress: () => any
  description: string
  listItems: string[]
}

export default class RegisterActivities extends React.Component<RegisterTemplateProps> {
  public render() {
    return (
      <View>
        <View style={styles.navBar}>
          <Button style={commonStyles.flex1} onPress={this.props.onPrevButtonPress}>
            &lt; Prev
          </Button>
          <Headline style={styles.navHeadline}>
            {this.props.headline}
          </Headline>
          <Button style={commonStyles.flex1} onPress={this.props.onNextButtonPress}>
            Next &gt;
          </Button>
        </View>

        <Text style={styles.description}>
          {this.props.description}
        </Text>

        <TwoColumnList items={this.props.listItems} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  description: {
    textAlign: 'center',
  },
  navBar: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 50,
    justifyContent: 'center',
  },
  navHeadline: {
    flex: 4,
    textAlign: 'center',
  },
})
