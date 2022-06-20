import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import Familia from './components/relacao/Familia'
import Membro from './components/relacao/Membro'

export default () => (
    <SafeAreaView style={style.App}>

        <Familia>
            <Membro nome="Diego" sobrenome="Brandao" />
            <Membro nome="Isabelle" sobrenome="Brandao" />
        </Familia>

        <Familia>
            <Membro nome="Joshua" sobrenome="Brandao" />
            <Membro nome="Julia" sobrenome="Silva" />
            <Membro nome="Gui" sobrenome="Silva" />
            <Membro nome="Rebeca" sobrenome="Silva" />
        </Familia>

    </SafeAreaView>
)

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    },

})
