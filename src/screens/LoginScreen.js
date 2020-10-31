import React, { Component } from "react";

import {Keyboard, Text, View, 
        TextInput, TouchableWithoutFeedback, 
        Alert, KeyboardAvoidingView,
        ImageBackground, StyleSheet
    } from 'react-native';
import { Button } from 'react-native-elements';
import { TouchableOpacity } from "react-native-gesture-handler";

const appId = "1047121222092614"

export default class LoginScreen extends Component {
    onLoginPress= () => {
        this.props.navigation.navigate('Home');
    }
  render() {
    return (
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">
        <ImageBackground source={require("../assets/back.jpg")} style={styles.image}>
          <View style={styles.dummyContainer}></View>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                
                <View style={styles.loginScreenContainer}>
                    <View style={styles.loginFormView}>
                        <Text style={styles.logoText}>LDFSL Employee Login</Text>
                        <TextInput placeholder="Employee  Email" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
                        <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true}/>
                        
                        <TouchableOpacity style={styles.loginButton} onPress={() => this.onLoginPress()}>
                            <Text style={styles.btnText}>Login</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </TouchableWithoutFeedback>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
    containerView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    dummyContainer: {
        flex: 1,
        height: '55%',
    },
    loginScreenContainer: {
        flex: 2,
        alignContent: 'flex-end',
        height: '40%',
    },
    logoText: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 150,
        marginBottom: 30,
        textAlign: 'center',
        color: '#fff',
    },
    loginFormView: {
        flex: 1
    },
    loginFormTextInput: {
        height: 43,
        fontSize: 14,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#eaeaea',
        backgroundColor: '#fafafa',
        paddingLeft: 10,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 5,
        marginBottom: 5,
    },
    loginButton: {
        backgroundColor: '#3897f1',
        borderRadius: 5,
        height: 45,
        margin: 10,
        justifyContent: 'center'

    },
    btnText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
    },
});


