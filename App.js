import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import GlobalStateProvider from './src/context/Provider';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    <GlobalStateProvider>
      {/* <SafeAreaProvider> */}
      <View style={{ flex: 1 }}>
        <NavigationContainer>
          <StatusBar style='auto' />
          <AppNavigator />
        </NavigationContainer>
      </View>
      {/* </SafeAreaProvider> */}
    </GlobalStateProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
