import React, {Component} from 'react';
import {View, Text} from 'react-native';
import NewItem from './newItem';
export default class New extends Component {
  render() {
    return (
      <View style={{padding: 50}}>
        <Text>HELLO TIN TUC</Text>
        <NewItem />
      </View>
    );
  }
}
