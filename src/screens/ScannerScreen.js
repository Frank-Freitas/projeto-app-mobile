import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ScannerScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scanner de Reciclagem</Text>
      <Button title="Escanear Código de Barras" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default ScannerScreen;
