import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TecladoScreen = () => {
  const [displayValue, setDisplayValue] = useState('');

  const handleButtonPress = (value) => {
    setDisplayValue((prevValue) => prevValue + value);
  };

  const handleDeletePress = () => {
    setDisplayValue((prevValue) => prevValue.slice(0, -1));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.display}>{displayValue}</Text>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('1')}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('2')}>
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('3')}>
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('4')}>
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('5')}>
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('6')}>
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('7')}>
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('8')}>
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('9')}>
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('*')}>
          <Text style={styles.buttonText}>*</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('0')}>
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('#')}>
          <Text style={styles.buttonText}>#</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        {displayValue.length > 0 && (
          <TouchableOpacity style={styles.deleteButton} onPress={handleDeletePress}>
            <Ionicons name="backspace" size={24} color="#fff" />
          </TouchableOpacity>
        )}
        {displayValue.length > 0 && (
          <TouchableOpacity style={styles.redButton} onPress={() => handleButtonPress('Chamada')}>
            <Ionicons name="call" size={36} color="#fff" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
    paddingHorizontal: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#C5C5C5',
    padding: 20,
    borderRadius: 70,
    flex: 1,
    marginHorizontal: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
  },
  redButton: {
    backgroundColor: 'red',
    padding: 20,
    borderRadius: 35,
    width: '40%',
    alignSelf: 'center',
    marginVertical: 10,
  },
  display: {
    fontSize: 26,
    color: '#000',
    textAlign: 'right',
    marginBottom: 20,
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 20,
    borderRadius: 70,
    flex: 1,
    marginHorizontal: 120,
  },
});

export default TecladoScreen;