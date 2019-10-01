import React, {Component} from 'react';
import {
    StatusBar,
    View,
    Image,
    StyleSheet,
    Text,
} from 'react-native';

//Import Navigation Bar component
import NavigationBar from './navitationBar';

// Images Import


export default class MenuPizza extends Component {
  render(){
    return(
    <View style={ styles.mainView}>
      <StatusBar
       // hidden={false}
       
      />      

        <NavigationBar voltar navigator={this.props.navigator} backgroundColor = '#ca4b49'/>

    <View>
        <View style= { styles.header }>
            <Image source={detalhe_pizzas}/>
            
        </View>

        <View style= { styles.clientDetail }>
            <Image source={cliente1}/>
            <Text style= { styles.txtDetail}> Dolor Ipsum</Text>
        </View>

        <View style= { styles.clientDetail }>
            <Image source={cliente2}/>
            <Text style= { styles.txtDetail}> Dolor Ipsum</Text>
        </View>

    </View>

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
        txtHeader: {
        fontSize: 30,
        color: '#c73c3c',
        marginLeft: 10,
        marginTop: 25,
    },
    clientDetail: {
        padding: 20,
        marginTop: 10,
    },
    txtDetail: {
        fontSize: 18,
        marginLeft: 20,
    }



});