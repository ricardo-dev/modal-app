import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class Header extends Component {
  render(){
    return(
      <View style={{
        height:58,
        backgroundColor: '#d2d2d2',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'center',
        marginBottom:2,
        borderBottomColor:'#d3d3d3',
        borderBottomWidth:0.6,
        elevation:1,
        shadowColor:'#000',
        shadowOpacity:0.8,
        shadowOffset: {width: 0, height: 2},
      }}>
          <Text style={{
            color:'#000',
            fontSize:18,
          }}>Meu App</Text>
      </View>
    );
  }
}
