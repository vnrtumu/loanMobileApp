import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

import Icon from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';

import Entypo from 'react-native-vector-icons/Entypo';
// import Icon from 'react-native-vector-icons/FontAwesome5';

import NewApplication from '../screens/NewApplication';
import OldApplication from '../screens/OldApplication';
import EmployeeProfile from '../screens/EmployeeProfile';
import DetailsScreen from '../screens/DetailsScreen';


const NewNavigator = createStackNavigator({
  Home: {
    screen: NewApplication,
    navigationOptions: {
      headerTitle: 'New Applications',
      headerTitleStyle: {
        textAlign: 'center',
        flex: 1,
      },
      headerLeft: null,
      headerStyle: { 
        backgroundColor: 'white',
      },
      headerTintColor: 'black',
    },
  },

  Details: {
    screen: DetailsScreen,
    navigationOptions: {
      headerTitleStyle: {
        textAlign: 'center',
        flex: 1,
      },
      headerStyle: {
        backgroundColor: 'red',
      },
      headerTintColor: 'black',
    },
  },
},
{
  initialRouteName: 'Home',
}
);


const OldNavigator = createStackNavigator({
    Home: {
      screen: OldApplication,
      navigationOptions: {
        headerTitle: 'Old Applications',
        headerLeft: null,
        headerTitleStyle: {
          textAlign: 'center',
          flex: 1,
        },
        headerStyle: {
          backgroundColor: 'white',
        },
        headerTintColor: 'black',
      },
    },
  
    Details: {
      screen: DetailsScreen,
      navigationOptions: {
        headerTitleStyle: {
          textAlign: 'center',
          flex: 1,
        },
        headerStyle: {
          backgroundColor: 'white',
        },
      },
    },

},
{
  initialRouteName: 'Home',
}

);


const tabScreenConfig = {
  Departments: {
    screen: NewNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <Fontisto name="nav-icon-grid" size={24} style={{color: '#fff'}} />
        );
      },
      tabBarColor: '#15549a',
      tabBarLabel: 'New Applications',
    },
  },
  BookMarks: {
    screen: OldNavigator,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => {
        return <Icon name="bookmark" size={24} style={{color: '#fff'}} />;
      },
      tabBarColor: '#15549a',
      tabBarLabel: 'Old Application',
      
    },
  },
  Profile: {
    screen: EmployeeProfile,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({tintColor}) => {
        return <Icon name="user" size={24} style={{color: '#fff'}} />;
      },
      tabBarColor: '#15549a',
    },
  },
};

const LdfslTabNavigator = createMaterialBottomTabNavigator(tabScreenConfig, {
  activeTintColor: '#000',
  inactiveColor: '#3e2465',
  shifting: true,
  barStyle: {
    backgroundColor: '#008000',
  },
});

export default createAppContainer(LdfslTabNavigator);
