import React from 'react'
import { View, StyleSheet } from 'react-native'
import splitLayoutProps from 'react-native/Libraries/StyleSheet/splitLayoutProps'

// import Aleatorio from './components/Aleatorio'
//  import MinMax from './components/MinAndMax'
// import CompPadrao, { Comp1, Comp2 } from './components/Multi'
// import Primeiro from './components/Primeiro'
// import Titulo from './components/Titulo'
import Botao from './components/Botao'
import Contador from './components/Contador'


export default () => (
    <View style={style.App}>

        <Contador inicial={100} passo={13} />
        <Contador />


    </View>
)

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    },

})
