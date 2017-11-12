# Usage
First clone or download the project then run. 

```
npm install
```
So that node_modules is installed. After that run

```
npm run ios 
or
npm run android
```

Using the Component.

```
  render() {
    return (

      <CustomPasswordTextInput />
    );
  }
```

# Props
## text
```
text = {'Password112'}
```
For setting text initially to text input.

## onChangeText
```
onChange = { text => console.log(text)}
```
When text is being changed.

## alternateStateBackgroundColor
```
alternateStateBackgroundColor = {'rgba(255,0,0,0.4)'}
```
When TextInput is in Show state.

## alternateStateBorderColor
```
alternateStateBorderColor = {'rgba(255,0,0,0.4)'}
```
When TextInput is in Show state.


## normalStateBackgroundColor
```
normalStateBackgroundColor = {'#fff'}
```
When TextInput is in normal state

## normalStateBorderColor
```
normalStateBorderColor = {'#000'}
```
When TextInput is in normal state

## onShowTitleText
```
onShowTitleText = {'Your Title'}
```
By default Title is 'SHOW'.

## onHideTitleText
```
onHideTitleText = {'Your Title'}
```
Default Title is 'HIDE'.

## placeholder
```
placeholder = {'Your Placeholder'}
```
Default placeholder is Password

## placeholderTextColor
```
placeholderTextColor = {'#0ff'}
```
Sets the color for the placeholderText of TextInput

## textColor
```
textColor = {'#0ff'}
```
Sets the color for the text of TextInput

## fontSize
```
fontSize = {'14'}
```
Default fontSize is 12.

## height
```
height = {50}
```
Sets the height of the CustomPasswordTextInput, default is 40.

<hr>

## Android Screenshot
![alt tag](https://github.com/iaaqib/CustomPasswordTextInput/blob/master/Screenshots/android-customtextinput.png)

<hr>

## iOS Screenshot
![alt tag](https://github.com/iaaqib/CustomPasswordTextInput/blob/master/Screenshots/ios-customtextinput.png)

<hr>

This project was developed using [Create React Native App](https://github.com/react-community/create-react-native-app).

<hr>

## Demo

Check out the demo [here](https://expo.io/@iaaqibhussain/custompasswordtextinput).
