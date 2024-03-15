import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Modal,
  Button,
  Alert,
} from 'react-native';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [contactName, setContactName] = useState('');
  const [contactLastName, setContactLastName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [editingContactId, setEditingContactId] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [searchText, setSearchText] = useState('');

  const isContactValid = () => {
    return contactName.trim() !== '' && contactLastName.trim() !== '' && contactPhone.trim() !== '';
  };

  const handleAddContact = () => {
    if (!isContactValid()) {
      Alert.alert('Erro', 'Por favor, preencha todas as informações obrigatórias.');
      return;
    }

    const newContact = {
      id: Date.now(),
      name: contactName,
      lastName: contactLastName,
      phone: contactPhone,
      email: contactEmail,
    };

    setContacts((prevContacts) => [...prevContacts, newContact]);
    setContactName('');
    setContactLastName('');
    setContactPhone('');
    setContactEmail('');
    setModalVisible(false);
  };

  const handleEditContact = () => {
    if (!isContactValid()) {
      Alert.alert('Erro', 'Por favor, preencha todas as informações obrigatórias.');
      return;
    }

    const updatedContacts = contacts.map((contact) =>
      contact.id === editingContactId
        ? {
            ...contact,
            name: contactName,
            lastName: contactLastName,
            phone: contactPhone,
            email: contactEmail,
          }
        : contact
    );

    setContacts(updatedContacts);
    setEditingContactId(null);
    setContactName('');
    setContactLastName('');
    setContactPhone('');
    setContactEmail('');
    setModalVisible(false);
  };

  const handleDeleteContact = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
  };

  const handleOpenEditModal = (contact) => {
    setEditingContactId(contact.id);
    setContactName(contact.name);
    setContactLastName(contact.lastName);
    setContactPhone(contact.phone);
    setContactEmail(contact.email);
    setModalVisible(true);
  };

  const handleSearch = () => {
    const filteredContacts = contacts.filter((contact) => {
      const fullName = `${contact.name} ${contact.lastName}`.toLowerCase();
      return fullName.includes(searchText.toLowerCase());
    });

    setFilteredContacts(filteredContacts);
  };

  useEffect(() => {
    // Ordenar a lista sempre que houver uma alteração
    setContacts([...contacts].sort((a, b) => a.name.localeCompare(b.name)));
  }, [contacts]);

  // Utilizar a lista filtrada se houver texto na busca, caso contrário, usar a lista completa
  const displayedContacts = searchText.trim() === '' ? contacts : filteredContacts;

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Contatos</Text>
      </View>
      <TextInput
        style={styles.inputpesuisa}
        placeholder="Pesquisar contatos..."
        value={searchText}
        onChangeText={(text) => {
          setSearchText(text);
          handleSearch(); // Atualizar a lista filtrada ao digitar na barra de pesquisa
        }}
        onSubmitEditing={handleSearch}
      />
 <FlatList
  data={displayedContacts}
  keyExtractor={(item) => item.id.toString()}
  renderItem={({ item }) => (
    <View style={styles.contactContainer}>
      <Text style={styles.contactName}>{`${item.name} ${item.lastName}`}</Text>
      <Text style={styles.contactInfo}>{item.phone}</Text>
      <TouchableOpacity
        style={styles.editButton}
        onPress={() => handleOpenEditModal(item)}
      >
        <Text style={styles.editButtonText}>✎</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => handleDeleteContact(item.id)}
      >
        <Text style={styles.deleteButtonText}>🗑</Text>
      </TouchableOpacity>
    </View>
  )}
  style={styles.list}
/>
      <View style={styles.bottomButtonContainer}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => {
            setEditingContactId(null);
            setModalVisible(true);
          }}
        >
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>
            {editingContactId ? 'Editar Contato' : 'Adicionar Contato'}
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Nome"
            placeholderTextColor="black"
            value={contactName}
            onChangeText={setContactName}
          />
          <TextInput
            style={styles.input}
            placeholder="Sobrenome"
            placeholderTextColor="black"
            value={contactLastName}
            onChangeText={setContactLastName}
          />
          <TextInput
            style={styles.input}
            placeholder="Telefone"
            placeholderTextColor="black"
            value={contactPhone}
            onChangeText={setContactPhone}
            keyboardType="numeric"
            maxLength={14}
          />
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            placeholderTextColor="black"
            value={contactEmail}
            onChangeText={setContactEmail}
            keyboardType="email-address"
          />
          <View style={styles.buttonContainer}>
            {editingContactId ? (
              <>
                <Button title="Salvar" onPress={handleEditContact} />
                <Button title="Cancelar" onPress={() => setModalVisible(false)} />
              </>
            ) : (
              <Button title="Adicionar" onPress={handleAddContact} />
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 50,
  },
  headerContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 1,
  },
  editButton: {
    backgroundColor: '#2196F3',
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  contactContainer: {
    marginBottom: 20,
    borderBottomHeight: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  contactName: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
  },
  deleteButton: {
    backgroundColor: '#F44336',
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  list: {
    flex: 1,
  },
  bottomButtonContainer: {
    position: 'absolute',
    bottom: 727,
    right: 21,
    zIndex: 1,
  },
  addButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 30,
  },
  addButtonText: {
    color: '#4CAF50',
    fontSize: 37,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 34,
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    marginTop: 15,
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputpesuisa: {
    height: 40,
    borderColor: 'black',
    borderWidth: 2,
    marginBottom: 10,
    paddingHorizontal: 10,
    marginTop: 1,
    borderRadius: 10,
  },
  contactInfo: {
    fontSize: 13,
    color: '#555',
    marginLeft: 11,
  },
});
