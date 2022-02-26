import { StatusBar, View } from 'react-native';
import { Box, Button, Text, NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/components/home';
import Details from './src/components/details';

import UsersContextProvider from './src/context/usersContext'

const Default = createNativeStackNavigator();
export default function App() {

  return (
    <UsersContextProvider>

      <NativeBaseProvider>

        <NavigationContainer>
          <Default.Navigator>

            <Default.Screen name="home" component={Home} />
            <Default.Screen name="details" component={Details} />

          </Default.Navigator>
        </NavigationContainer>

      </NativeBaseProvider>

    </UsersContextProvider>
  )
}

