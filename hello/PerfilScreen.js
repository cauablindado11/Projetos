// PerfilScreen.js

import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles'; // Importe os estilos do arquivo de estilos compartilhado

const PerfilScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('./assets/arnold.png')} />
      <Text style={styles.test}>Mazotti</Text>
      <View style={styles.tabsContainer}>
        {/* Manter apenas a exibição do perfil, remover os botões de navegação */}
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.contactInfoContainer}>
          <Text style={styles.sectionTitle}>celular</Text>
          <Text>(17) 991215210</Text>
        </View>
        <View style={styles.contactInfoContainer2}>
          <Text style={styles.sectionTitle}>Notas</Text>
          {/* Adicione aqui notas sobre o contato */}
        </View>
        <View style={styles.otherNotesContainer}>
          <Text style={[styles.otherNotesText, { color: 'blue' }]}>Compartilhar Contato</Text>
          <View style={styles.separator}></View>
          <Text style={[styles.otherNotesText, { color: 'blue' }]}>Adicionar aos Favoritos</Text>
          <View style={styles.separator}></View>
          <Text style={[styles.otherNotesText, { color: 'blue' }]}>Adicionar a Contatos de Emergência</Text>
        </View>
        <View style={styles.otherNotesContainer3}>
          <Text style={[styles.otherNotesText, { color: 'red' }]}>Bloquear esse Chamador</Text>
        </View>
      </View>
    </View>
  );
};

export default PerfilScreen;
