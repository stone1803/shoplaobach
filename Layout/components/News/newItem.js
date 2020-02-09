import React, {Component} from 'react';
import {View, Text} from 'react-native';
import NewDetail from './newDetail';
export default class NewItem extends Component {
  render() {
    return (
      <View style={{padding: 50}}>
        <Text>HELLO NEW ITEM</Text>
        <NewDetail />
      </View>
    );
  }
}
