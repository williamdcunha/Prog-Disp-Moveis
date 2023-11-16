import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const Formulario = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleButtonPress = () => {
    console.warn('Email:', email, 'Senha:', senha);
  };

  return (
    <View>
      <TextInput
        placeholder="Digite seu e-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        style={{ borderWidth: 1, borderColor: 'gray', padding: 10, marginBottom: 10 }}
      />
      <TextInput
        placeholder="Digite sua senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        style={{ borderWidth: 1, borderColor: 'gray', padding: 10, marginBottom: 10 }}
      />
      <Button title="Enviar" onPress={handleButtonPress} />
    </View>
  );
};

export default Formulario;
