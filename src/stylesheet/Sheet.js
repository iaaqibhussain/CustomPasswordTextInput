import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0)',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: (Platform.OS === 'ios') ? 40 :  10,
    margin: 10,
    height: 40,
    padding: 5
  },
  textInputHolder:{
    flex:4
  },
  textHolder:{
    flex:1 ,
    justifyContent: 'flex-end' ,
    alignItems: 'flex-end' ,
    backgroundColor: 'transparent'
  },
  textInputStyle:{
    color: '#000',
    fontSize : 12,
    height: 40
  }

});
