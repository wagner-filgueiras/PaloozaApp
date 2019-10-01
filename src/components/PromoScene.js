import React, {Component} from 'react';
import {
    StatusBar,
    View,
    Image,
    StyleSheet,
    Text,
    ScrollView,
} from 'react-native';

//Import Navigation Bar component
import NavigationBar from './navitationBar';

// Images Import
const detalhe_promo = require('../imgs/detalhe_promo.png');
const promo_terca = require('../imgs/promo_terca.png');
const promo_quarta = require('../imgs/promo_quarta.png');
const promo_quinta = require('../imgs/promo_quinta.png');
const promo_especial = require('../imgs/promo_especial.png');


export default class PromoScene extends Component {
  render(){
    return(
    <View style={styles.mainView}>
      <StatusBar
       // hidden={false}
       
      />      

        <NavigationBar voltar navigator={this.props.navigator} backgroundColor= '#c73c3c'/>

        <ScrollView>
        <View style= { styles.header }>
            <Image source={detalhe_promo}/>
            
        </View>

        <View style= { styles.contactDetail }>
        <Image source={ promo_terca } style= { styles.imgsPromo }></Image>
        <Image source={ promo_quarta } style= { styles.imgsPromo }></Image>
        <Image source={ promo_quinta } style= { styles.imgsPromo }></Image>
        <Image source={ promo_especial } style= { styles.imgsPromo }></Image>

        </View>        

    </ScrollView>

    </View>
    );
  }
}

const styles = StyleSheet.create({

    imgsPromo: {
        flex: 1,        
        margin: 10,
        


    },
    mainView: {
        backgroundColor: '#fff',
        alignItems: 'center',
        flex: 1,

    },
    header: {
        alignSelf: 'center',
        flexDirection: 'row',
        marginTop: 20,
    },
    txtHeader: {
        fontSize: 30,
        color: '#19D1C8',
        marginLeft: 10,
        marginTop: 40,
    },
    contactDetail: {
        flex: 1,
        padding: 20,
        marginTop: 20,
    },
    txtDetail: {
        fontSize: 18,
        
    },
    txtEmail: {
        fontSize: 16,
    }



});