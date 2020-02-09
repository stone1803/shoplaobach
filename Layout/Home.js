import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
const Home = ({navigation}) => {
  const [anVat, setAnVat] = useState([
    {
      title: 'Khô gà Lão Bach',
      des: 'Khô gà nhà làm ngon tuyệt luân',
      gia: 50000,
      hinhAnh: require('../img/khoga.jpg'),

      id: 1,
    },
    {
      title: 'Đậu Phộng Lão Bạch',
      des: 'Được nhập từ Hà Nội chính nhà ẩm ướt ăn hoặc uống bia rất ngon',
      gia: 20000,
      hinhAnh: require('../img/dauphong.jpg'),
      id: 2,
    },
    {
      title: 'Chả lụa Lão Bạch',
      des: 'Được nhập thương hiệu chả lụa 50 năm nổi tiếng nhất sài gòn',
      gia: 7000,
      hinhAnh: require('../img/chalua.jpg'),
      id: 3,
    },
    {
      title: 'Khô Bò Lão Bạch',
      des: 'Được nhập thương hiệu chả lụa 50 năm nổi tiếng nhất sài gòn',
      gia: 7000,
      hinhAnh: require('../img/khobo.jpg'),
      id: 4,
    },
  ]);
  const [phongThuy, setPhongThuy] = useState([
    {
      title: 'Mặt Phật Di Lặc Chế Tác Từ Đá Thiên Nhiên',
      des:
        'Di Lặc -biểu tượng tuyệt đối của hạnh phúc trong phong thủy. Ngài là vị Phật thứ 5 xuất hiện trên Trái Đất. Là vị Phật đã đạt được giác ngộ hoàn toàn, giảng dạy Phật Pháp, giáo hóa chúng sinh, và chứng ngộ thành Phật.',
      gia: 850000,
      hinhAnh: require('../img/dilac.jpg'),

      id: 1,
    },
    {
      title: 'Mèo Thần tài sứ Vẫy tay Hũ vàng 25cm ',
      des: 'Mèo Thần tài Vẫy tay bằng pin hoặc cắm điện dây đi kèm Mèo bằng sứ chất lượng cao, màu sắc cầu kì, màu nung không phai',
      gia: 20000,
      hinhAnh: require('../img/meothantai.jpg'),
      id: 2,
    },
    {
      title: 'ĐỒNG TIỀN NGŨ PHÚC MAY MẮN',
      des: 'Đây gọi là ĐỒNG TIỀN NGŨ PHÚC MAY MẮN',
      gia: 7000,
      hinhAnh: require('../img/dongxu.jpg'),
      id: 3,
    },

  ]);

  let dimensions = Dimensions.get('window');
  let imageHeight = Math.round((dimensions.width * 9) / 16);
  let imageWidth = dimensions.width;
  return (
    <View style={styles.container}>
      <Text style={{paddingLeft: 10}}>Ăn vặt</Text>
      <FlatList
        horizontal={true}
        style={{height: imageHeight, width: imageWidth}}
        data={anVat}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('Chi Tiết Sản Phẩm', item)}>
            <Image
              source={item.hinhAnh}
              style={{
                alignItems: 'center',
                width: 150,
                height: 150,
                alignSelf: 'center',
                marginTop: 10,
                borderRadius: 100,
              }}
            />
            <Text style={styles.item}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
      <Text style={{paddingLeft: 10}}>Vật Phẩm Phong Thủy</Text>
      <FlatList
        horizontal={true}
        style={{height: imageHeight, width: imageWidth}}
        data={phongThuy}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('Chi Tiết Sản Phẩm', item)}>
            <Image
              source={item.hinhAnh}
              style={{
                alignItems: 'center',
                width: 150,
                height: 150,
                alignSelf: 'center',
                marginTop: 10,
                borderRadius: 100,
              }}
            />
            <Text style={styles.item}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#F5FCFF',
  },
  item: {
    flex: 1,
    backgroundColor: 'orange',
    margin: 10,
    textAlign: 'center',
    fontSize: 20,
    borderRadius: 15,
  },
});
