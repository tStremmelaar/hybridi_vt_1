import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const [input, setInput] = useState<string>("")

  const lowerLimit: string = `Lower limit: ${input} bpm`

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

        />
        <Text style={styles.text}>{lowerLimit}</Text>
        <Text style={styles.text}>placeholder</Text>
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
