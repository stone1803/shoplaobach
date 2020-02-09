import {View, Text, Image, Button, Alert} from 'react-native';
import {Shapes} from 'react-native-background-shapes';

import React, {Component} from 'react';

export default class DetailsScreen extends Component {
  render() {
    let {route, navigation} = this.props;
    return (
      <View>
        <Shapes
          primaryColor="orange"
          secondaryColor="#2F53D5"
          height={3}
          borderRadius={20}
          figures={[
            {name: 'circle', position: 'center', size: 60},
            {name: 'donut', position: 'flex-start', axis: 'top', size: 80},
            {name: 'circle', position: 'center', axis: 'right', size: 100},
          ]}
        />
        <Image
          style={{width: 200, height: 200, alignSelf: 'center', marginTop: 10}}
          source={route.params.hinhAnh}
        />
        <Text style={{textAlign: 'center', fontSize: 30, marginTop: 10}}>
          {route.params.title}
        </Text>

        <Text
          style={{
            textAlign: 'left',
            fontSize: 20,
            marginTop: 10,
            paddingLeft: 10,
          }}>
          {route.params.des}
        </Text>
        <Text
          style={{
            textAlign: 'right',
            fontSize: 20,
            marginTop: 10,
            marginBottom: 10,
            paddingLeft: 10,
            borderBottomWidth: 1,
          }}>
          {route.params.gia} VND
        </Text>
        <Button
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
          title="Đặt Mua"
          onPress={() => Alert.alert('Đã thêm vào giỏ hàng')}
        />
      </View>
    );
  }
}
