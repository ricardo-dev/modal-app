/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform,
  Alert,
  StyleSheet,
  Text, View,
  TouchableOpacity,
  TouchableHighlight} from 'react-native';
import Modal from 'react-native-modal';
import Header from './header';

import Communications from 'react-native-communications';


export default class App extends Component {
  state = {
    modal:false,
  }

  setModalVisible = () => {
    this.setState({modal:!this.state.modal});
  }

  render() {
    return (

        <View style={{
          flex:1,
          alignItems:'center',
          justifyContent:'center',
        }}>
        <Header />
          <Modal isVisible={this.state.modal}
            //animationIn="zoomInDown"
            //animationOut="zoomOutUp"
            animationIn="slideInUp"
            animationOut="slideOutDown"
            animationInTiming={500}
            animationOutTiming={500}
            //backdropColor={'red'}
            backdropOpacity={0.5}
            backdropTransitionInTiming={2500}
            backdropTransitionOutTiming={2500}
            scrollOffsetMax={500 - 200}
            onBackdropPress={
              ()=>{
                this.setState({modal: !this.state.modal})
              }
            }
            style={{ // modal em baixo
              margin:0,
              justifyContent:'flex-end',
            }}
            >
            <View style={{
              backgroundColor:'#fff',
              paddingBottom:5,
              paddingTop:20,
              borderRadius:5,
              justifyContent:'center',
              //alignItems:'center'
            }}>
              <View style={{
                alignItems:'center'
              }}>
                <Text style={{
                  color:'#000',
                  fontWeight:'bold',
                }}>Modal page</Text>
              </View>

              <View style={{
                marginTop:10,
                marginBottom:10,
                marginHorizontal:20,
              }}>
                <Text>
                Seus sonhos profissionais quando colocados no papel, te fazem enxergar o melhor caminho profissional a percorrer e a traçar metas e objetivos concretos para que se alcance o resultado esperado. Neste painel, traremos dicas rápidas e eficientes para que você estabeleça um planejamento de carreira e atinja o tão desejado sucesso.
                </Text>
              </View>

              <TouchableOpacity
                onPress={
                  this.setModalVisible
                }
                style={{
                  backgroundColor: "lightblue",
                  margin: 10,
                  heigth:42,
                  padding:10,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 4,
                  borderColor: "rgba(0, 0, 0, 0.1)"
                }}>
                <Text style={{
                  color:'#fff',
                  fontSize:14,
                }}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </Modal>

          <TouchableOpacity style={{
            marginHorizontal:20,
            padding:10,
            marginVertical:10,
            backgroundColor:'#d3d3d3',

          }}
          onPress={() => Communications.text('+5562995597096','Este é um teste App Ricardo! bjs!')}>
            <Text style={{
              color:'#000'
            }}>Send SMS</Text>
          </TouchableOpacity>

          <Text>Hello Moto!!</Text>
          <TouchableOpacity onPress={
            this.setModalVisible
          }
            style={{
              marginTop:10,
            }}>
            <Text>Abrir modal</Text>
          </TouchableOpacity>
        </View>

    );
  }
}
[[]]
