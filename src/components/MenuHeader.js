import React, {Component} from 'react';
import {
    View,    
    StyleSheet,
    Text,
} from 'react-native';

export default class menuHeader extends Component {
    render(){
      return(
          <View style = { styles.wrapBorder}>
<View style= { styles.menuHeader }>            
<Text style= { styles.txtDetail}> P </Text>
<Text style= { styles.txtDetail}> PP </Text>
<Text style= { styles.txtDetail}> G </Text>
<Text style= { styles.txtDetail}> GG </Text>
</View>

<View style= { styles.menuSizes }>            
<Text style= { styles.txtSizes}> 25cm </Text>
<Text style= { styles.txtSizes}> 30cm </Text>
<Text style= { styles.txtSizes}> 35cm </Text>
<Text style= { styles.txtSizes}> 40cm </Text>
</View>


</View>

   
    );
  }
}

const styles = StyleSheet.create({
    menuHeader: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 10,
        marginRight: 8,
    },

    menuSizes: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 5, 
        marginRight: 5, 
                  
    },  

    txtDetail: {
        fontSize: 16,
        marginLeft: 45,
        fontWeight: 'bold',
        

    },
    
    txtSizes: {
        fontSize: 12,
        marginLeft: 30,
        fontWeight: 'bold',
        

        
        
    }


});
