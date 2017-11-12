import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight} from 'react-native';
import PropTypes from 'prop-types';

import {styles} from '../stylesheet/Sheet';
export default class CustomPasswordTextInput extends Component {
/**
Button Show State Title
*/
//onShowTitle
/**
Button Hide State Title
*/
//onHideTitle
/**
PlaceHolder Text
*/
//this.props.placeholder
/**
Text Color and Font Size
*/
textInputStyle
/**
Placeholder TextColor
*/
//this.props.placeholderColor
/**
Normal Style; includes Background and Border Color
*/
normalStyle
/**
Alternate Style; includes Background and Border Color
*/
alternateStyle
/**
Default height
*/
//this.props.height

constructor(props){
super(props)
console.log(props.text);
this.setup()
}
setup(){

//  onShowTitle = this.props.onShowTitleText || 'SHOW'
//  onHideTitle = this.props.onHideTitleText || 'HIDE'
//  this.props.height = this.props.height || 40
//  this.props.placeholderColor = this.props.this.props.placeholderColor
//  this.props.placeholder = this.props.placeHolder || 'Password'
  normalStyle = {borderColor: this.props.normalStateBorderColor , backgroundColor: this.props.normalStateBackgroundColor, height: this.props.height}
  alternateStyle = { borderColor: this.props.alternateStateBorderColor , backgroundColor: this.props.alternateStateBackgroundColor, height: this.props.height}
  var textStyle = {color: this.props.textColor, fontSize:this.props.fontSize, height: this.props.height}
  textInputStyle = StyleSheet.flatten([styles.textInputStyle,textStyle])


  this.state = { buttonTitle: this.props.onShowTitleText,
    isSecure: true,
    text: this.props.text,
    style: StyleSheet.flatten([styles.container, normalStyle])

  }

}

  render() {
    return (
      <View style={this.state.style}>
      <View style={styles.textInputHolder}>
        <TextInput style={textInputStyle} value={this.state.text} onChangeText={this.onTextChange} placeholder={this.props.placeholder} underlineColorAndroid={'transparent'} placeholderColor={this.props.placeholderColor} secureTextEntry={this.state.isSecure}/>
      </View>
      <View style={styles.textHolder}>
        <Text onPress={this.onPress} suppressHighlighting={true}> {this.state.buttonTitle}</Text>
      </View>
      </View>
    );
  }

  /**
  On Text Changed Function
  */
  onTextChange = value =>{
    this.setState({text:value})

    this.props.onChangeText(value)
  }

  /**
  On Button State Changed Function
  */
  onPress = () => {

    this.setState({buttonTitle: this.state.buttonTitle == this.props.onShowTitleText ? this.props.onHideTitleText : this.props.onShowTitleText,
      isSecure: !this.state.isSecure,
      style: this.state.buttonTitle == this.props.onShowTitleText ? StyleSheet.flatten([styles.container, alternateStyle]) : StyleSheet.flatten([styles.container, normalStyle])
     })

  }
}

CustomPasswordTextInput.propTypes = {
  onShowTitleText: PropTypes.string,
  onHideTitleText: PropTypes.string,
  placeholderColor: PropTypes.string,
  height: PropTypes.number,
  normalStateBorderColor: PropTypes.string,
  alternateStateBorderColor: PropTypes.string

};
CustomPasswordTextInput.defaultProps = {
  onShowTitleText: 'SHOW',
  onHideTitleText:  'HIDE',
  placeholder: 'Password',
  height: 40,
  normalStateBorderColor: '#000',
  alternateStateBorderColor: 'rgba(255,0,0,1)'

};
