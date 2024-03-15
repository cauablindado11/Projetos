import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Modal, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function TarefasScreen() {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDueDateText, setTaskDueDateText] = useState('');
  const [taskDueTimeText, setTaskDueTimeText] = useState('');
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [showAutoDateWarning, setShowAutoDateWarning] = useState(false);
  const navigation = useNavigation();

  const isTaskValid = () => {
    return (
      taskTitle.trim() !== '' &&
      taskDescription.trim() !== '' &&
      taskDueDateText.trim() !== '' &&
      taskDueTimeText.trim() !== ''
    );
  };

  const handleAddTask = () => {
    if (!isTaskValid()) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    const currentDate = new Date();
    const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;
    const formattedTime = `${currentDate.getHours()}:${currentDate.getMinutes()}`;

    const newTask = {
      id: Date.now(),
      title: taskTitle,
      description: taskDescription,
      startDateText: formattedDate,
      startTimeText: formattedTime,
      dueDateText: taskDueDateText,
      dueTimeText: taskDueTimeText,
      completed: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    resetTaskFields();
    setModalVisible(false);
    setShowAutoDateWarning(true);

    // Atualizar as datas das tarefas e navegar de volta para a tela do calendário
    navigation.navigate('Calendario', { tasks: [...tasks, newTask] });
  };

  const handleEditTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            title: taskTitle,
            description: taskDescription,
            dueDateText: taskDueDateText,
            dueTimeText: taskDueTimeText,
          }
        : task
    );

    setTasks(updatedTasks);
    setEditingTaskId(null);
    resetTaskFields();
    setModalVisible(false);
  };

  const handleCompleteTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );

    setTasks(updatedTasks);
  };

  const handleDeleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    setEditingTaskId(null);
    resetTaskFields();
    setModalVisible(false);
  };

  const handleSearch = () => {
    const filteredTasks = tasks.filter((task) =>
      task.title.toLowerCase().includes(searchText.toLowerCase()) ||
      task.description.toLowerCase().includes(searchText.toLowerCase())
    );

    setFilteredTasks(filteredTasks);
  };

  useEffect(() => {
    setTasks((prevTasks) => [...prevTasks].sort((a, b) => a.title.localeCompare(b.title)));
  }, [tasks.length]);

  const displayedTasks = searchText.trim() === '' ? tasks : filteredTasks;

  const resetTaskFields = () => {
    setTaskTitle('');
    setTaskDescription('');
    setTaskDueDateText('');
    setTaskDueTimeText('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Tarefas</Text>
      </View>
      <TextInput
        style={styles.inputpesuisa}
        placeholder="Pesquisar tarefas..."
        value={searchText}
        onChangeText={(text) => {
          setSearchText(text);
          handleSearch();
        }}
        onSubmitEditing={handleSearch}
      />
      <FlatList
        data={displayedTasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={[
              styles.taskContainer,
              { borderColor: item.completed ? '#4CAF50' : '#ccc', borderWidth: 1 },
            ]}
            onPress={() => {
              setEditingTaskId(item.id);
              setTaskTitle(item.title);
              setTaskDescription(item.description);
              setTaskDueDateText(item.dueDateText);
              setTaskDueTimeText(item.dueTimeText);
              setModalVisible(true);
            }}
          >
            <Text style={styles.taskTitle}>{`${index + 1}. ${item.title}`}</Text>
            <Text style={styles.taskDescription}>{item.description}</Text>
            <Text style={styles.taskDateTime}>{`Início: ${item.startDateText} ${item.startTimeText}`}</Text>
            <Text style={styles.taskDateTime}>{`Conclusão: ${item.dueDateText} ${item.dueTimeText}`}</Text>
            <TouchableOpacity
              style={[
                styles.completeButton,
                { backgroundColor: item.completed ? '#F44336' : '#4CAF50' },
              ]}
              onPress={() => handleCompleteTask(item.id)}
            >
              <Text style={styles.completeButtonText}>
                {item.completed ? 'Desfazer' : 'Feito'}
              </Text>
            </TouchableOpacity>
          </TouchableOpacity>
        )}
        style={styles.list}
      />
      <View style={styles.bottomButtonContainer}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => {
            setEditingTaskId(null);
            setModalVisible(true);
            setShowAutoDateWarning(true);
          }}
        >
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>
            {editingTaskId ? 'Editar Tarefa' : 'Adicionar Tarefa'}
          </Text>
          <Text style={styles.autoDateText}>
            {showAutoDateWarning && 'A data de início será definida automaticamente.'}
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Título da Tarefa"
            placeholderTextColor="black"
            value={taskTitle}
            onChangeText={setTaskTitle}
          />
          <TextInput
            style={styles.input}
            placeholder="Descrição da Tarefa"
            placeholderTextColor="black"
            value={taskDescription}
            onChangeText={setTaskDescription}
            multiline={true}
            numberOfLines={4}
          />
          <View style={styles.dateTimeContainer}>
            <TextInput
              style={[styles.input, { flex: 1, marginRight: 5 }]}
              placeholder="Data de Conclusão (dd/mm/aaaa)"
              placeholderTextColor="black"
              value={taskDueDateText}
              onChangeText={setTaskDueDateText}
              keyboardType="numeric"
            />
            <TextInput
              style={[styles.input, { flex: 1 }]}
              placeholder="Hora de Conclusão (hh:mm)"
              placeholderTextColor="black"
              value={taskDueTimeText}
              onChangeText={setTaskDueTimeText}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.buttonContainer}>
            {editingTaskId ? (
              <>
                <Button title="Salvar" onPress={() => handleEditTask(editingTaskId)} />
                <Button title="Excluir" onPress={() => handleDeleteTask(editingTaskId)} color="red" />
                <Button title="Cancelar" onPress={() => {setModalVisible(false); setShowAutoDateWarning(false);}} />
              </>
            ) : (
              <Button title="Adicionar" onPress={handleAddTask} />
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
    padding: 20,
  },
  headerContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  inputpesuisa: {
    height: 40,
    borderColor: 'black',
    borderWidth: 2,
    marginBottom: 10,
    paddingHorizontal: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  list: {
    flex: 1,
  },
  taskContainer: {
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  taskDescription: {
    fontSize: 16,
    marginTop: 5,
  },
  taskDateTime: {
    fontSize: 14,
    marginTop: 5,
  },
  autoDateText: {
    fontSize: 14,
    color: 'red',
    marginBottom: 10,
  },
  completeButton: {
    backgroundColor: '#4CAF50',
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
  },
  completeButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  bottomButtonContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    zIndex: 1,
  },
  addButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2196F3',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 32,
    alignItems: 'center',
    marginBottom: 6,
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
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});