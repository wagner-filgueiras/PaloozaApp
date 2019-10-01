import React, {Component} from 'react';
import {
    StatusBar,
    View,
    Image,
    StyleSheet,
    Text,
    ScrollView
} from 'react-native';

//Import Navigation Bar component
import NavigationBar from './navitationBar';
import MenuHeader from './MenuHeader';
import PizzasDetalhes from './PizzasDetalhes';

// Images Import
const detalhe_pizzas = require('../imgs/detalhe_pizzas.png');

export default class PizzaScene extends Component {
  render(){
    return(
    <View style={ styles.mainView}>
      <StatusBar
       // hidden={false}
       
      />      

        <NavigationBar voltar navigator={this.props.navigator} backgroundColor = '#c73c3c'/>

    <ScrollView>
        <View style= { styles.header }>
            <Image source={detalhe_pizzas}/>
            
        </View>

        <MenuHeader></MenuHeader>
        <PizzasDetalhes></PizzasDetalhes>

    </ScrollView>
    </View>
    );
  }
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: '#fff'
    },
    header: {
        alignSelf: 'center',
        flexDirection: 'row',
        marginTop: 20,
    },
    menuHeader: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 10,
        marginTop: 10,

    },
    menuSizes: {
        flexDirection: 'row',
               
    },

    menuSabores: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    menuSizeNumb: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingLeft: 120,
    },

    txtDetail: {
        fontSize: 16,
        marginLeft: 15,

    },
    
    txtSabores: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    txtSizes: {
        fontSize: 12,
    }


});