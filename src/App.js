import React from 'react'
import { View, StyleSheet } from 'react-native'
import Botao from './components/Botao'
import Pai from './components/direta/Pai'

export default () => (
    <View style={style.App}>

    <Pai>       </Pai>

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
