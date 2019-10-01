import React, {Component} from 'react';
import {
    StatusBar,
    View,
    Image,
    StyleSheet,
    Text,
    Button,
    Linking,
    Alert,
    ScrollView,
} from 'react-native';

//Import Navigation Bar component
import NavigationBar from './navitationBar';

// Images Import
const detalhe_contatos = require('../imgs/detalhe_contato.png');



export default class ContactScene extends Component {
    _pressCall=()=>{
        const url='tel:+553135957427'
        Linking.openURL(url)
    };

    _pressWhats=()=>{
        const url2='tel:+5531988949597'
        Linking.canOpenURL("whatsapp://send?text=oi").then(supported => {
            if (supported) {
              return Linking.openURL(
                "whatsapp://send?phone=5531988949597&text=Olá!"
              );
            } else {
              return (
                Alert.alert(
                    'Instale o Whatsapp para falar com Palooza Pizzas' 
                     
                  )
              )
            }
        }
        )};
          
        
        
    

  
    render(){
    return(           
    <View style={styles.mainView}>
      <StatusBar
       // hidden={false}
       
      />      

        <NavigationBar voltar navigator={this.props.navigator} backgroundColor = '#c73c3c'/>

    
    <ScrollView>
        <View style= { styles.header }>
            <Image source={detalhe_contatos}/>
            
            
        </View>

        <View style= { styles.contactDetail }>
        <Text style={ styles.txtHeader}>Pronto para fazer seu pedido?!</Text>
        <Text style= { styles.txtTel}> Tel: (31) 3595-7427</Text>
        
        <Button title='Ligar' onPress={this._pressCall}/>
        

        <Text style= { styles.txtTel}> Cel: (31) 98894-9597 </Text>
        
        <Button color='#25d366' title='Mensagem via Whatsapp' onPress={this._pressWhats}/>
        
        <Text style= { styles.txtDetail}>Não esqueça de salvar nosso contato!</Text> 
        <Text style= { styles.txtFaceInvite}> Curta nossa página no facebook! </Text>
        <Text style= { styles.txtFace}>facebook.com/paloozapizzaria/</Text>
        
        </View>        

    
    </ScrollView>

    </View>
    );
  }
}

const styles = StyleSheet.create({
    mainView: {
        backgroundColor: '#fff',
        alignItems: 'center',

    },
    header: {
        alignSelf: 'center',
        flexDirection: 'row',
        
    },
    txtHeader: {
        fontSize: 30,
        color: '#ca4b49',        
        marginTop: 30,
        fontWeight: 'bold',
    },
    contactDetail: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        
    },
    txtTel: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 15,

    },

    txtDetail: {
        textAlign: 'center',
    },

    txtEmail: {
        fontSize: 16,
    },

    txtFaceInvite: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#3C5A99',
        marginTop: 15,
    
    },
    
    txtFace: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',

    }

    



});