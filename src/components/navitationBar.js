import React, {Component} from 'react';
import {
    Text,
    StyleSheet,
    View,
    Image,
    TouchableHighlight
} from 'react-native';

const btnvoltar = require('../imgs/btn_voltar.png');


export default class NavigationBar extends Component{
  render(){

      if(this.props.voltar){
        return(
        <View style={[styles.titleBar, {backgroundColor: this.props.backgroundColor }]}>
        <TouchableHighlight
            underlayColor= {this.props.backgroundColor}
            activeOpacity={0.7} 
            onPress={() => {
              this.props.navigator.pop();
            }}
            >
            <Image style={ styles.btnVoltar} source={btnvoltar}></Image>
        </TouchableHighlight>
            
            <Text style={styles.txtTitle}>PALOOZA PIZZARIA</Text>
        </View>
        );
      }
    return(
        <View style={styles.titleBar}>
        <Text style={styles.txtTitle}>A MELHOR PIZZA DA REGIÃO</Text>
            
        </View>
    );
  }
}

const styles = StyleSheet.create({
    titleBar: {
      backgroundColor: '#c73c3c',
      padding: 10,
      height: 50,
      flexDirection: 'row',
    },
    txtTitle: {
      flex: 1,
      fontSize: 18,
      color: '#fff',
      fontWeight: 'bold',
      textAlign: 'center',
     
    },

    btnVoltar: {
      width: 50,
      height: 50,
      
    }
   
  });
