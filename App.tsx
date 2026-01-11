import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const [input, setInput] = useState<string>("")

  // in addition to non-numeric values, negative numbers are ignored
  const age: number = !isNaN(Number(input)) === true ? Number(input) : -1
  const lowerLimit: number = age >= 0 ? (220 - age) * 0.65 : 0
  const upperLimit: number = age >= 0 ? (220 - age) * 0.85 : 0
  
  const lowerLimitText: string = `Lower limit: ${lowerLimit.toFixed(2)} bpm`
  const upperLimitText: string = `Upper limit: ${upperLimit.toFixed(2)} bpm`

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <StatusBar style="auto" />
        <Text style={styles.title}>Heart Rate Limits Calculator</Text>
        <Text style={styles.text}>Enter your age:</Text>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          keyboardType={'numeric'}
        />
        <Text style={styles.text}>{lowerLimitText}</Text>
        <Text style={styles.text}>{upperLimitText}</Text>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 48,
    paddingBottom: 55,

    backgroundColor: '#fff',

    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },

  title: {
    marginBottom: 20,

    fontSize: 24,
    fontWeight: 'bold',
  },

  text: {
    marginBottom: 4,

    fontSize: 16,
  },

  input: {
    marginBottom: 18,
    width: 90,

    borderColor: '#bbb',
    borderWidth: 1,
    borderRadius: 5,

    fontSize: 20,
  },
});
