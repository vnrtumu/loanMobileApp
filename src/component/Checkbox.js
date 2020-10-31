import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet} from 'react-native';

export default class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {isCheck: false};
  }

  checkClicked = async () => {
    await this.setState(prevState => ({
      isCheck: !prevState.isCheck,
    })); 
    this.props.clicked && this.props.clicked(this.props.value, this.state.isCheck);
  }

  render() {
    return (
      <TouchableOpacity onPress={this.checkClicked} style={this.props.style}>
        <View style={styles.container}>
            <View style={{
            height: 24,
            width: 24,
            borderWidth: 2,
            borderColor: '#000',
            alignItems: 'center',
            justifyContent: 'center', 
            }}>
            <View style={{
                height: 12,
                width: 12,
                backgroundColor: this.state.isCheck ? '#000' : '#FFF',
            }} />

            
            </View>
            <Text style={styles.checkboxText}> DocMent Number 1</Text>
        </View>
      </TouchableOpacity>

      
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 5
    },
    checkboxText: {
        marginLeft: 8,
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
    },

});