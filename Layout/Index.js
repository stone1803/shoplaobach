import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home';
import DetailsScreen from './DetailsScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {MaterialCommunityIcons} from 'react-native-vector-icons';
import New from '../Layout/components/News/new';
import NewItem from '../Layout/components/News/newItem';

// ---------------------------->
const Tab = createMaterialBottomTabNavigator();
const SettingsStack = createStackNavigator();
const HomeStack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        activeColor="black"
        labelStyle={{fontSize: 20}}
        style={{backgroundColor: '#4caf50'}}
        barStyle={{backgroundColor: 'orange'}}>
        <Tab.Screen name="Trang Chủ">
          {() => (
            <SettingsStack.Navigator>
              <SettingsStack.Screen
                name="Shop Lão Bạch"
                component={Home}
                options={{
                  title: 'LAOBACH.COM',
                  headerStyle: {
                    backgroundColor: 'orange',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                }}
              />
              <Tab.Screen name="Chi Tiết Sản Phẩm" component={DetailsScreen} />
            </SettingsStack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen name="Tin Tức">
          {() => (
            <SettingsStack.Navigator>
              <SettingsStack.Screen
                name="Tin Tuc"
                component={New}
                name="Shop Lão Bạch"
                component={New}
                options={{
                  title: 'Tin tức',
                  headerStyle: {
                    backgroundColor: 'orange',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                }}
              />
              <Tab.Screen name="NewItem" component={NewItem} />
            </SettingsStack.Navigator>
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
