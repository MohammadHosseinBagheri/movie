import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home/Home';
import Profile from './Profile/Profile';
import Icon from 'react-native-vector-icons/Ionicons';
import Description from './Description/Description';

const TabBar = createBottomTabNavigator();
const Stack = createStackNavigator();
var options = (name) => () => ({
  title: name,
  headerStyle: {backgroundColor: '#EEEEEE'},
  headerTitleStyle: {
    textAlign: 'center',
    fontSize: 13,
  },
});

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen component={Home} name="Home" options={options('Home')} />
      <Stack.Screen
        component={Description}
        name="Description"
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Profile}
        name="Profile"
        options={options('Profile')}
      />
    </Stack.Navigator>
  );
};
const TabBarConfig = () => {
  return (
    <TabBar.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        labelStyle: {textTransform: 'capitalize', fontSize: 14},
      }}>
      <TabBar.Screen name="Home" component={HomeStack} />
      <TabBar.Screen name="Profile" component={ProfileStack} />
    </TabBar.Navigator>
  );
};

const ConfigRoutes = () => {
  return (
    <NavigationContainer>
      <TabBarConfig />
    </NavigationContainer>
  );
};

export default ConfigRoutes;
