import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import theme from './src/theme';
import { Loading } from './src/components/Loading';
import { Routes } from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({Inter_400Regular, Inter_700Bold });

  return (
    <ThemeProvider theme={theme}>
      {
        fontsLoaded ? <Routes /> : <Loading />
      }
      
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

