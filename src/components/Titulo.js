import React from 'react'
import { View, Text } from 'react-native'
import estilo from './estilo'
import Estilo from './estilo'

export default props => (
    // <View>
<React.Fragment>
        <Text style={Estilo.txtG}> {props.principal}</Text>
        <Text>{props.secundario}</Text>
    {/* // </View> */}
</React.Fragment>
)
