import React, {Component} from 'react';
import {
    View,    
    StyleSheet,
    Text,
    Image,
    
} from 'react-native';

export default class pizzasDetalhes extends Component {
    render(){
      return(
        <View /*pai*/>

        <View  /* Conteiner de uma pizza */ style= { styles.wrapViews }>
        <View>
        <Image  style= { styles.imgSmallMenu } source={ require ( '../imgs/pizza_calabresa.png' )}/>
        </View>
            <View style= { styles.menuHeader }>    
        <Text style= { styles.txtNum}> 01. NAPOLITANA </Text>
        <Text style= { styles.txt2ndLine}></Text> 
            </View>
        
        </View>
        
        <View style= { styles.wrapBorder}>        
        <View style= { styles.menuHeader2 }>
        <Text style= { styles.txtDetail}> P </Text>
        <Text style= { styles.txtDetail}> PP </Text>
        <Text style= { styles.txtDetail}> G </Text>
        <Text style= { styles.txtDetail}> GG </Text>
        </View> 
        
        <View style= { styles.menuSizes }>      
        <Text style= { styles.txtFirstValeu}> R$14,99</Text>
        <Text style= { styles.txtSizes}> R$16,99 </Text>
        <Text style= { styles.txtSizes}> R$28,99 </Text>
        <Text style= { styles.txtSizes}> R$31,99 </Text>
        </View>
        
        
        <View>
        <Text style= { styles.txtDesc }>Delicioso molho de tomate, mussarela, presunto, tomate e orégano</Text>
        </View>
        </View>

        <View  /* Conteiner de uma pizza */ style= { styles.wrapViews }>
        <View>
        <Image  style= { styles.imgSmallMenu } source={ require ( '../imgs/pizza_calabresa.png' )}/>
        </View>
            <View style= { styles.menuHeader }>    
        <Text style= { styles.txtNum}> 02. PRIMAVERA </Text>
        <Text style= { styles.txt2ndLine}></Text> 
            </View>
        
        </View>
        
        <View style= { styles.wrapBorder}>        
        <View style= { styles.menuHeader2 }>
        <Text style= { styles.txtDetail}> P </Text>
        <Text style= { styles.txtDetail}> PP </Text>
        <Text style= { styles.txtDetail}> G </Text>
        <Text style= { styles.txtDetail}> GG </Text>
        </View> 
        
        <View style= { styles.menuSizes }>      
        <Text style= { styles.txtFirstValeu}> R$14,99</Text>
        <Text style= { styles.txtSizes}> R$16,99 </Text>
        <Text style= { styles.txtSizes}> R$28,99 </Text>
        <Text style= { styles.txtSizes}> R$31,99 </Text>
        </View>
        
        
        <View>
        <Text style= { styles.txtDesc }>Delicioso molho de tomate, mussarela, presunto, milho e orégano</Text>
        </View>
        </View>

        <View  /* Conteiner de uma pizza */ style= { styles.wrapViews }>
        <View>
        <Image  style= { styles.imgSmallMenu } source={ require ( '../imgs/pizza_calabresa.png' )}/>
        </View>
            <View style= { styles.menuHeader }>    
        <Text style= { styles.txtNum}> 03. CALABRESA </Text>
        <Text style= { styles.txt2ndLine}></Text> 
            </View>
        
        </View>
        
        <View style= { styles.wrapBorder}>        
        <View style= { styles.menuHeader2 }>
        <Text style= { styles.txtDetail}> P </Text>
        <Text style= { styles.txtDetail}> PP </Text>
        <Text style= { styles.txtDetail}> G </Text>
        <Text style= { styles.txtDetail}> GG </Text>
        </View> 
        
        <View style= { styles.menuSizes }>      
        <Text style= { styles.txtFirstValeu}> R$14,99</Text>
        <Text style= { styles.txtSizes}> R$15,99 </Text>
        <Text style= { styles.txtSizes}> R$26,99 </Text>
        <Text style= { styles.txtSizes}> R$30,99 </Text>
        </View>
        
        
        <View>
        <Text style= { styles.txtDesc }>Delicioso molho de tomate, mussarela, calabresa, cebola e orégano</Text>
        </View>
        </View>

        <View  /* Conteiner de uma pizza */ style= { styles.wrapViews }>
        <View>
        <Image  style= { styles.imgSmallMenu } source={ require ( '../imgs/pizza_calabresa.png' )}/>
        </View>
            <View style= { styles.menuHeader }>    
        <Text style= { styles.txtNum}> 04. MARGUERITA </Text>
        <Text style= { styles.txt2ndLine}></Text> 
            </View>
        
        </View>
        
        <View style= { styles.wrapBorder}>        
        <View style= { styles.menuHeader2 }>
        <Text style= { styles.txtDetail}> P </Text>
        <Text style= { styles.txtDetail}> PP </Text>
        <Text style= { styles.txtDetail}> G </Text>
        <Text style= { styles.txtDetail}> GG </Text>
        </View> 
        
        <View style= { styles.menuSizes }>      
        <Text style= { styles.txtFirstValeu}> R$9,99</Text>
        <Text style= { styles.txtSizes}> R$13,99 </Text>
        <Text style= { styles.txtSizes}> R$24,99 </Text>
        <Text style= { styles.txtSizes}> R$27,99 </Text>
        </View>
        
        
        <View>
        <Text style= { styles.txtDesc }>Delicioso molho de tomate, mussarela, tomate, manjericão e orégano</Text>
        </View>
        </View>

        <View  /* Conteiner de uma pizza */ style= { styles.wrapViews }>
        <View>
        <Image  style= { styles.imgSmallMenu } source={ require ( '../imgs/pizza_calabresa.png' )}/>
        </View>
            <View style= { styles.menuHeader }>    
        <Text style= { styles.txtNum}> 05. CHAMPIGNOM </Text>
        <Text style= { styles.txt2ndLine}>E PALMITO </Text> 
            </View>
        
        </View>
        
        <View style= { styles.wrapBorder}>        
        <View style= { styles.menuHeader2 }>
        <Text style= { styles.txtDetail}> P </Text>
        <Text style= { styles.txtDetail}> PP </Text>
        <Text style= { styles.txtDetail}> G </Text>
        <Text style= { styles.txtDetail}> GG </Text>
        </View> 
        
        <View style= { styles.menuSizes }>      
        <Text style= { styles.txtFirstValeu}> R$14,99</Text>
        <Text style= { styles.txtSizes}> R$15,99 </Text>
        <Text style= { styles.txtSizes}> R$27,99 </Text>
        <Text style= { styles.txtSizes}> R$30,99 </Text>
        </View>
        
        
        <View>
        <Text style= { styles.txtDesc }>Delicioso molho de tomate, mussarela, palmito e champignon</Text>
        </View>
        </View>

        <View  /* Conteiner de uma pizza */ style= { styles.wrapViews }>
        <View>
        <Image  style= { styles.imgSmallMenu } source={ require ( '../imgs/pizza_calabresa.png' )}/>
        </View>
            <View style= { styles.menuHeader }>    
        <Text style= { styles.txtNum}> 06. VEGETARIANA </Text>
        <Text style= { styles.txt2ndLine}> </Text> 
            </View>
        
        </View>
        
        <View style= { styles.wrapBorder}>        
        <View style= { styles.menuHeader2 }>
        <Text style= { styles.txtDetail}> P </Text>
        <Text style= { styles.txtDetail}> PP </Text>
        <Text style= { styles.txtDetail}> G </Text>
        <Text style= { styles.txtDetail}> GG </Text>
        </View> 
        
        <View style= { styles.menuSizes }>      
        <Text style= { styles.txtFirstValeu}> R$14,99 </Text>
        <Text style= { styles.txtSizes}> R$16,99 </Text>
        <Text style= { styles.txtSizes}> R$28,99 </Text>
        <Text style= { styles.txtSizes}> R$31,99 </Text>
        </View>
        
        
        <View>
        <Text style= { styles.txtDesc }>Delicioso molho de tomate, mussarela, champignon, palmito, azeitona, milho e orégano</Text>
        </View>
        </View>

        <View  /* Conteiner de uma pizza */ style= { styles.wrapViews }>
        <View>
        <Image  style= { styles.imgSmallMenu } source={ require ( '../imgs/pizza_calabresa.png' )}/>
        </View>
            <View style= { styles.menuHeader }>    
        <Text style= { styles.txtNum}> 07. PRESUNTO, BACON E MILHO </Text>
        <Text style= { styles.txt2ndLine}></Text> 
            </View>
        
        </View>
        
        <View style= { styles.wrapBorder}>        
        <View style= { styles.menuHeader2 }>
        <Text style= { styles.txtDetail}> P </Text>
        <Text style= { styles.txtDetail}> PP </Text>
        <Text style= { styles.txtDetail}> G </Text>
        <Text style= { styles.txtDetail}> GG </Text>
        </View> 
        
        <View style= { styles.menuSizes }>      
        <Text style= { styles.txtFirstValeu}> R$14,99 </Text>
        <Text style= { styles.txtSizes}> R$18,99 </Text>
        <Text style= { styles.txtSizes}> R$31,99 </Text>
        <Text style= { styles.txtSizes}> R$35,99 </Text>
        </View>
        
        
        <View>
        <Text style= { styles.txtDesc }>Delicioso molho de tomate, mussarela, presunto, bacon, milho e orégano</Text>
        </View>
        </View>

        <View  /* Conteiner de uma pizza */ style= { styles.wrapViews }>
        <View>
        <Image  style= { styles.imgSmallMenu } source={ require ( '../imgs/pizza_calabresa.png' )}/>
        </View>
            <View style= { styles.menuHeader }>    
        <Text style= { styles.txtNum}> 08. HAWAIANA </Text>
        <Text style= { styles.txt2ndLine}></Text> 
            </View>
        
        </View>
        
        <View style= { styles.wrapBorder}>        
        <View style= { styles.menuHeader2 }>
        <Text style= { styles.txtDetail}> P </Text>
        <Text style= { styles.txtDetail}> PP </Text>
        <Text style= { styles.txtDetail}> G </Text>
        <Text style= { styles.txtDetail}> GG </Text>
        </View> 
        
        <View style= { styles.menuSizes }>      
        <Text style= { styles.txtFirstValeu}> R$14,99</Text>
        <Text style= { styles.txtSizes}> R$15,99 </Text>
        <Text style= { styles.txtSizes}> R$26,99 </Text>
        <Text style= { styles.txtSizes}> R$29,99 </Text>
        </View>
        
        
        <View>
        <Text style= { styles.txtDesc }>Delicioso molho de tomate, mussarela, abacaxi caramelizado, bacon e orégano</Text>
        </View>
        </View>

        <View  /* Conteiner de uma pizza */ style= { styles.wrapViews }>
        <View>
        <Image  style= { styles.imgSmallMenu } source={ require ( '../imgs/pizza_calabresa.png' )}/>
        </View>
            <View style= { styles.menuHeader }>    
        <Text style= { styles.txtNum}> 09. OLIVA</Text>
        <Text style= { styles.txt2ndLine}></Text> 
            </View>
        
        </View>
        
        <View style= { styles.wrapBorder}>        
        <View style= { styles.menuHeader2 }>
        <Text style= { styles.txtDetail}> P </Text>
        <Text style= { styles.txtDetail}> PP </Text>
        <Text style= { styles.txtDetail}> G </Text>
        <Text style= { styles.txtDetail}> GG </Text>
        </View> 
        
        <View style= { styles.menuSizes }>      
        <Text style= { styles.txtFirstValeu}> R$14,99</Text>
        <Text style= { styles.txtSizes}> R$17,99 </Text>
        <Text style= { styles.txtSizes}> R$29,99 </Text>
        <Text style= { styles.txtSizes}> R$34,99 </Text>
        </View>
        
        
        <View>
        <Text style= { styles.txtDesc }>Delicioso molho de tomate, mussarela, azeitonas pretas, champignon, salame italiano e orégano</Text>
        </View>
        </View>

        <View  /* Conteiner de uma pizza */ style= { styles.wrapViews }>
        <View>
        <Image  style= { styles.imgSmallMenu } source={ require ( '../imgs/pizza_calabresa.png' )}/>
        </View>
            <View style= { styles.menuHeader }>    
        <Text style= { styles.txtNum}> 10. LA ROMANA </Text>
        <Text style= { styles.txt2ndLine}></Text> 
            </View>
        
        </View>
        
        <View style= { styles.wrapBorder}>        
        <View style= { styles.menuHeader2 }>
        <Text style= { styles.txtDetail}> P </Text>
        <Text style= { styles.txtDetail}> PP </Text>
        <Text style= { styles.txtDetail}> G </Text>
        <Text style= { styles.txtDetail}> GG </Text>
        </View> 
        
        <View style= { styles.menuSizes }>      
        <Text style= { styles.txtFirstValeu}> R$14,99</Text>
        <Text style= { styles.txtSizes}> R$16,99 </Text>
        <Text style= { styles.txtSizes}> R$28,99 </Text>
        <Text style= { styles.txtSizes}> R$31,99 </Text>
        </View>
        
        
        <View>
        <Text style= { styles.txtDesc }>Delicioso molho de tomate, azeitonas, salame italiano, tomate desidratado e orégano</Text>
        </View>
        </View>

        <View  /* Conteiner de uma pizza */ style= { styles.wrapViews }>
        <View>
        <Image  style= { styles.imgSmallMenu } source={ require ( '../imgs/pizza_calabresa.png' )}/>
        </View>
            <View style= { styles.menuHeader }>    
        <Text style= { styles.txtNum}> 11. ESTILO ITALIANO </Text>
        <Text style= { styles.txt2ndLine}> </Text> 
            </View>
        
        </View>
        
        <View style= { styles.wrapBorder}>        
        <View style= { styles.menuHeader2 }>
        <Text style= { styles.txtDetail}> P </Text>
        <Text style= { styles.txtDetail}> PP </Text>
        <Text style= { styles.txtDetail}> G </Text>
        <Text style= { styles.txtDetail}> GG </Text>
        </View> 
        
        <View style= { styles.menuSizes }>      
        <Text style= { styles.txtFirstValeu}> R$14,99 </Text>
        <Text style= { styles.txtSizes}> R$16,99 </Text>
        <Text style= { styles.txtSizes}> R$28,99 </Text>
        <Text style= { styles.txtSizes}> R$32,99 </Text>
        </View>
        
        
        <View>
        <Text style= { styles.txtDesc }>Delicioso molho de tomate, mussarela, pimentão, cebola roxa caramelizada, calabresa e manjericão</Text>
        </View>
        </View>

        <View  /* Conteiner de uma pizza */ style= { styles.wrapViews }>
        <View>
        <Image  style= { styles.imgSmallMenu } source={ require ( '../imgs/pizza_calabresa.png' )}/>
        </View>
            <View style= { styles.menuHeader }>    
        <Text style= { styles.txtNum}> 12. FRANGO COM </Text>
        <Text style= { styles.txt2ndLine}>CATUPIRY </Text> 
            </View>
        
        </View>
        
        <View style= { styles.wrapBorder}>        
        <View style= { styles.menuHeader2 }>
        <Text style= { styles.txtDetail}> P </Text>
        <Text style= { styles.txtDetail}> PP </Text>
        <Text style= { styles.txtDetail}> G </Text>
        <Text style= { styles.txtDetail}> GG </Text>
        </View> 
        
        <View style= { styles.menuSizes }>      
        <Text style= { styles.txtFirstValeu}> R$14,99 </Text>
        <Text style= { styles.txtSizes}> R$15,99 </Text>
        <Text style= { styles.txtSizes}> R$27,99 </Text>
        <Text style= { styles.txtSizes}> R$30,99 </Text>
        </View>
        
        
        <View>
        <Text style= { styles.txtDesc }>Delicioso molho de tomate, mussarela, frango desfiado, catupiry e orégano</Text>
        </View>
        </View>

        <View  /* Conteiner de uma pizza */ style= { styles.wrapViews }>
        <View>
        <Image  style= { styles.imgSmallMenu } source={ require ( '../imgs/pizza_calabresa.png' )}/>
        </View>
            <View style= { styles.menuHeader }>    
        <Text style= { styles.txtNum}> 13. FRANGO COM </Text>
        <Text style= { styles.txt2ndLine}>PALMITO </Text> 
            </View>
        
        </View>
        
        <View style= { styles.wrapBorder}>        
        <View style= { styles.menuHeader2 }>
        <Text style= { styles.txtDetail}> P </Text>
        <Text style= { styles.txtDetail}> PP </Text>
        <Text style= { styles.txtDetail}> G </Text>
        <Text style= { styles.txtDetail}> GG </Text>
        </View> 
        
        <View style= { styles.menuSizes }>      
        <Text style= { styles.txtFirstValeu}> R$14,99 </Text>
        <Text style= { styles.txtSizes}> R$15,99 </Text>
        <Text style= { styles.txtSizes}> R$27,99 </Text>
        <Text style= { styles.txtSizes}> R$30,99 </Text>
        </View>
        
        
        <View>
        <Text style= { styles.txtDesc }>Delicioso molho de tomate, mussarela, frango desfiado, palmito, milho e orégano</Text>
        </View>
        </View>

        <View  /* Conteiner de uma pizza */ style= { styles.wrapViews }>
        <View>
        <Image  style= { styles.imgSmallMenu } source={ require ( '../imgs/pizza_calabresa.png' )}/>
        </View>
            <View style= { styles.menuHeader }>    
        <Text style= { styles.txtNum}> 14. LA GOSTOSA </Text>
        <Text style= { styles.txt2ndLine}></Text> 
            </View>
        
        </View>
        
        <View style= { styles.wrapBorder}>        
        <View style= { styles.menuHeader2 }>
        <Text style= { styles.txtDetail}> P </Text>
        <Text style= { styles.txtDetail}> PP </Text>
        <Text style= { styles.txtDetail}> G </Text>
        <Text style= { styles.txtDetail}> GG </Text>
        </View> 
        
        <View style= { styles.menuSizes }>      
        <Text style= { styles.txtFirstValeu}> R$14,99 </Text>
        <Text style= { styles.txtSizes}> R$16,99 </Text>
        <Text style= { styles.txtSizes}> R$28,99 </Text>
        <Text style= { styles.txtSizes}> R$32,99 </Text>
        </View>
        
        
        <View>
        <Text style= { styles.txtDesc }>Delicioso molho de tomate, mussarela, calabresa, presunto, bacon, salame italiano e orégano</Text>
        </View>
        </View>

        <View  /* Conteiner de uma pizza */ style= { styles.wrapViews }>
        <View>
        <Image  style= { styles.imgSmallMenu } source={ require ( '../imgs/pizza_calabresa.png' )}/>
        </View>
            <View style= { styles.menuHeader }>    
        <Text style= { styles.txtNum}> 15. À MODA </Text>
        <Text style= { styles.txt2ndLine}></Text> 
            </View>
        
        </View>
        
        <View style= { styles.wrapBorder}>        
        <View style= { styles.menuHeader2 }>
        <Text style= { styles.txtDetail}> P </Text>
        <Text style= { styles.txtDetail}> PP </Text>
        <Text style= { styles.txtDetail}> G </Text>
        <Text style= { styles.txtDetail}> GG </Text>
        </View> 
        
        <View style= { styles.menuSizes }>      
        <Text style= { styles.txtFirstValeu}> R$14,99</Text>
        <Text style= { styles.txtSizes}> R$17,99 </Text>
        <Text style= { styles.txtSizes}> R$29,99 </Text>
        <Text style= { styles.txtSizes}> R$34,99 </Text>
        </View>
        
        
        <View>
        <Text style= { styles.txtDesc }>Delicioso molho de tomate, mussarela, presunto, azeitona, cebola, tomate, salame italiano, calabresa, pimentão e orégano</Text>
        </View>
        </View>

        <View  /* Conteiner de uma pizza */ style= { styles.wrapViews }>
        <View>
        <Image  style= { styles.imgSmallMenu } source={ require ( '../imgs/pizza_calabresa.png' )}/>
        </View>
            <View style= { styles.menuHeader }>    
        <Text style= { styles.txtNum}> 16. 4 ESTAÇÕES </Text>
        <Text style= { styles.txt2ndLine}></Text> 
            </View>
        
        </View>
        
        <View style= { styles.wrapBorder}>        
        <View style= { styles.menuHeader2 }>
        <Text style= { styles.txtDetail}> P </Text>
        <Text style= { styles.txtDetail}> PP </Text>
        <Text style= { styles.txtDetail}> G </Text>
        <Text style= { styles.txtDetail}> GG </Text>
        </View> 
        
        <View style= { styles.menuSizes }>      
        <Text style= { styles.txtFirstValeu}> R$14,99 </Text>
        <Text style= { styles.txtSizes}> R$16,99 </Text>
        <Text style= { styles.txtSizes}> R$27,99 </Text>
        <Text style= { styles.txtSizes}> R$31,99 </Text>
        </View>
        
        
        <View>
        <Text style= { styles.txtDesc }>Delicioso molho de tomate, bacon, calabresa, presunto, salame italiano, azeitonas pretas, champignon, milho, abacaxi caramelizado</Text>
        </View>
        </View>

        <View  /* Conteiner de uma pizza */ style= { styles.wrapViews }>
        <View>
        <Image  style= { styles.imgSmallMenu } source={ require ( '../imgs/pizza_calabresa.png' )}/>
        </View>
            <View style= { styles.menuHeader }>    
        <Text style= { styles.txtNum}> 17. PALOOZA ESPECIAL </Text>
        <Text style= { styles.txt2ndLine}> </Text> 
            </View>
        
        </View>
        
        <View style= { styles.wrapBorder}>        
        <View style= { styles.menuHeader2 }>
        <Text style= { styles.txtDetail}> P </Text>
        <Text style= { styles.txtDetail}> PP </Text>
        <Text style= { styles.txtDetail}> G </Text>
        <Text style= { styles.txtDetail}> GG </Text>
        </View> 
        
        <View style= { styles.menuSizes }>      
        <Text style= { styles.txtFirstValeu}> R$14,99 </Text>
        <Text style= { styles.txtSizes}> R$20,99 </Text>
        <Text style= { styles.txtSizes}> R$33,99 </Text>
        <Text style= { styles.txtSizes}> R$37,99 </Text>
        </View>
        
        
        <View>
        <Text style= { styles.txtDesc }>Delicioso molho de tomate, mussarela, presunto, bacon, borda de catupiry, batata frita, milho e orégano</Text>
        </View>
        </View>

        <View  /* Conteiner de uma pizza */ style= { styles.wrapViews }>
        <View>
        <Image  style= { styles.imgSmallMenu } source={ require ( '../imgs/pizza_calabresa.png' )}/>
        </View>
            <View style= { styles.menuHeader }>    
        <Text style= { styles.txtNum}> 18. PORTUGUESA </Text>
        <Text style= { styles.txt2ndLine}></Text> 
            </View>
        
        </View>
        
        <View style= { styles.wrapBorder}>        
        <View style= { styles.menuHeader2 }>
        <Text style= { styles.txtDetail}> P </Text>
        <Text style= { styles.txtDetail}> PP </Text>
        <Text style= { styles.txtDetail}> G </Text>
        <Text style= { styles.txtDetail}> GG </Text>
        </View> 
        
        <View style= { styles.menuSizes }>      
        <Text style= { styles.txtFirstValeu}> R$14,99 </Text>
        <Text style= { styles.txtSizes}> R$18,99 </Text>
        <Text style= { styles.txtSizes}> R$31,99 </Text>
        <Text style= { styles.txtSizes}> R$36,99 </Text>
        </View>
        
        
        <View>
        <Text style= { styles.txtDesc }>Delicioso molho de tomate, mussarela, presunto, calabresa, bacon, ovos, salame italiano, pimentão, azeitona, cebola e orégano</Text>
        </View>
        </View>

        <View  /* Conteiner de uma pizza */ style= { styles.wrapViews }>
        <View>
        <Image  style= { styles.imgSmallMenu } source={ require ( '../imgs/pizza_calabresa.png' )}/>
        </View>
            <View style= { styles.menuHeader }>    
        <Text style= { styles.txtNum}> 19. PALOOZA </Text>
        <Text style= { styles.txt2ndLine}>4 SABORES </Text> 
            </View>
        
        </View>
        
        <View style= { styles.wrapBorderLast}>        
        <View style= { styles.menuHeader2 }>
        <Text style= { styles.txtDetail}> P </Text>
        <Text style= { styles.txtDetail}> PP </Text>
        <Text style= { styles.txtDetail}> G </Text>
        <Text style= { styles.txtDetail}> GG </Text>
        </View> 
        
        <View style= { styles.menuSizes }>      
        <Text style= { styles.txtFirstValeu}> R$14,99 </Text>
        <Text style= { styles.txtSizes}> R$15,99 </Text>
        <Text style= { styles.txtSizes}> R$27,99 </Text>
        <Text style= { styles.txtSizes}> R$31,99 </Text>
        </View>
        
        
        <View>
        <Text style= { styles.txtDesc }>SABORES: Presunto, frango com catupiry, mussarela, calabresa</Text>
        </View>
        </View>
        






</View>

   
    );
  }
}

