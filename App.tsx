import { View, Text, Image, Button, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

declare function alert(message?: any): void;
const sayHai = () => {
  alert('Hallo Bastard');
};

const App = () => {
  return (
    <View>
      <Text style={style.tulisan}>
        <Text style={style.italic}> Selamat datang</Text> di
        aplikasi pertama saya
      </Text>
      <Image
        source={require('./assets/deadpool.png')}
        style={style.image}
      />
      <Button title="Punch Me" onPress={sayHai} />
      <TouchableOpacity onPress={sayHai} style={style.touchButton}>
        <Text style={style.textTouchButton} >PUNCH ME ALSO</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

const style = StyleSheet.create({
  tulisan: {
    fontSize: 20
  },
  italic: {
    fontStyle: 'italic',
    fontWeight: 'bold'
  },
  image: {
    width: 350,
    height: 400
  },
  touchButton: {
    backgroundColor: 'red',
    padding: 10
  },
  textTouchButton: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold'
  }
})
