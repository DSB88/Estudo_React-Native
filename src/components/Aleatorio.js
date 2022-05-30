import React from 'react'
import { Text } from 'react-native'
import estilo from './estilo'

export default props => {

    const aleatorio = Math.floor(Math.random() * 10)

    return ( 
                <Text style={estilo.txtG}>O valor aleatório é: {aleatorio} </Text>
              
    )
}

