import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import ArticleScreen from '../screens/ArticleScreen';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null, // ヘッダーに余分な隙間を出さないようにする
    },
  },
  Article: {
    screen: ArticleScreen,
  },
});

export default createAppContainer(AppNavigator);
