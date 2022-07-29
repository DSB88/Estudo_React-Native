import React from 'react';
import { Text, FlatList } from 'react-native';
import estilo from '../estilo';
import Estilo from '../estilo';
import produtos from './produtos';

export default props => {
    return (
        <>
            <Text style={Estilo.txtG}>Lista de Produtos</Text>
            <FlatList
                data={produtos}
                keyExtractor={i => i.id}
                renderItem={({ item: q }) => {
                    return (
                        <Text style={estilo.txtP}>
                            {q.id}) Produto: {q.nome} Preço: R${q.preco}{' '}
                        </Text>
                    );
                }}
            />
        </>
    );
};
