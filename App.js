import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,SafeAreaView} from 'react-native';
import Login from './screens/Login';
import RootNavigation from './routes/RootNavigation';
import { AuthProvider } from './context/authContext';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      
     
      {/* <StatusBar style="auto" /> */}
      
      <AuthProvider><RootNavigation/></AuthProvider>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEEEEE",
    
  },
});
