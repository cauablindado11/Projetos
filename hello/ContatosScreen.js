// ContatosScreen.js

import React, { useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity, Alert, TextInput, Image } from 'react-native';
import { styles } from './styles';

const ContatosScreen = () => {
  const [inputValue, setInputValue] = useState('');

  const handleButtonPress = () => {
    Alert.alert(`Adicionando contato: ${inputValue}`);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
        <Text style={styles.textocontatos}>Contatos</Text>

        <TextInput
          style={styles.input}
          placeholder="Digite o nome do contato"
          value={inputValue}
          onChangeText={(text) => setInputValue(text)}
        />
        
        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>

        <View>
          <Image style={styles.img} source={require('./assets/arnold.png')} />
          <Text style={styles.nome0}>
            <Text>Armando</Text>
          </Text>
        </View>

        <View>
          <Image style={styles.img} source={require('./assets/arnold.png')} />
          <Text style={styles.nome1}>
            <Text>Cauã</Text>
          </Text>
        </View>

        <View>
          <Image style={styles.img} source={require('./assets/arnold.png')} />
          <Text style={styles.nome1}>
            <Text>Felipe</Text>
          </Text>
        </View>

        <View>
          <Image style={styles.img} source={require('./assets/arnold.png')} />
          <Text style={styles.nome2}>
            <Text>Gustavo</Text>
          </Text>
        </View>

        <View>
          <Image style={styles.img} source={require('./assets/arnold.png')} />
          <Text style={styles.nome3}>
            <Text>Kauan</Text>
          </Text>
        </View>

        <View>
          <Image style={styles.img} source={require('./assets/arnold.png')} />
          <Text style={styles.nome4}>
            <Text>Pedro</Text>
          </Text>
        </View>

      </ScrollView>
    </View>
  );
};

export default ContatosScreen;
