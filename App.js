import React from 'react';
import { Button, TextInput, StyleSheet, Text, View } from 'react-native';

// useState-> State Hooks - StatefullWidget
//const [outputText, setOutputText] = useState('Open up App.js to start working on the project')


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputBox}>
        <TextInput placeholder="New Goal" style={styles.inputText} />
        <Button title="ADD" />
      </View>
      <View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 60
  },
  inputText: {
    flex: 1,
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    width: '80%'
  },
  inputBox: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }
});
