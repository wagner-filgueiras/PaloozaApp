import React, {Component} from 'react';
import {
    StatusBar,
    View,
    Image,
    StyleSheet,
    TouchableHighlight,
    ImageBackground,
    ScrollView,
} from 'react-native';

//Import Navigation Bar component
import NavigationBar from './navitationBar';

// Images Import
const backGround = require('../imgs/background.png');
const logo = require('../imgs/logo_novo.png');
const menu_cliente = require('../imgs/menu_pizzas.png');
const menu_contato = require('../imgs/menu_contato.png');
const menu_empresa = require('../imgs/menu_bebidas.png');
const menu_promo = require('../imgs/menu_promo.png');

export default class MainScene extends Component {
  render(){
    return(
        
    <ScrollView style={ styles.mainView}>
        <StatusBar
       // hidden={false}
       backgroundColor= '#c73c3c'
      />      
        <NavigationBar></NavigationBar>
        
        <ImageBackground source={backGround} style={{width: '100%', height: '100%'}}>   
    <View style= { styles.logo }>
        <Image source={logo} />
    </View>

    <View style= { styles.menu}>
    <View  style= { styles.menuGroup}>
        <TouchableHighlight
            underlayColor= {'#fff'}
            activeOpacity={0.9} 
            onPress= {() => {
            this.props.navigator.push({ id: 'pizza' });
        }}
        >
            <Image style = { styles.imgMenu} source={menu_cliente} />
        </TouchableHighlight>

        
    <TouchableHighlight
            underlayColor= {'#fff'}
            activeOpacity={0.9} 
            onPress= {() => {
            this.props.navigator.push({ id: 'bebidas' });
        }}>
        <Image style = { styles.imgMenu} source={menu_empresa} />
        </TouchableHighlight>
        </View>

        <View  style= { styles.menuGroup}>
        <TouchableHighlight 
            underlayColor= {'#fff'}
            activeOpacity={0.9} 
            onPress= {() => {
            this.props.navigator.push({ id: 'promo' });
        }}
        >
        <Image style = { styles.imgMenu} source={menu_promo} />
        </TouchableHighlight>
      

        <TouchableHighlight 
            underlayColor= {'#fff'}
            activeOpacity={0.9} 
            onPress= {() => {
            this.props.navigator.push({ id: 'contact' });
        }}
        >
        <Image style = { styles.imgMenu} source={menu_contato} />
        </TouchableHighlight>
        

        
    </View>  
    
        
    

      </View>
      </ImageBackground>  
    </ScrollView>
    

    );
  }
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: '#fff'
    },
    logo:  {
        marginBottom: -20,
        alignItems: 'center',
    },
    menu: {
        alignItems: 'center',
    },
    menuGroup: {
        flexDirection: 'row',
    },
    imgMenu: {
        margin: 10,
        borderRadius: 10,
        width: 140,
        height: 150,
    }

});


   
  