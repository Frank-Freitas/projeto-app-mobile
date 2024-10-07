import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Início</Text>
      <View style={styles.dataContainer}>
        <Text>Qualidade do Ar: Carregando...</Text>
        <Text>Emissões de Carbono: Carregando...</Text>
      </View>
      <View style={styles.tipsContainer}>
        <Text>Dicas Diárias: Carregando dicas...</Text>
      </View>
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
  dataContainer: {
    marginVertical: 16,
  },
  tipsContainer: {
    marginVertical: 16,
  },
});

export default HomeScreen;
