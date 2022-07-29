import React from 'react';
import { View, Text, Button } from 'react-native';

export default props => {
    function gerarNumero(min, max) {
        const fator = max - min;
        return parseInt(Math.random() * fator);
    }
    return (
        <Button
            title="Executar"
            onPress={function () {
                const n = gerarNumero(props.min, props.max);
                props.funcao(n, 'O valor é: ');
            }}
        />
    );
};
