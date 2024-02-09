import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { styles } from './styles'; // Importe os estilos do arquivo de estilos compartilhado

const RecentesScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
        <Text style={styles.texto}>Página de Recentes</Text>
      </ScrollView>
    </View>
  );
};

export default RecentesScreen;
