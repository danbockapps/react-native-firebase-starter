import React from 'react'
import { ScrollView, View } from 'react-native'
import { Text } from 'react-native-paper'
import Selectable from './Selectable'

interface TwoColumnListProps {
  items: string[]
}

export default class TwoColumnList extends React.Component<TwoColumnListProps> {
  public render() {
    return (
      <ScrollView>
        <View style={[{ flexDirection: 'row', flexWrap: 'wrap' }]}>
          {this.props.items.map((prop: string, key: number) => {
            return (
              <Selectable key={key}>
                <Text>{prop}</Text>
              </Selectable>
            )
          })}
        </View>
      </ScrollView>
    )
  }
}