const styles = StyleSheet.create({

    menuHeader: {
        justifyContent: 'flex-start',
        marginTop: 10,
        
    },
    menuHeader2: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 5,
        marginRight: 10,
        
    },
    wrapViews: {
        flexDirection: 'row',
        flex: 1,
        marginTop: 10,
        
    },
    menuHeader1: {
        flexDirection: 'row',
        alignContent: 'flex-start',
        marginTop: 10,
        
    },

    menuSizes: {
        flexDirection: 'row',
        justifyContent: 'flex-end',          
                    
    },  

    wrapBorder: {
        borderWidth: 1,
        borderColor: '#ca4b49',
        backgroundColor: '#f2f2f2',
        marginHorizontal: 2,
    },

    wrapBorderLast: {
        borderWidth: 1,
        borderColor: '#ca4b49',
        backgroundColor: '#f2f2f2',
        marginHorizontal: 2,
        marginBottom: 30,
    },

    txtSabores: {
        fontSize: 16,
        marginLeft: 10,
        fontWeight: 'bold',
    },

    txtNum: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#c73c3c',
                
    },
    txt2ndLine: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#c73c3c',
        marginLeft: 5,

    },

    txtTitulo: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ca4b49',
        
    },

    txtFirstValeu: {
        marginTop: 3,
        fontSize: 12,
        fontWeight: 'bold',
        color: 'blue',

    },
    
    txtSizes: {
        fontSize: 12,
        marginLeft: 15,
        marginTop: 3,
        fontWeight: 'bold', 
        color: 'blue',        
    },

    txtDesc: {
        marginLeft: 10,
        marginRight: 5,
        marginTop: 5,
        color: '#1a1a1a',
    },

    txtDetail: {
        fontSize: 16,
        marginLeft: 45,
        fontWeight: 'bold',

    },

    imgSmallMenu: {
        width: 80,
        height: 80,
    }
   



});
