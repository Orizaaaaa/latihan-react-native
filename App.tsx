import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/home';
import About from './pages/about';
import Webview from './pages/webview';
import BackgroundPage from './pages/backgroundPage';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Webview" component={Webview} />
        <Stack.Screen name="BackgroundPage" component={BackgroundPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
