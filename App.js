import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight} from 'react-native';
//import {styles} from './src/stylesheet/Sheet';
import CustomPasswordTextInput from './src/components/CustomPasswordTextInput';
export default class App extends Component {

constructor(){
super()
}



  render() {
    return (

      <CustomPasswordTextInput text={'Password112'} onChangeText={this.textPressed} alternateStateBackgroundColor={'rgba(255,0,0,0.4)'}/>
    );
  }
  textPressed = text =>{

    console.log(text);
  }

}
