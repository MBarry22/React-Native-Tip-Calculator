import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tip Calculator</Text>
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
      <View style={styles.buttonContainer}>
        <Button title="10%" onPress={() => setTipPercentage('10')} />
        <Button title="15%" onPress={() => setTipPercentage('15')} />
        <Button title="20%" onPress={() => setTipPercentage('20')} />
        <Button title="Custom" onPress={() => setTipPercentage('')} />
      </View>
      <View style={styles.calculateButtonContainer}>
        <Button title="Calculate Tip" onPress={calculateTip} />
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
    justifyContent: 'flex-start',
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    marginRight: 10,
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 8,
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  calculateButtonContainer: {
    width: '100%',
    marginBottom: 20,
  },
  resultContainer: {
    alignItems: 'center',
  },
  resultText: {
    fontSize: 18,
    marginBottom: 10,
  },
});
