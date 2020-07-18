require('react-native').unstable_enableLogBox()

import React, { useState } from 'react'
import { AppLoading } from 'expo'
import { StatusBar } from 'expo-status-bar'
import { ThemeProvider } from 'styled-components'
import defaultTheme from './src/styles/theme'

import { Ubuntu_700Bold, useFonts } from '@expo-google-fonts/ubuntu';
import { Roboto_300Light, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold, Roboto_900Black } from '@expo-google-fonts/roboto';

import { Container } from './src/styles/App.styled'
import StackRoutes from './src/routes/stack.routes';

import './src/utils/capitalize'

const App: React.FC = () => {
  const [theme, setTheme] = useState(defaultTheme);

  const [fontsLoaded] = useFonts({
    Ubuntu_700Bold,
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ThemeProvider theme={theme} >
        <Container>
          <StatusBar style="auto" />
          <StackRoutes />
        </Container>
      </ThemeProvider>
    )
  }
}

export default App

console.disableYellowBox = true;