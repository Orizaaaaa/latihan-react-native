import { View, Text, Image, Button, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

declare function alert(message?: any): void;
const sayHai = () => {
  alert('Hallo Bastard');
};

const App = () => {

  return (
    <ScrollView>
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

        <View style={style.parentFlex} >
          <Text style={style.boxYellow} >1</Text>
          <Text style={style.boxGreen} >2</Text>
          <Text style={style.boxRed} >3</Text>
        </View>

      </View>
    </ScrollView>
  );
};

export default App;

const style = StyleSheet.create({
  // pengenalan style
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

  // button
  touchButton: {
    backgroundColor: 'red',
    padding: 10
  },
  textTouchButton: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold'
  },

  // flex box
  parentFlex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  boxYellow: {
    width: 70,
    height: 70,
    backgroundColor: 'yellow'
  },
  boxGreen: {
    width: 70,
    height: 70,
    backgroundColor: 'green'
  },
  boxRed: {
    width: 70,
    height: 70,
    backgroundColor: 'red'
  }

})
