// styles.js

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff', // Alterado para branco para o tema claro
        justifyContent: 'center',
      },    
  scroll: {
    width: '100%',
  },
  scrollContent: {
    alignItems: 'center',
  },
  img: {
    width: 200,
    height: 200,
    marginTop: 1,
    borderRadius: 500,
  },
  texto: {
    color: '#fff',
    fontSize: 25.5,
    marginTop: 55,
    marginRight: 10,
    marginBottom: 1,
  },
  texto: {
    color: '#000', // Alterado para preto para o tema claro
    fontSize: 25.5,
    marginTop: 55,
    marginRight: 10,
    marginBottom: 1,
  },

  infoBloco: {
    borderWidth: 1,
    backgroundColor: '#eee', // Alterado para cinza claro para o tema claro
    borderRadius: 5,
    marginBottom: 15,
    padding: 13,
  },

  textocontatos: {
    color: '#fff',
    fontSize: 25.5,
    marginTop: 50,
    marginRight: 280,
    marginBottom: 1,
  },
  input: {
    height: 35,
    width: 380,
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: '#eee',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'transparent',
    padding: 10,
    marginTop: -53,
    marginLeft: 350,
  },
  buttonText: {
    color: 'blue',
    fontSize: 50,
    fontWeight: 'bold',
    marginTop: -70,
  },
  listaletra: {
    color: '#fff',
    fontSize: 18,
    marginTop: 10,
  },
  listanome: {
    color: '#fff',
    fontSize: 16,
  },
});
