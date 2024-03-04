import { View, Text, Image, Button } from 'react-native';
import React from 'react';

declare function alert(message?: any): void;
const sayHai = () => {
  alert('Hallo Bastard');
};

const App = () => {
  return (
    <View>
      <Text style={{ fontSize: 14 }}>
        <Text style={{ fontWeight: 'bold' }}> Selamat datang </Text> di
        aplikasi pertama saya
      </Text>
      <Image
        source={require('./assets/deadpool.png')}
        style={{ width: 350, height: 400 }}
      />
      <Button title="Punch Me" onPress={sayHai} />
    </View>
  );
};

export default App;
