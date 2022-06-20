import React from 'react'
import { Text } from 'react-native'
import estilo from '../estilo'

export default props => {
    return (
        <>
            <Text style={estilo.txtM}>[Início] Membros da Família:</Text>
            {props.children}
            <Text style={estilo.txtM}>[Fim] Membros da Família</Text>
        </>
    )
}