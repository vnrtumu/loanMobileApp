import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableNativeFeedback,
  Button,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import Icon from "react-native-vector-icons/Ionicons";
import Icon from 'react-native-vector-icons/Ionicons';

const Contact = props => {
  return (
    <TouchableNativeFeedback onPress={props.onSelect}>
      <View style={styles.mainContainer}>
          <View style={styles.card}>
            <View style={styles.imageContainer}>
              <Image source={require('../assets/pic.jpeg')} style={styles.imageStyle} />
            </View>
            <View style={styles.cardViewTextStyle}>
              <Text style={styles.cardTextStyle}> {props.title} </Text>
              <Text style={styles.address}>Address</Text>
            </View>
          </View>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  mainContainer:{
    flex: 1,
  },
  card: {
    flexDirection: 'row',
    marginVertical: 10,
    width: 350,
    height: 130,
    shadowColor: 'black',
    shadowOffset: {width: 2, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    elevation: 10,
  },
  imageContainer: {
    justifyContent: 'flex-start',
    width: '30%',
  },
  imageStyle: {
    borderRadius: 50,
    width: 100,
    height: 100,
    marginLeft: 10,
    opacity: 0.9,
  },
  cardViewTextStyle: {
    justifyContent: 'flex-end',
    marginLeft: 10,
    width: '70%',
  },
  cardTextStyle: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
  },
  address:{
    color: 'black', 
    marginLeft: 10, 
    fontSize: 16,
  },
  iconContainer:{
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: "flex-start",
    marginRight: 20,
  },
  iconStyle:{
    margin: 10,
  },
  checkBtn:{
    justifyContent: 'center',
    alignItems:'center',
    alignSelf: 'center',
    backgroundColor: '#4285F4',
    margin: 10,
    borderRadius:5,
  },
  btnText:{
    color: 'white',
    padding: 8,
  }
});

export default Contact;