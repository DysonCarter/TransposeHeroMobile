import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import KeyForm from './components/KeyForm';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TransposeHero</Text>
      <KeyForm/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
