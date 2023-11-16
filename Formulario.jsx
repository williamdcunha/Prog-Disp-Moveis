import React, {useState} from 'react';
import { View, TextInput, Text } from 'react-native';
export default props => {

    const [nome, setNome] = useState("");

    return (
        <View>
            <TextInput
                style={{borderWidth: 1.0}}
                placeholder='Digite seu nome'
                value={nome}
                onChangeText={nome => setNome(nome)}
            />
        </View>
    )
}