import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import SplashScreen from '../screens/SplashScreen';
import AppIntroScreen from '../screens/AppIntroScreen';
import LoginScreen from '../screens/LoginScreen';
import BottomTab from './BottomTab';

const AuthNavigator = createStackNavigator({
  Splash: {
    screen: SplashScreen,
    navigationOptions: {
      header: null,
    },
  },
  AppIntro: {
    screen: AppIntroScreen,
    navigationOptions: {
      header: null,
    },
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null,
    },
  },
  Home: {
    screen: BottomTab,
    navigationOptions: {
      header: null,
    },
  },
});

export default createAppContainer(AuthNavigator);
