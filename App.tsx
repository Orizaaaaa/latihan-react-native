import { View, Text, Image, Button, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native';
import React, { useEffect } from 'react';
import ProfileUser from './components/elements';
import { getProfile } from './service/service';

declare function alert(message?: any): void;
const sayHai = () => {
  alert('Hallo Bastard');
};

const buttonList = (item: string) => {
  alert(item);
}

const App = () => {
  const [list, setList] = React.useState([
    { id: 1, name: 'Deadpool' },
    { id: 2, name: 'Captain America' },
    { id: 3, name: 'Spiderman' }
  ]);

  const [input, setInput] = React.useState({
    username: '',
    password: ''
  });

  const handleChange = (name: string, text: string) => {
    setInput({ ...input, [name]: text });
  };

  const [user, setUser] = React.useState({
    first_name: '',
    avatar: '',
    email: ''
  });

  console.log(user);

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

        <View >
          {list.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => buttonList(item.name)} >
              <Text style={style.list} key={item.id}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <ProfileUser name="Abdul" age={20} email="oryzasativa@gmail.com" />
        <View>
          <Text style={style.resultInput} > nama kamu adalah : {input.username}</Text>
          <Text style={style.resultInput} > password kamu adalah : {input.password}</Text>
          <TextInput value={input.username} onChangeText={(text) => handleChange('username', text)} style={style.textInput} placeholder="Username" />
          <TextInput value={input.password} onChangeText={(text) => handleChange('password', text)} style={style.textInput} placeholder="Password" />
        </View>

      </View>
      <View>
        <Text style={style.titleFetch} > FETCHING DATA FROM API </Text>
        {user.avatar ? (<Image style={style.imageFetch} source={{ uri: user.avatar }} />) : null}
        <Text > {user.first_name} </Text>
        <Text > {user.email} </Text>
        <Button title="GET DATA" onPress={() => getProfile((data: any) => setUser(data.data))} />
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
  },

  // state dan list
  list: {
    marginTop: 5,
    width: '100%',
    padding: 10,
    backgroundColor: 'black',
    color: 'white'
  },

  // text input 
  textInput: {
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
    width: '60%',
    alignSelf: 'center',
    padding: 10,
    borderColor: 'black',
  },
  resultInput: {
    color: 'black',
    marginTop: 10,
  },
  titleFetch: {
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  imageFetch: {
    width: 70,
    height: 70,
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 100
  }
})
