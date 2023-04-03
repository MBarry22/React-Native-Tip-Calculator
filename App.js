import React, { useState } from 'react';
import { View, Text, TextInput, TouchableHighlight, StyleSheet, FlatList } from 'react-native';

const tipPercentages = [
  { id: '10', label: '10%' },
  { id: '15', label: '15%' },
  { id: '20', label: '20%' },
  { id: '25', label: '25%' },
  { id: '', label: 'Custom' },
];

export default function App() {
  const [billAmount, setBillAmount] = useState('');
  const [tipPercentage, setTipPercentage] = useState('');
  const [tipAmount, setTipAmount] = useState('');
  const [totalAmount, setTotalAmount] = useState('');

  const calculateTip = () => {
    const tip = parseFloat(billAmount) * parseFloat(tipPercentage) / 100;
    const total = parseFloat(billAmount) + tip;

    setTipAmount(tip.toFixed(2));
    setTotalAmount(total.toFixed(2));
  }

  const generateRandomBillAmount = () => {
    const randomAmount = (Math.floor(Math.random() * 401) + 100).toFixed(2);
    setBillAmount(randomAmount);
  }

  const renderTipButton = ({ item }) => (
    <TouchableHighlight style={[styles.button, {backgroundColor: '#8B5FBF'}]} onPress={() => setTipPercentage(item.id)}>
      <Text style={styles.buttonText}>{item.label}</Text>
    </TouchableHighlight>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tip Calculator</Text>
      <View style={styles.buttonContainer}>
        <TouchableHighlight style={styles.button} onPress={generateRandomBillAmount}>
          <Text style={styles.buttonText}>Generate Random Bill Amount</Text>
        </TouchableHighlight>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Bill Amount:</Text>
        <TextInput
          style={styles.input}
          keyboardType="decimal-pad"
          placeholder="Enter bill amount"
          value={billAmount}
          onChangeText={value => setBillAmount(value)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Tip Percentage:</Text>
        <TextInput
          style={styles.input}
          keyboardType="decimal-pad"
          placeholder="Enter tip percentage"
          value={tipPercentage}
          onChangeText={value => setTipPercentage(value)}
        />
      </View>
      <FlatList
        data={tipPercentages}
        keyExtractor={item => item.id}
        renderItem={renderTipButton}
        horizontal={true}
        contentContainerStyle={styles.buttonContainer}
      />
      <View style={styles.calculateButtonContainer}>
        <TouchableHighlight style={[styles.calculateButton, {backgroundColor: '#8B5FBF'}]} onPress={calculateTip}>
          <Text style={styles.buttonText}>Calculate Tip</Text>
        </TouchableHighlight>
      </View>
      {tipAmount !== '' && totalAmount !== '' && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Tip Amount: ${tipAmount}</Text>
          <Text style={styles.resultText}>Total Amount: ${totalAmount}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#8B5FBF',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#8B5FBF',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginRight: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#8B5FBF',
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#8B5FBF',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  calculateButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  calculateButton: {
    backgroundColor: '#8B5FBF',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  resultContainer: {
    marginTop: 20,
  },
  resultText: {
    fontSize: 18,
    color: '#8B5FBF',
    marginBottom: 10,
    paddingBottom: 10,
  },
});