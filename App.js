import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';

import {Info} from './src/Info';
import {Auth} from "./src/Auth";

export default function App() {
  return (
    <View style={styles.container}>
      <Info/>
      <Auth/>
      <View style={styles.btn}>
        <Text style={{ fontSize: 26, color: '#fff'}} >Войти</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: '#F19236',
    borderRadius: 50,
    width: 350,
    height: 50,
    margin: 10,
    marginBottom: 250,
    alignItems: 'center',
    justifyContent: 'center',
}
});
