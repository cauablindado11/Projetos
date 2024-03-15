import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  scroll: {
    width: '100%',
  },
  scrollContent: {
    alignItems: 'center',
  },
  img: {
    width: 250,
    height: 250,
    borderRadius: 500,
    alignSelf: 'center', // horizontally center
    marginTop: 20, // push to the top
  },
  textoWhite: {
    color: '#fff',
    fontSize: 25.5,
    marginTop: 55,
    marginRight: 10,
    marginBottom: 1,
  },
  texto: {
    color: '#000',
    fontSize: 25.5,
    marginTop: 55,
    marginRight: 10,
    marginBottom: 1,
  },
  infoBloco: {
    borderWidth: 1,
    backgroundColor: '#eee',
    borderRadius: 5,
    marginBottom: 15,
    padding: 13,
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
  img1: {
    height: 40,
    width: 40,
    borderRadius: 10,
  },
  contato1: {
    backgroundColor: '#fff',
  },
  test: {
    fontSize: 32,
    marginTop: 40,
    marginLeft: 140,
    marginTop: 20,
  },
  bottomContainer: {
    marginTop: 20,
    paddingHorizontal: 16,
  },

  contactInfoContainer: {
    backgroundColor: '#F1F1F1',
    height: 50,
    width: '100%',
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  contactInfoContainer2: {
    backgroundColor: '#F1F1F1',
    height: 50,
    width: '100%',
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  otherNotesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
    marginBottom: 20, // Add bottom margin
  },

  otherNotesContainer3: {
    backgroundColor: '#F1F1F1',
    height: 50,
    width: '100%',
    borderRadius: 5,
    marginBottom: 10,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 180,
  },
  sectionTitle:{
marginRight: 325,
marginTop: 10,
  },
  numerotitulo:{
    marginRight: 265,
    marginBottom: 20,
  },
});
