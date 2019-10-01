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
const detalhe_bebidas = require('../imgs/detalhe_bebidas.png');


export default class BebidasScene extends Component {
  render(){
    return(
    <View style={ styles.mainView}>
      <StatusBar
       // hidden={false}
      
      />      

        <NavigationBar voltar navigator={this.props.navigator} backgroundColor= '#c73c3c'/>

    <ScrollView>
        <View style= { styles.header }>
            <Image  source={detalhe_bebidas}/>
            
        </View>
        
        <View  /* Conteiner de um tipo de bebida */ style= { styles.wrapViews }>
        <View>
        <Image  style= { styles.imgCoca } source={ require ( '../imgs/coca_fanta_2l.png' )}/>
        </View>
        <View style= { styles.menuHeader }>    
        <Text style= { styles.txtTitulo}> COCA-COLA E FANTA 2 L</Text>
        <Text style= { styles.txtPreco}> R$ 8,00</Text> 
            </View>
        
            </View>

            <View  /* Conteiner de um tipo de bebida */ style= { styles.wrapViews }>
        <View>
        <Image  style= { styles.imgPepsi } source={ require ( '../imgs/sukita_kuat_pepsi_2l.png' )}/>
        </View>
        <View style= { styles.menuHeader }>    
        <Text style= { styles.txtTitulo}> SUKITA - KUAT - PEPSI 2 L</Text>
        <Text style= { styles.txtPreco}> R$ 6,50</Text> 
            </View>
        
            </View>

            <View  /* Conteiner de um tipo de bebida */ style= { styles.wrapViews }>
        <View>
        <Image  style= { styles.imgLata } source={ require ( '../imgs/refri_lata.png' )}/>
        </View>
        <View style= { styles.menuHeader }>    
        <Text style= { styles.txtTitulo}> REFRI LATA</Text>
        <Text style= { styles.txtPreco}> R$ 3,50</Text> 
        
            </View>
        
            </View>

            
        
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

    wrapViews: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },

    menuHeader: {
        flex: 1,
        marginTop: 30,
        marginLeft: 20,
        alignItems:'center',
        
    },

    imgCoca: {
        width: 120,
        height: 140,
        
    },

    imgPepsi: {
        width: 120,
        height: 120,
        
    },

    imgLata: {
        width: 160,
        height: 120,
        
    },

    txtTitulo: {
        justifyContent: 'center'
,        fontSize: 16,
        color: '#c73c3c',
        fontWeight: 'bold',
    },

    txtPreco: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold',
    }




    

});