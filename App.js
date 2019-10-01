import React, {Component} from 'react';

import { YellowBox } from 'react-native';

import { Navigator } from 'react-native-deprecated-custom-components';

import MainScene from './src/components/MainScene';
import PizzaScene from './src/components/PizzaScene';
import ContactScene from './src/components/ContactScene';
import BebidasScene from './src/components/BebidasScene';
import PromoScene from './src/components/PromoScene';


class app5 extends Component {
  render(){

    YellowBox.ignoreWarnings([
      'Warning: componentWillMount is deprecated',
      'Warning: componentWillReceiveProps is deprecated',
    ]);

    return(
      <Navigator
        initialRoute= {{ id: 'mainScene'}}
        renderScene= { ( route, navigator) => {
          /*definir a cena com base na rota */
          if(route.id === 'mainScene'){
          //render MainScene
          return( <MainScene navigator={navigator} />);
          }

          if(route.id === 'pizza'){
            //render ClientScene
            return( <PizzaScene navigator={navigator} />);
            }

          if(route.id === 'contact'){
            //render ClientScene
           return( <ContactScene navigator={navigator} />);
            }

          if(route.id === 'bebidas'){
            //render ClientScene
           return( <BebidasScene navigator={navigator} />);
            }

          if(route.id === 'promo'){
            //render ClientScene
            return( <PromoScene navigator={navigator} />);
            }
          
        }}
      />

    );
  }
}


export default app5;
