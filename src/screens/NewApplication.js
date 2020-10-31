/* eslint-disable react-native/no-inline-styles */
/* eslint-disable handle-callback-err */
import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  AsyncStorage,
  ActivityIndicator,
  Text,
  ScrollView,
} from 'react-native';
import Contact from '../component/Contact';


class NewApplication extends Component {
  render() {
    return (
      <ScrollView style={styles.scrollView}>
          <View style={styles.screen}>
            <Contact title="Testing mode" onSelect={() => {this.props.navigation.navigate('Details', {
                      profileName: "Venkat Reddy",
                    }); 
             }}/>
            <Contact title="Testing 1" onSelect={() => {this.props.navigation.navigate('Details', {
                      profileName: "Venkat Reddy",
                    });
            }} />
            <Contact title="Testing 2" onSelect={() => {this.props.navigation.navigate('Details', {
                      profileName: "Venkat Reddy",
                    }) 
            }} />
            <Contact title="Testing 3" onSelect={() => {this.props.navigation.navigate('Details', {
                      profileName: "Venkat Reddy",
                    }); 
            }} />
            <Contact title="Testing 4" onSelect={() => {this.props.navigation.navigate('Details', {
                      profileName: "Venkat Reddy",
                    });
            }} />
          </View>
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default NewApplication;
