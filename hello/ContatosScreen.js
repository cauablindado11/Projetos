import React, { useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity, Alert, TextInput } from 'react-native';
import { styles } from './styles'; // Importe os estilos do arquivo de estilos compartilhado

const ContatosScreen = () => {
  const [inputValue, setInputValue] = useState('');

  const handleButtonPress = () => {
    Alert.alert(`Adicionando contato: ${inputValue}`);
    // Adicione a lógica para incluir o novo contato na lista aqui
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
        <Text style={styles.textocontatos}>Contatos</Text>

        {/* Restante do conteúdo de contatos */}
      </ScrollView>
    </View>
  );
};

export default ContatosScreen;
