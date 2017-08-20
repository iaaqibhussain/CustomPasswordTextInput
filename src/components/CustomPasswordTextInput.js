import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight} from 'react-native';
import {styles} from '../stylesheet/Sheet';
export default class CustomPasswordTextInput extends Component {
/**
Button Show State Title
*/
onShowTitle
/**
Button Hide State Title
*/
onHideTitle
/**
PlaceHolder Text
*/
placeHolderText
/**
Text Color and Font Size
*/
textInputStyle
/**
Placeholder TextColor
*/
placeholderTextColor
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
defaultHeight

constructor(props){
super(props)
console.log(props.text);
this.setup()
}
setup(){

  onShowTitle = this.props.onShowTitleText || 'SHOW'
  onHideTitle = this.props.onHideTitleText || 'HIDE'
  defaultHeight = this.props.height || 40
  placeholderTextColor = this.props.placeholderTextColor
  placeHolderText = this.props.placeHolder || 'Password'
  normalStyle = {borderColor: this.props.normalStateBorderColor , backgroundColor: this.props.normalStateBackgroundColor, height: defaultHeight}
  alternateStyle = { borderColor: this.props.alternateStateBorderColor || 'rgba(255,0,0,1)' , backgroundColor: this.props.alternateStateBackgroundColor, height: defaultHeight}
  var textStyle = {color: this.props.textColor, fontSize:this.props.fontSize, height: defaultHeight}
  textInputStyle = StyleSheet.flatten([styles.textInputStyle,textStyle])


  this.state = { buttonTitle: onShowTitle,
    isSecure: true,
    text: this.props.text,
    style: StyleSheet.flatten([styles.container, normalStyle])

  }

}

  render() {
    return (
      <View style={this.state.style}>
      <View style={styles.textInputHolder}>
        <TextInput style={textInputStyle} value={this.state.text} onChangeText={this.onTextChange} placeholder={placeHolderText} underlineColorAndroid={'transparent'} placeholderTextColor={placeholderTextColor} secureTextEntry={this.state.isSecure}/>
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

    this.setState({buttonTitle: this.state.buttonTitle == onShowTitle ? onHideTitle : onShowTitle,
      isSecure: !this.state.isSecure,
      style: this.state.buttonTitle == onShowTitle ? StyleSheet.flatten([styles.container, alternateStyle]) : StyleSheet.flatten([styles.container, normalStyle])
     })

  }
}
