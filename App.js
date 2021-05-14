import React from 'react';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View
      style={{
        padding: 30,
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        justifyContent: 'space-around',
        alignItems: 'stretch',
      }}
    >
      <View
        style={{
          backgroundColor: 'red',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text>1</Text>
      </View>
      <View
        style={{
          backgroundColor: 'blue',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text>2</Text>
      </View>
      <View
        style={{
          backgroundColor: 'green',
          flex: 1,

          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text>3</Text>
      </View>
    </View>
  );
}
