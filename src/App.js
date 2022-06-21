import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import Quadrado from './components/layout/Quadrado' 

export default () => (
    <SafeAreaView style={style.App}>
 
        <Quadrado white />
        <Quadrado cor = 'purple' />
        <Quadrado cor = 'green' />

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
