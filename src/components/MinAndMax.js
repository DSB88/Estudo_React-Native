import React from 'react';
import { Text } from 'react-native';
import estilo from './estilo';

const min = Math.floor(Math.random() * 50);
const max = Math.floor(Math.random() * 1000);

export default props => (
    <Text style={estilo.txtG}>
        {' '}
        O número {max} é maior que o número {min}
    </Text>
);
