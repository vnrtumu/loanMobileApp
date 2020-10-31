/* eslint-disable react-native/no-inline-styles */
/* eslint-disable handle-callback-err */
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import CardOptions from '../component/CardOptions';
import Icon from 'react-native-vector-icons/Fontisto';
import ImagePicker from 'react-native-image-picker';
import {NavigationEvents} from 'react-navigation';

export default class ProfileScreen extends Component {
  state = {
    email: 'Vnr.tumu@gmail.com',
    name: 'venkat Reddy',
    ImageSource: null,
    isLoading: true,
  };

  render() {
    return (
      <ScrollView
        style={styles.mainContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.prrileContainer}>
          <View style={styles.photoContainer}>
              <Image
                source={require('../assets/pic.jpeg')}
                style={styles.profileImg}
              />
            <View style={styles.uploadIconContainer}>
              <TouchableOpacity >
                <Icon
                  name="camera"
                  size={25}
                  color="#15549a"
                  style={styles.uploadIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.nameContainer}>
            <Text style={styles.textStyle}>{this.state.name}</Text>
          </View>
        </View>
        <View style={styles.settingsContainer}>
          <CardOptions
            title={this.state.email}
            icon="envelope"
            style={styles.cardOptions}
          />
          <CardOptions
            title="Change Password"
            icon="gear"
            style={styles.cardOptions}
          />
          <CardOptions
            title="FeedBack"
            icon="feed"
            style={styles.cardOptions}
          />
          <CardOptions
            title="Log Out"
            icon="sign-out"
            style={styles.cardOptions}
            onSelect={() =>
              this.props.navigation.navigate({routeName: 'Login'})
            }
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  prrileContainer: {
    height: 250,
    width: '100%',
    backgroundColor: '#15549a',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  photoContainer: {
    backgroundColor: 'white',
    width: 120,
    height: 120,
    borderRadius: 60,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 28,
  },
  profileImg: {
    height: 120,
    width: 120,
    borderRadius: 60,
    position: 'absolute',
  },
  nameContainer: {
    marginTop: 175,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    alignSelf: 'center',
  },
  uploadIconContainer: {
    marginTop: 90,
    marginLeft: 90,
    height: 40,
    width: 40,
    borderRadius: 50,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  uploadIcon: {
    color: 'black',
    alignSelf: 'center',
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 20,
    fontStyle: 'italic',
    color: 'white',
    alignSelf: 'center',
  },
  locationTextStyle: {
    textAlign: 'center',
    fontSize: 15,
    color: 'white',
    alignSelf: 'center',
  },
  settingsContainer: {
    marginVertical: 25,
    marginHorizontal: 20,
  },
  cardOptions: {
    marginVertical: 10,
    padding: 8,
  },
});
