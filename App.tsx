import { View, Text, Image, Button, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native';
import React, { useEffect } from 'react';
import ProfileUser from './components/elements';
import { getProfile } from './service/service';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/home';
import About from './pages/about';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
