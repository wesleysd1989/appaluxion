import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import iconHome from '../assets/ic_home.png';
import iconDetail from '../assets/ic_white_close.png';
import iconProfile from '../assets/ic_black_close.png';

import { Detail, Home, Profile } from '../pages';

const Router = createNativeStackNavigator();

const Routes = () => {
  const navigation = useNavigation();

  const defaultOptions = {
    headerShadowVisible: false,
    headerTitleAlign: 'center',
    title: null,
  };

  return (
    <Router.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitleStyle: {
          fontFamily: 'MuseoSans-500',
          fontWeight: 'bold',
          lineHeight: 28,
          fontSize: 24,
        },
        headerStyle: {
          backgroundColor: 'transparent',
        },
      }}
    >
      <Router.Screen
        name="Detail"
        component={Detail}
        options={{
          headerLeft: () => (
            <TouchableOpacity onPress={navigation.goBack}>
              <Image
                source={iconDetail}
                style={{ width: 37, height: 37, marginLeft: 12 }}
              />
            </TouchableOpacity>
          ),
          ...defaultOptions,
          headerTransparent: true,
        }}
      />
      <Router.Screen
        name="Home"
        component={Home}
        options={{
          headerLeft: () => (
            <Image
              source={iconHome}
              style={{ width: 25, height: 12, marginLeft: 12 }}
            />
          ),
          ...defaultOptions,
          title: 'Discover',
        }}
      />
      <Router.Screen
        name="Profile"
        component={Profile}
        options={{
          headerLeft: () => (
            <TouchableOpacity onPress={navigation.goBack}>
              <Image
                source={iconProfile}
                style={{ width: 37, height: 37, marginLeft: 12 }}
              />
            </TouchableOpacity>
          ),
          ...defaultOptions,
        }}
      />
    </Router.Navigator>
  );
};

export default Routes;
